# Bloxd Texture Packs
A repository containing texture packs for bloxd.io. Bellow you will find instructions on how to create your own custom texture pack.

## Tools to help make Texture Packs
- https://www.piskelapp.com/
- https://nimadez.github.io/voxel-builder/
- https://skybox-generator.vercel.app/

## Structure of a Texture Pack
A texture pack is a folder that has the following structure:
```
└── 📁<texturePackName>
    └── 📁textures
        └── <textureName>.png
    └── 📁skyBoxes
        └── 📁<skyBoxName>
            └── nx.jpg
            └── ny.jpg
            └── nz.jpg
            └── px.jpg
            └── py.jpg
            └── pz.jpg
    └── 📁models
        └── <modelName>.glb
    └── 📁css
        └── <cssFileName>.css
```

To see a very simple example of a texture pack, see the `exampleTexturePack` folder.

### Textures
You can overwrite a texture by adding png image to the `textures` folder that has the same name as one of the available textures names.

Textures are used for blocks, but also for items that you see in your inventory.

See the default texture pack to see which textures can be overwritten.

### Models
You can overwrite a model by adding a glb model file to the `models` folder that has the same name as the one of the available model names. You can read more about glb model files here: https://en.wikipedia.org/wiki/GlTF.

See the default texture pack to see which models can be overwritten.

### SkyBoxes
You can overwrite a skyBox by adding a folder in the `skyBoxes` folder that has the same name as one of the available skyboxes.

Available skyBox names are:
```
default
interstellar
space_blue
space_lightblue
space_red
```

All games on bloxd currently only use the `default` skybox, BloxdHop is the only game that makes use of the other ones.

### Css
You can insert custom css styling into bloxd by adding css files in the `css` folder. These css files can contain class 
styles, e.g.:
```
.WholeAppWrapper {
	color: red;
}
```

The files can also contain @font-face styles, e.g.:
```
@font-face {
	font-family: 'Pixelify Sans';
	font-style: normal;
	font-weight: 400 700;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/pixelifysans/v1/CHylV-3HFUT7aC4iv1TxGDR9JnkEi1lR.woff2) format('woff2');
	unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
```