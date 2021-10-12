let v = JSON.parse(require('fs').readFileSync(`${__dirname}/package.json`)).version;
console.log(`\n\t\t  @liteframe-core ${v}\n\t\t___________________`);

//@ Load the core framework essentials
require(require("path").join(__dirname, `essentials/essentials.es6`))

//@ Load the express server configuration file
require("./rest/rest.es6");

//@ Allow framework functionality injection [this method does not allow explicit module content overwriting]
// inject("extension_key",extension_object_value);
// inject([{extension_key:extension_object_value},{extension_key:extension_object_value}]);

let framify = {
    icons: {
        check: `✔`.succ,
        cross: `❌`,
        stop: `🛑`,
        notice: `📢`,
        warning: `⚠️`,
        fire: `🔥`,
        bomb: `💣`,
        copyright: `©️`,
        trademark: `™️`,
        reqistered: `®️`,
        success: `✨`,
    },
    newArray: (length) => new Array(length),
    loop: x => f => {
        if (x > 0) {
            f()
            framify.method_loop(x - 1)(f)
        }
    },
    duplicate: (itm, times) => ((itm && times) && !isNaN(times)) ? framify.newArray(times).fill(itm).join('') : itm,
    inject: function(nom, objet) {
        //@ Handle multiple definitions
        if (Array.isArray(nom)) {

            let response = [];

            nom.forEach(injection_object => {

                let kys = Object.keys(injection_object);
                let vls = Object.values(injection_object);

                let rsp = [];

                if (kys[0]) {
                    kys.forEach((val, idx) => {
                        if (this[val] != null) {
                            rsp.push(false);
                        } else {
                            try {

                                this[val] = vls[idx];

                                rsp.push(true);

                            } catch (e) {
                                rsp.push(false);
                            }

                        }
                    });
                } else {
                    rsp.push(false);
                }

                response.push(rsp);


            });

            return response;
        } else {

            if (this[nom] != null) return false;
            try {
                this[nom] = objet;
                return true;
            } catch (e) {
                return false;
            }

        }

    }
};

//@ Make the application essentials available
// Object.assign( framify,   );

module.exports = framify;