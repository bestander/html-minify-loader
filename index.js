var Minimize = require('minimize');


module.exports = function(source) {
    var callback = this.async();

    if (this.cacheable) {
        this.cacheable();
    }

    var opts = this.options['html-minify-loader'] || {};
    minimize = new Minimize(opts);
    minimize.parse(source, function (error, data) {
        callback(data);
    });
};
