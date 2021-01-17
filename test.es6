let liteframe_core  = require("./frame.js");

liteframe_core.inject([{sample : { one: "I am a sample injected value"}}]);
liteframe_core.inject([{sample : { one: "I won't work; I am already defined"}}]);

console.log(liteframe_core.sample);
