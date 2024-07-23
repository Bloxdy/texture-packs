# Bloxd Texture Packs
A repository containing texture packs for bloxd.io. Bellow you will find instructions on how to create your own custom texture pack.

## General format of a texture pack
A texture pack is a json file which follows the following format:

```
{
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

## Customising the block atlas
The block atlas is an image which contains the textures used for all blocks in bloxd. To create a new one, you should start with the default bloxd block atlas and edit it in a software like Pixlr. This is an old video so a lot has changed but it shows the general idea: https://www.youtube.com/watch?v=-BaQK7Zc0T8. Once you have a custom block atlas image, you can host it somewhere like imigur and use the URL to reference it, or convert it to a base64 URL (see Base64 URLs section for information on how to do this). To add this block atlas to your custom texture pack, your config should include the following:
```
{
    "blockAtlas"?: <URL or base64URL>,
}
```

## Customising the skyboxes
A skybox is how you can change how the sky looks in bloxd.

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

# Base64 URLs
