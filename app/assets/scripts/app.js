//The main app.js file should be used to store the main
//excecution of the code. All other things, like objects,
//etc, should be stored in different files in the
// scrips/modules folder.
//To import other javascript files into this one, use require
// let audioplayer = require("./modules/audio.js");
//Although, require does not work in the browser, but it
//works with webpack.

//Download webpack from npm. (I've installed it globally).
//Then create a new file in the root (next to package.json) of the project. Call it
//webpack.config.js

// In this file, create an unnamed object:
// 1) entry is the filepath for the main app.js file
// 2)path is a new directory it will create, for where the comiled file should be
// 3)filename is what you want the new filename to be
//
// Heres an example:
// module.exports = {
//   entry: "./app/assets/scripts/app.js",
//   output: {
//     path: "./app.temt/scripts",
//     filename: "app.js"
//   }
// }

// Then, in the terminal, type webpack to run it.
// Dont forget to change the path to the js file in the html.

//There's more...see section 14 of Git a Web Dev Job. 
