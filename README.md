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

Available texture names are:

```
allium
andesite_brick
apple_block_bottom
apple_block_side
apple_block_top
artisan_table_side
artisan_table_top
aspen_door_bottom
aspen_door_top
aspen_sapling
attached_melon_stem
attached_melon_stem_wrapper
azure_bluet
beacon
bedrock
berry_bush_stage0
berry_bush_stage1
berry_bush_stage2
black_concrete
black_glazed_terracotta
black_planks
black_stained_glass
blue_concrete
blue_glazed_terracotta
blue_orchid
blue_planks
board_full
bookshelf
bookshelf_1
bookshelf_2
bookshelf_3
bookshelf_4
bookshelf_5
bookshelf_empty
bread_block_back
bread_block_front
bread_block_side
bread_block_top
brick
brown_concrete
brown_glazed_terracotta
brown_mushroom
brown_mushroom_block
brown_planks
cactus_dry
cactus_side
cactus_top
carved_pumpkin
cedar_door_bottom
cedar_door_top
cedar_sapling
chest_front
chest_side
chest_top
chiseled_red_sandstone
chiseled_sandstone
clay
coal_block
coal_ore
coarse_dirt
cobblestone_mossy
cobweb
coconut_block_bottom
coconut_block_side
coconut_block_top
compressed_messy_stone
cornflower
cotton_plant_stage0
cotton_plant_stage1
cotton_plant_stage2
cotton_plant_stage3
crafting_table_side
crafting_table_top
cut_red_sandstone
cut_sandstone
cyan_concrete
cyan_glazed_terracotta
cyan_planks
dandelion
dark_green_bricks
destroy_stage_0
destroy_stage_1
destroy_stage_2
destroy_stage_3
destroy_stage_4
destroy_stage_5
destroy_stage_6
destroy_stage_7
destroy_stage_8
destroy_stage_9
diamond_block
diamond_ore
diorite_brick
dirt
elm_door_bottom
elm_door_top
elm_sapling
emerald_block
emerald_ore
end_stone
engraved_andesite
engraved_diorite
engraved_granite
extra_compressed_messy_stone
fallen_maple_leaves_side
farmland
fireball_block
furnace_front
furnace_side
furnace_top
glass
glass_black
glass_blue
glass_brown
glass_cyan
glass_gray
glass_green
glass_light_blue
glass_light_gray
glass_lime
glass_magenta
glass_orange
glass_pink
glass_purple
glass_red
glass_silver
glass_white
glass_yellow
glowstone
gold_block
gold_ore
granite_brick
grass_top
gravel
gray_concrete
gray_glazed_terracotta
gray_planks
green_bricks
green_concrete
green_glazed_terracotta
green_planks
green_stone
hardened_clay
hardened_clay_stained_black
hardened_clay_stained_blue
hardened_clay_stained_brown
hardened_clay_stained_cyan
hardened_clay_stained_gray
hardened_clay_stained_green
hardened_clay_stained_light_blue
hardened_clay_stained_lime
hardened_clay_stained_magenta
hardened_clay_stained_orange
hardened_clay_stained_pink
hardened_clay_stained_purple
hardened_clay_stained_red
hardened_clay_stained_silver
hardened_clay_stained_white
hardened_clay_stained_yellow
hay_block_side
hay_block_top
hyper_compressed_messy_stone
ice
iceball_block
ice_brick
invisible_solid
iron_block
iron_ore
iron_watermelon_side
iron_watermelon_top
lapis_block
lapis_ore
leaves_aspen
leaves_cedar
leaves_elm
leaves_maple
leaves_maple_autumn
leaves_palm
leaves_pear
leaves_pine
leaves_plum
light_blue_concrete
light_blue_glazed_terracotta
light_blue_planks
light_gray_concrete
light_gray_glazed_terracotta
light_gray_planks
light_gray_stained_glass
lily_of_the_valley
lime_concrete
lime_glazed_terracotta
lime_planks
log_aspen
log_cedar
log_elm
log_maple
log_palm
log_pear
log_pine
log_plum
magenta_concrete
magenta_glazed_terracotta
magenta_planks
magma
mailbox_front
mailbox_front_full
mailbox_side
maple_door_bottom
maple_door_top
maple_sapling
mega_compressed_messy_stone
melon_side
melon_stem
melon_top
messy_stone
moonstone_block
moonstone_chest_front
moonstone_chest_side
moonstone_chest_top
moonstone_explosive_side
moonstone_explosive_top
moonstone_ore
mossy_cobblestone
mushroom_stem
net
netherrack
nether_brick
obsidian
orange_concrete
orange_glazed_terracotta
orange_planks
orange_tulip
oxeye_daisy
palm_door_bottom
palm_door_top
palm_sapling
patterned_glass_black
patterned_glass_blue
patterned_glass_brown
patterned_glass_cyan
patterned_glass_gray
patterned_glass_green
patterned_glass_light_blue
patterned_glass_light_gray
patterned_glass_lime
patterned_glass_magenta
patterned_glass_orange
patterned_glass_pink
patterned_glass_purple
patterned_glass_red
patterned_glass_white
patterned_glass_yellow
pear_block_bottom
pear_block_side
pear_block_top
pear_door_bottom
pear_door_top
pear_sapling
pine_door_bottom
pine_door_top
pine_sapling
pink_concrete
pink_glazed_terracotta
pink_planks
pink_tulip
planks_aspen
planks_cedar
planks_elm
planks_maple
planks_palm
planks_pear
planks_pine
planks_plum
plant_cacti_by_arthur
plum_block_bottom
plum_block_side
plum_block_top
plum_door_bottom
plum_door_top
plum_sapling
podzol_top
poppy
protector
protector_faction
protector_tribe
pumpkin_face_on
pumpkin_side
pumpkin_top
purple_concrete
purple_glazed_terracotta
purple_planks
quartz_block_chiseled
quartz_block_side
redstone_lamp_off
redstone_lamp_on
red_concrete
red_glazed_terracotta
red_mushroom
red_mushroom_block
red_planks
red_sand
red_sandstone
red_sandstone_brick
red_sandstone_top
red_tulip
rice_stage0
rice_stage1
rice_stage2
rice_stage3
rice_stage4
rice_stage5
rice_stage6
rice_stage7
rocky_dirt
sand
sandstone_brick
sandstone_normal
sandstone_top
sea_lantern
slab_andesite_brick_side
slab_aspen_side
slab_brick_side
slab_cedar_side
slab_chiseled_red_sandstone_side
slab_chiseled_sandstone_side
slab_cobblestone_side
slab_cut_red_sandstone_side
slab_cut_sandstone_side
slab_diorite_brick_side
slab_dirt_side
slab_elm_side
slab_engraved_andesite_side
slab_engraved_diorite_side
slab_engraved_granite_side
slab_granite_brick_side
slab_grass_top_side
slab_ice_brick_side
slab_maple_side
slab_mossy_cobblestone_side
slab_palm_side
slab_pear_side
slab_pine_side
slab_plum_side
slab_red_sandstone_brick_side
slab_red_sandstone_side
slab_sandstone_brick_side
slab_sandstone_normal_side
slab_smooth_stone_side
slab_stonebrick_carved_side
slab_stonebrick_mossy_side
slab_stonebrick_side
slab_stone_andesite_side
slab_stone_andesite_smooth_side
slab_stone_diorite_side
slab_stone_diorite_smooth_side
slab_stone_granite_side
slab_stone_granite_smooth_side
slab_stone_side
small_cactus
smooth_stone
snow
sponge
stone
stonebrick
stonebrick_carved
stonebrick_cracked
stonebrick_mossy
stone_andesite
stone_andesite_smooth
stone_diorite
stone_diorite_smooth
stone_granite
stone_granite_smooth
stripped_aspen_log
stripped_cedar_log
stripped_elm_log
stripped_maple_log
stripped_palm_log
stripped_pear_log
stripped_pine_log
stripped_plum_log
super_compressed_messy_stone
tallgrass
tall_grass_bottom
tall_grass_top
ultra_compressed_messy_stone
unloaded
water
watermelon_side
watermelon_top
wheat_stage0
wheat_stage1
wheat_stage2
wheat_stage3
wheat_stage4
wheat_stage5
wheat_stage6
wheat_stage7
white_concrete
white_glazed_terracotta
white_planks
white_tulip
wither_rose
wool_colored_black
wool_colored_blue
wool_colored_brown
wool_colored_cyan
wool_colored_gray
wool_colored_green
wool_colored_light_blue
wool_colored_light_grey
wool_colored_lime
wool_colored_magenta
wool_colored_orange
wool_colored_pink
wool_colored_purple
wool_colored_red
wool_colored_silver
wool_colored_white
wool_colored_yellow
yellow_concrete
yellow_glazed_terracotta
yellow_planks
AK-47
allium
apple
arrow
artisan_axe
artisan_shears
aspen_door
aspen_sapling
aspen_trapdoor
AWP
azure_bluet
ball
beetroot_seeds
berry_bush_stage0
black_bed
blue_bed
blue_orchid
board
book
book_page
bowl
bowl_of_cranberries_1
bowl_of_cranberries_2
bowl_of_cranberries_3
bowl_of_cranberries_4
bowl_of_rice
bread
brown_bed
brown_mushroom
bucket
carpet_black_icon
carpet_blue_icon
carpet_brown_icon
carpet_cyan_icon
carpet_gray_icon
carpet_green_icon
carpet_light_blue_icon
carpet_light_gray_icon
carpet_lime_icon
carpet_magenta_icon
carpet_orange_icon
carpet_pink_icon
carpet_purple_icon
carpet_red_icon
carpet_white_icon
carpet_yellow_icon
cedar_door
cedar_sapling
cedar_trapdoor
coal
cobweb
coconut
compass
compass_dir_10
compass_dir_11
compass_dir_12
compass_dir_2
compass_dir_3
compass_dir_4
compass_dir_5
compass_dir_6
compass_dir_7
compass_dir_8
compass_dir_9
cornflower
cotton
cotton_seeds
cracked_coconut
cranberries
crimson_trapdoor
cyan_bed
dandelion
defense_arrow
defense_potion
diamond
diamond_axe
diamond_boots
diamond_bow
diamond_bow_charging_2
diamond_bow_charging_3
diamond_bow_charging_4
diamond_chestplate
diamond_crossbow
diamond_crossbow_charged
diamond_crossbow_charging_2
diamond_crossbow_charging_3
diamond_crossbow_charging_4
diamond_gauntlets
diamond_helmet
diamond_hoe
diamond_leggings
diamond_pickaxe
diamond_shovel
diamond_sword
Double-barreled
elm_door
elm_sapling
elm_trapdoor
empty_armor_slot_boots
empty_armor_slot_chestplate
empty_armor_slot_gauntlets
empty_armor_slot_helmet
empty_armor_slot_leggings
empty_bottle
fireball
glistering_melon_slice
glistering_watermelon_slice
golden_axe
golden_boots
golden_chestplate
golden_gauntlets
golden_helmet
golden_hoe
golden_leggings
golden_pickaxe
golden_shovel
golden_sword
gold_bow
gold_bow_charging_2
gold_bow_charging_3
gold_bow_charging_4
gold_coin
gold_crossbow
gold_crossbow_charged
gold_crossbow_charging_2
gold_crossbow_charging_3
gold_crossbow_charging_4
gold_ingot
gray_bed
green_bed
hang_glider
hang_glider_diamond
hang_glider_gold
hang_glider_iron
haste_arrow
haste_potion
heal_arrow
heal_potion
iceball
instant_damage_arrow
instant_damage_potion
invisibility_arrow
invisibility_potion
iron_axe
iron_boots
iron_bow
iron_bow_charging_2
iron_bow_charging_3
iron_bow_charging_4
iron_chestplate
iron_crossbow
iron_crossbow_charged
iron_crossbow_charging_2
iron_crossbow_charging_3
iron_crossbow_charging_4
iron_gauntlets
iron_helmet
iron_hoe
iron_ingot
iron_ladder
iron_leggings
iron_pickaxe
iron_shovel
iron_sword
iron_trapdoor
jump_arrow
jump_potion
knockback_arrow
knockback_potion
ladder_aspen
ladder_cedar
ladder_elm
ladder_maple
ladder_palm
ladder_pear
ladder_pine
ladder_plum
light_blue_bed
light_gray_bed
lime_bed
M16
M1911
magenta_bed
maple_door
maple_sapling
maple_trapdoor
melon_seeds
melon_slice
milk_arrow
milk_potion
Minigun
moonstone
moonstone_axe
moonstone_orb
moonstone_pickaxe
MP40
mushroom_soup
name_tag
net
netherite_hoe
oak_boat
orange_bed
orange_tulip
oxeye_daisy
palm_door
palm_sapling
palm_trapdoor
pear
pear_door
pear_sapling
pear_trapdoor
pebble
pine_door
pine_sapling
pine_trapdoor
pink_bed
pink_tulip
placeholder
plum
plum_door
plum_sapling
plum_trapdoor
poison
poison_arrow
poppy
potion
potion_table
pumpkin_pie
pumpkin_seeds
purple_bed
red_bed
red_mushroom
red_tulip
regen_arrow
regen_potion
reinforced_ball
reinforced_pebble
rice
rice_seeds
shears
slowness_arrow
slowness_potion
small_cactus
snowball
speed_arrow
speed_potion
splash_defense_potion
splash_haste_potion
splash_heal_potion
splash_instant_damage_potion
splash_invisibility_potion
splash_jump_potion
splash_knockback_potion
splash_milk_potion
splash_poison
splash_regen_potion
splash_slowness_potion
splash_speed_potion
splash_strength_potion
splash_weakness_potion
stick
stone_axe
stone_bow
stone_bow_charging_2
stone_bow_charging_3
stone_bow_charging_4
stone_crossbow
stone_crossbow_charged
stone_crossbow_charging_2
stone_crossbow_charging_3
stone_crossbow_charging_4
stone_hoe
stone_pickaxe
stone_shovel
stone_sword
strength_arrow
strength_potion
string
tallgrass
tall_grass_bottom
tall_grass_top
TAR-21
vine
vine_coloured
warped_trapdoor
watermelon_seeds
watermelon_slice
water_bottle
water_bucket
weakness_arrow
weakness_potion
wheat
wheat_seeds
white_bed
white_tulip
wither_rose
wooden_axe
wooden_hoe
wooden_pickaxe
wooden_shovel
wooden_sword
wood_boots
wood_bow
wood_bow_charging_2
wood_bow_charging_3
wood_bow_charging_4
wood_chestplate
wood_crossbow
wood_crossbow_charged
wood_crossbow_charging_2
wood_crossbow_charging_3
wood_crossbow_charging_4
wood_gauntlets
wood_helmet
wood_leggings
yellow_bed
```

