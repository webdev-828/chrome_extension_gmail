var webpack = require("webpack"),
    config = require("../webpack.config");

delete config.chromeExtension;

webpack(
    config,
    function(err) {
        if (err) throw err;
    }
);