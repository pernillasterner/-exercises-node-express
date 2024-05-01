// ComonJS, every file is module (by default)
// Modules - Encapsulated Code (Split my code in modules)
// Smaller filer and more structure to the application

// Access names
const names = require("./4-names.js");
const sayHi = require("./5-utils");

sayHi(names.john);
sayHi(names.peter);
