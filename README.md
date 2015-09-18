# webpack-multiple-output-demo

> A demo for webpack with multiple entries and outputs.

## webpack.config.js

```
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

```

## src tree

```

|-- src
   |-- common
       |----- a
              |-- a.js
   |-- page
       |----- b
              |-- b.js

```

## dist tree

```

|-- dist
   |-- common
       |----- a
              |-- a.entry.js
   |-- page
       |----- b
              |-- b.entry.js

```

## advantage

#### You can use webpack with gulp watch to develop your static page.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>webpack-multiple-output-demo</title>
    </head>
    <body>
        <script src="./dist/common/a/a.entry.js"></script>
        <script src="./dist/page/b/b.entry.js"></script>
    </body>
</html>

```
