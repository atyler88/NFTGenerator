"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "Digital Pirates sailing the crypto seas.";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
   {
    growEditionSizeTo: 7,
    namePrefix: "Pirates",
    layersOrder: [
      { name: "HairColor"},
      { name: "Skin"},
      { name: "Pupils" },
      { name: "Ears"},
      { name: "Head"  },
      { name: "Eyes" },  
      { name: "Hairstyle"}, 
    ],
  },
  // {
  //   growEditionSizeTo: 11,
  //   namePrefix: "Clipp",
  //   layersOrder: [
  //     { name: "Head" },
  //     { name: "Eyes" },
  //     { name: "Hair" },
  //     { name: "Head Accessory" }, // Contains -CLIP layer, will clip anything below it

  //     { name: "Clothes", blend: "destination-over" }, // things that shouldn't be clipped and need to be drawn behind, set to 'destination-over'
  //     { name: "Back Accessory", blend: "destination-over" }, // things that shouldn't be clipped and need to be drawn behind, set to 'destination-over'

  //     { name: "Shirt Accessories", blend: "source-over" }, // things that can be stacked on-top, can be listed as normal
  //   ],
  // },
  // {
  //   growEditionSizeTo: 5,
  //   namePrefix: "Monkey",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Female Hair", trait: "Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
};

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 6000,
  height: 6000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  buildDir,
  layersDir,
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraAttributes,
  extraMetadata,
  incompatible,
  forcedCombinations,
  outputJPEG,
  emptyLayerName,
  hashImages,
};
