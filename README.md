# Texture Packs
A repository containing texture packs for bloxd.io.

A texture pack is a json file which follows the following format:

```
{
  "metaData": {
		"id": <text>,
		"name"?: <text>,
		"previewImage"?: <text>,
		"author"?: <text>
	},
  "blockAtlas"?: <URL or base64URL>,
  "skyBoxes"?: {
    "default": <skybox>,
    "space_blue": <skybox>,
    "space_lightblue": <skybox>,
    "space_red": <skybox>
  },
  "itemModelOverrides"?: {
    <itemName>: <base64URL>
  }
}
```

A skybox can one of two types: either a Earth sky box, where the sky will be blue and there will be a sun whose properties you can modify:

```
{
	"type": "earth"
	"inclination"?: <number>
	"turbidity"?: <number>
	"infiniteDistance"?: <number>
	"luminance"?: <number>
	"yCameraOffset"?: <number>
	"azimuth"?: <number>
}
```

Or a custom sky box, where you define a image for 6 faces of a cube:

```
{
  "type": "custom",
  "nx": <URL or base64URL>,
  "ny": <URL or base64URL>,
  "nz": <URL or base64URL>,
  "px": <URL or base64URL>,
  "py": <URL or base64URL>,
  "pz": <URL or base64URL>,
}
```
