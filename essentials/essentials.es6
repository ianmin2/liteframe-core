/**
    FUNCTIONAL IMPORTS
**/

//@ Add the code tracing tools to the stack
require("./tracing/code-tracing.es6");

//@ Fetch the imported [local & installed] modules
Object.assign(global, require(require(`path`).join(__dirname, "imports.es6")));

//@ Include the main type extensions
require(path.join(__dirname, "extensions/index.es6"));

//@ The regular expressions setter
Object.assign(global, require(path.join(__dirname, "regex/index.es6")));

//@ Require some useful custom methods
Object.assign(global, require(path.join(__dirname, "custom/index.es6")));

//@ Basic Hashing
Object.assign(global, require(path.join(__dirname, "hashing/index.es6")));

Object.assign(global, require(path.join(__dirname, "logger/index.es6")));

/**
    EO - FUNCTIONAL IMPORTSconst dotenv = require("dotenv");

dotenv.config({
  debug: process.env.DEBUG,
});
**/

//---------------------------------------------------------------//

console.log("\n✔".succ + "  B a s i c  e s s e n t i a l s  L o a d e d".info);
