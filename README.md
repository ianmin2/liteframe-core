     _ _ _        __                          
    | (_| |_ ___ / _|_ __ __ _ _ __ ___   ___        v.3
    | | | __/ _ | |_| '__/ _` | '_ ` _ \ / _ \
    | | | ||  __|  _| | | (_| | | | | | |  __/ -core
    |_|_|\__\___|_| |_|  \__,_|_| |_| |_|\___| 
                                    

(https://www.npmjs.com/package/liteframe-core)

A flexible lightweight framework with the bare minimums and networking capabilities

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
<!-- [![Linux Version][linux-image]][npm-url] -->

Extending the framework can be done by

    .inject("extension_key",extension_object_value);

or

    .inject([{extension_key:extension_object_value},{extension_key:extension_object_value}]);

----
### **To install**
> npm install -g liteframe-core

----

Extending the framework can be done by

    .inject("extension_key",extension_object_value);

or

    .inject([{extension_key:extension_object_value},{extension_key:extension_object_value}]);

`e.g`

    let liteframe_core  = require("liteframe-core");

    liteframe-core.inject([{sample : { one: "I am a sample injected value"}}]);

    console.log(liteframe-core.sample);

    //prints `I am a sample injected value`

----
### **Documentation** 
    In progress at  [liteframe-core.bixbyte.io](http://liteframe-core.bixbyte.io)

[npm-image]: https://img.shields.io/npm/v/liteframe.svg
[npm-url]: https://npmjs.org/package/liteframe-core
[downloads-image]: https://img.shields.io/npm/dm/liteframe.svg
[downloads-url]: https://npmjs.org/package/liteframe-core
[linux-image]: https://img.shields.io/travis/ianmin2/liteframe-core/master.svg?label=linux
[windows-image]: https://img.shields.io/appveyor/ci/dougwilson/liteframe-core/master.svg?label=windows

[test-image]: https://img.shields.io/coveralls/ianmin2/liteframe-core/master.svg
