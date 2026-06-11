#!/usr/bin/env node
"use strict"

/*
 * Regenerates _json/<pack>.json from the matching texture pack folder.
 *
 * Usage:
 *   npm run update-pack -- <packName> [--bump]
 *
 * Arguments:
 *   <packName>   Name of the texture pack folder to encode (e.g. "h4des").
 *   --bump, -b   Increment metaData.version by 1.
 *
 * Folder -> JSON mapping mirrors texturePackJsonFromFiles in the game's
 * TexturePackUtils.ts: assets are base64 data URLs, css is parsed into
 * fontFaces / classStyles. Existing metaData (name, author, previewImage,
 * version) is preserved from the current json, since it does not live in the
 * folder.
 */

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")
const JSON_DIR = path.join(ROOT, "_json")

const TEXTURES_DIR = "textures"
const MODELS_DIR = "models"
const SKYBOXES_DIR = "skyBoxes"
const CSS_DIR = "css"

// Mirrors how a browser File.type would be inferred by extension, which is what
// FileReader.readAsDataURL encodes into the data URL. Unknown extensions (.glb,
// etc.) fall back to application/octet-stream, matching the existing json.
const MIME_TYPES = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".gif": "image/gif",
	".webp": "image/webp",
	".svg": "image/svg+xml",
}

function mimeTypeForFile(filePath) {
	return MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream"
}

// Replicates `file.name.split(".")[0]` from the game: the override key is the
// file name up to (but not including) the first dot.
function overrideKeyFromFileName(fileName) {
	return fileName.split(".")[0]
}

function fileToDataUrl(filePath) {
	const data = fs.readFileSync(filePath)
	return `data:${mimeTypeForFile(filePath)};base64,${data.toString("base64")}`
}

// Returns all files within `dir` recursively, sorted by relative path for
// deterministic output.
function listFilesRecursive(dir) {
	if (!fs.existsSync(dir)) return []

	const files = []
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			files.push(...listFilesRecursive(full))
		} else if (entry.isFile()) {
			files.push(full)
		}
	}

	return files.sort()
}

function buildOverridesFromFolder(dir) {
	const overrides = {}
	for (const filePath of listFilesRecursive(dir)) {
		overrides[overrideKeyFromFileName(path.basename(filePath))] = fileToDataUrl(filePath)
	}
	return overrides
}

function buildSkyBoxes(skyBoxesDir) {
	const skyBoxes = {}
	if (!fs.existsSync(skyBoxesDir)) return skyBoxes

	const skyBoxFolders = fs
		.readdirSync(skyBoxesDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort()

	for (const skyBoxName of skyBoxFolders) {
		const customSkyBox = { type: "custom", nx: "", ny: "", nz: "", px: "", py: "", pz: "" }

		for (const filePath of listFilesRecursive(path.join(skyBoxesDir, skyBoxName))) {
			customSkyBox[overrideKeyFromFileName(path.basename(filePath))] = fileToDataUrl(filePath)
		}

		skyBoxes[skyBoxName] = customSkyBox
	}

	return skyBoxes
}

// Mirrors the css parsing in texturePackJsonFromFiles: extracts @font-face
// blocks and class style blocks via the same regexes so output matches the game.
function buildCustomCss(cssDir) {
	const customCss = { fontFaces: [], classStyles: {} }
	if (!fs.existsSync(cssDir)) return customCss

	const cssFiles = listFilesRecursive(cssDir).filter((filePath) => path.extname(filePath).toLowerCase() === ".css")

	for (const filePath of cssFiles) {
		const css = fs.readFileSync(filePath, "utf8")

		const fontFaceBlockPattern = /@(font-face)\s*\{\s*([^}]+)\s*\}/g
		const blockPattern = /\.([a-zA-Z:\d]+)\s*\{\s*([^}]+)\s*\}/g
		const stylePattern = /([a-zA-Z-]+)\s*:\s*([^;]+);/g

		let match

		while ((match = fontFaceBlockPattern.exec(css)) !== null) {
			const styles = match[2]
			const fontFace = {}

			let styleMatch
			while ((styleMatch = stylePattern.exec(styles)) !== null) {
				fontFace[styleMatch[1]] = styleMatch[2]
			}

			customCss.fontFaces.push(fontFace)
		}

		while ((match = blockPattern.exec(css)) !== null) {
			const className = match[1]
			const styles = match[2]

			let styleMatch
			while ((styleMatch = stylePattern.exec(styles)) !== null) {
				if (!customCss.classStyles[className]) {
					customCss.classStyles[className] = {}
				}
				customCss.classStyles[className][styleMatch[1]] = styleMatch[2]
			}
		}
	}

	return customCss
}

function parseArgs(argv) {
	let packName
	let bump = false

	for (const arg of argv) {
		if (arg === "--bump" || arg === "-b") {
			bump = true
		} else if (arg.startsWith("-")) {
			throw new Error(`Unknown flag: ${arg}`)
		} else if (packName === undefined) {
			packName = arg
		} else {
			throw new Error(`Unexpected extra argument: ${arg}`)
		}
	}

	if (!packName) {
		throw new Error("Missing required <packName> argument.\nUsage: npm run update-pack -- <packName> [--bump]")
	}

	return { packName, bump }
}

function main() {
	const { packName, bump } = parseArgs(process.argv.slice(2))

	const packDir = path.join(ROOT, packName)
	if (!fs.existsSync(packDir) || !fs.statSync(packDir).isDirectory()) {
		throw new Error(`Texture pack folder not found: ${packDir}`)
	}

	const jsonPath = path.join(JSON_DIR, `${packName}.json`)

	let existingMetaData
	if (fs.existsSync(jsonPath)) {
		existingMetaData = JSON.parse(fs.readFileSync(jsonPath, "utf8")).metaData || {}
	} else {
		console.warn(`No existing ${packName}.json found, creating new metaData (id="${packName}", version=1).`)
		existingMetaData = { id: packName, version: 1 }
	}

	const metaData = { ...existingMetaData }
	metaData.id = metaData.id || packName
	if (typeof metaData.version !== "number") {
		metaData.version = 1
	}
	if (bump) {
		metaData.version += 1
	}

	const texturePackJson = {
		metaData,
		textureOverrides: buildOverridesFromFolder(path.join(packDir, TEXTURES_DIR)),
		skyBoxes: buildSkyBoxes(path.join(packDir, SKYBOXES_DIR)),
		modelOverrides: buildOverridesFromFolder(path.join(packDir, MODELS_DIR)),
		customCss: buildCustomCss(path.join(packDir, CSS_DIR)),
	}

	fs.mkdirSync(JSON_DIR, { recursive: true })
	fs.writeFileSync(jsonPath, JSON.stringify(texturePackJson, null, 4))

	console.log(
		`Updated ${path.relative(ROOT, jsonPath)} (version ${metaData.version}${bump ? ", bumped" : ""}): ` +
			`${Object.keys(texturePackJson.textureOverrides).length} textures, ` +
			`${Object.keys(texturePackJson.modelOverrides).length} models, ` +
			`${Object.keys(texturePackJson.skyBoxes).length} skyBoxes, ` +
			`${texturePackJson.customCss.fontFaces.length} fontFaces, ` +
			`${Object.keys(texturePackJson.customCss.classStyles).length} classStyles.`,
	)
}

try {
	main()
} catch (err) {
	console.error(`Error: ${err.message}`)
	process.exit(1)
}
