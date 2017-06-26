var Minimize = require('minimize');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var callback = this.async();

    if (this.cacheable) {
        this.cacheable();
    }

    var opts = this.options['html-minify-loader'] || loaderUtils.getOptions(this) || {};
    minimize = new Minimize(opts);
    minimize.parse(source, callback);
};