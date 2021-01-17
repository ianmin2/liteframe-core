//@ TRIM
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};

//@ LTRIM
String.prototype.ltrim = function() {
    return this.replace(/^\s+/g, '');
};

//@ RTRIM
String.prototype.rtrim = function() {
    return this.replace(/\s+$/g, '');
};

//** ALLOW STRINGS TO BE CAPITALIZED **/
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
};