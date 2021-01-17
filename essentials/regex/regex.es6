
//!EMAIL VERIFICATION
exports.mailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/ig;

//!PASSWORD VERIFICATION
exports.passRegex = /^[-@./\!\$\%\^|#&,+\w\s]{6,50}$/ig;

//!USERNAME VERIFICATION
exports.userRegex = /^[a-z0-9_-]{4,16}$/ig;

//!TELEPHONE VERIFICATION
exports.telRegex  = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/igm;

//!IS FILLED VERIFICATION
exports.isFilled = /[.+]/ig;

//!IS MD5 REGEX 
exports.isMD5 = /^[a-f0-9]{32}$/gm;

//!IS BASE64 REGEX
exports.isBase64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/ig;

//@ REMOVE MATCHING
let RemoveMatch = function(originalArray, regex) {
    let j = 0;
    while (j < originalArray.length) {
        if (originalArray[j].toString().match(regex))
            originalArray.splice(j, 1);
        else
            j++;
    }
    return originalArray;
};
exports.removeMatch = exports.removeMatching = (arr,regx) => {
	return new RemoveMatch(arr,regx);
};

//@ KEEP MATCHING
let KeepMatch = function(originalArray, regex) {
    let j = 0;
    while (j < originalArray.length) {
        if (!originalArray[j].toString().match(regex))
            originalArray.splice(j, 1);
        else
            j++;
    }
    return originalArray;
};
exports.keepMatch = exports.keepMatching = (arr,regx) => {
	return new KeepMatch(arr,regx);
};
