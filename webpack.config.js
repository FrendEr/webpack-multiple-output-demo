var path = require('path');
module.exports = {
    entry: {
        'common/a': "./src/common/a/a.js",
        'page/b': "./src/page/b/b.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    }
};