### Models
You can overwrite a model by adding a glb model file to the `models` folder that has the same name as the one of the available model names. You can read more about glb model files here: https://en.wikipedia.org/wiki/GlTF.

Available model names are:
```
Aspen Door
Aspen Ladder
Aspen Trapdoor
Black Bed
Blue Bed
Board
Brown Bed
carpet_black_model
carpet_blue_model
carpet_brown_model
carpet_cyan_model
carpet_gray_model
carpet_green_model
carpet_light_blue_model
carpet_light_gray_model
carpet_lime_model
carpet_magenta_model
carpet_orange_model
carpet_pink_model
carpet_purple_model
carpet_red_model
carpet_white_model
carpet_yellow_model
Cedar Door
Cedar Ladder
Cedar Trapdoor
Crimson Trapdoor
Cyan Bed
Elm Door
Elm Ladder
Elm Trapdoor
Gray Bed
Green Bed
Iron Ladder
Iron Trapdoor
Light Blue Bed
Light Gray Bed
Lime Bed
Magenta Bed
Maple Door
Maple Ladder
Maple Trapdoor
Orange Bed
Palm Door
Palm Ladder
Palm Trapdoor
Pear Door
Pear Ladder
Pear Trapdoor
Pine Door
Pine Ladder
Pine Trapdoor
Pink Bed
Plum Door
Plum Ladder
Plum Trapdoor
Potion Table
Purple Bed
Red Bed
Vines
Warped Trapdoor
White Bed
Yellow Bed
_Aspen Door Top
_Black Bed Head
_Blue Bed Head
_Brown Bed Head
_Cedar Door Top
_Cyan Bed Head
_Elm Door Top
_Gray Bed Head
_Green Bed Head
_Light Blue Bed Head
_Light Gray Bed Head
_Lime Bed Head
_Magenta Bed Head
_Maple Door Top
_Orange Bed Head
_Palm Door Top
_Pear Door Top
_Pine Door Top
_Pink Bed Head
_Plum Door Top
_Purple Bed Head
_Red Bed Head
_White Bed Head
_Yellow Bed Head
AK-47
Alchemy Table
Allium
Apple
Arrow of Defense
Arrow of Haste
Arrow of Instant Damage
Arrow of Instant Healing
Arrow of Invisibility
Arrow of Jumping
Arrow of Knockback
Arrow of Milk
Arrow of Poison
Arrow of Regeneration
Arrow of Slowness
Arrow of Speed
Arrow of Strength
Arrow of Weakness
Arrow
Artisan Axe
Artisan Shears
Aspen Door
Aspen Sapling
AWP
Azure Bluet
Ball
Beetroot Seeds
Black Bed
Black Carpet
Blue Bed
Blue Carpet
Bluebell
Board
Boat Item
Boat
Book
Bowl of Rice
Bowl
Bread
Brown Bed
Brown Carpet
Brown Mushroom
Bucket
Cactus
Cedar Door
Cedar Sapling
Coal
Cobweb
Coconut
Compass
Compassmetadir10
Compassmetadir11
Compassmetadir12
Compassmetadir2
Compassmetadir3
Compassmetadir4
Compassmetadir5
Compassmetadir6
Compassmetadir7
Compassmetadir8
Compassmetadir9
Cotton Seeds
Cotton
Cracked Coconut
Cranberries
Cyan Bed
Cyan Carpet
Daisy
Dandelion
Defense Potion
Diamond Axe
Diamond Boots
Diamond Bow
Diamond Bowmetacharging2
Diamond Bowmetacharging3
Diamond Bowmetacharging4
Diamond Chestplate
Diamond Crossbow Charged
Diamond Crossbow
Diamond Crossbowmetacharging2
Diamond Crossbowmetacharging3
Diamond Crossbowmetacharging4
Diamond Gauntlets
Diamond Hang Glider Item
Diamond Hang Glider
Diamond Helmet
Diamond Hoe
Diamond Leggings
Diamond Pickaxe
Diamond Spade
Diamond Sword
Diamond
Double Barrel
Elm Door
Elm Sapling
Empty Bottle
exampleGame
Fireball
Forget-me-not
Full Bowl of Cranberries
Gold Axe
Gold Bar
Gold Boots
Gold Bow
Gold Bowmetacharging2
Gold Bowmetacharging3
Gold Bowmetacharging4
Gold Chestplate
Gold Coin
Gold Crossbow Charged
Gold Crossbow
Gold Crossbowmetacharging2
Gold Crossbowmetacharging3
Gold Crossbowmetacharging4
Gold Gauntlets
Gold Hang Glider Item
Gold Hang Glider
Gold Helmet
Gold Hoe
Gold Leggings
Gold Melon Slice
Gold Pickaxe
Gold Spade
Gold Sword
Gold Watermelon Slice
Grass
Gray Bed
Gray Carpet
Green Bed
Green Carpet
Half Full Bowl of Cranberries
Hang Glider
Haste Potion II
Haste Potion
Iceball
Instant Damage Potion
Instant Healing Potion
Invisibility Potion
Iron Axe
Iron Bar
Iron Boots
Iron Bow
Iron Bowmetacharging2
Iron Bowmetacharging3
Iron Bowmetacharging4
Iron Chestplate
Iron Crossbow Charged
Iron Crossbow
Iron Crossbowmetacharging2
Iron Crossbowmetacharging3
Iron Crossbowmetacharging4
Iron Gauntlets
Iron Hang Glider Item
Iron Hang Glider
Iron Helmet
Iron Hoe
Iron Leggings
Iron Pickaxe
Iron Spade
Iron Sword
Jump Potion
Kart
Knockback Potion
Light Blue Bed
Light Blue Carpet
Light Gray Bed
Light Gray Carpet
Lily of the Valley
Lime Bed
Lime Carpet
M16
M1911
Magenta Bed
Magenta Carpet
Maple Door
Maple Sapling
Melon Seeds
Melon Slice
Milk Potion
Minigun
Moonstone Axe
Moonstone Orb
Moonstone Pickaxe
Moonstone
MP40
Mushroom Soup
Name Tag
Nearly Full Bowl of Cranberries
Net
Netherite Hoe
Orange Bed
Orange Carpet
Orange Tulip
Palm Door
Palm Sapling
Partially Full Bowl of Cranberries
Pear Door
Pear Sapling
Pear
Pebble
Pine Door
Pine Sapling
Pink Bed
Pink Carpet
Pink Tulip
Plum Door
Plum Sapling
Plum
Poison Potion
Poppy
Potion Table
Pumpkin Pie
Pumpkin Seeds
Purple Bed
Purple Carpet
Red Bed
Red Carpet
Red Mushroom
Red Tulip
Regeneration Potion
Reinforced Ball
Reinforced Pebble
Rice Seeds
Rice
Shears
Slowness Potion
Snowball
Speed Potion II
Speed Potion
Splash Defense Potion
Splash Haste Potion II
Splash Haste Potion
Splash Instant Damage Potion
Splash Instant Healing Potion
Splash Invisibility Potion
Splash Jump Potion
Splash Knockback Potion
Splash Milk Potion
Splash Poison Potion
Splash Regeneration Potion
Splash Slowness Potion
Splash Speed Potion
Splash Strength Potion
Splash Weakness Potion
Stick
Stone Axe
Stone Bow
Stone Bowmetacharging2
Stone Bowmetacharging3
Stone Bowmetacharging4
Stone Crossbow Charged
Stone Crossbow
Stone Crossbowmetacharging2
Stone Crossbowmetacharging3
Stone Crossbowmetacharging4
Stone Hoe
Stone Pickaxe
Stone Spade
Stone Sword
Strength Potion
String
Tall Grass
TAR-21
Water Bottle
Water Bucket
Watermelon Seeds
Watermelon Slice
Weakness Potion
Wheat Seeds
Wheat
White Bed
White Carpet
White Tulip
Winchester
Wither Rose
Wood Axe
Wood Boots
Wood Bow
Wood Bowmetacharging2
Wood Bowmetacharging3
Wood Bowmetacharging4
Wood Chestplate
Wood Crossbow Charged
Wood Crossbow
Wood Crossbowmetacharging2
Wood Crossbowmetacharging3
Wood Crossbowmetacharging4
Wood Gauntlets
Wood Hang Glider Item
Wood Hang Glider
Wood Helmet
Wood Hoe
Wood Leggings
Wood Pickaxe
Wood Spade
Wood Sword
Yellow Bed
Yellow Carpet
```

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