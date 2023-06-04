## Setup webpack

```terminal
npm init -y
npm install webpack webpack-cli --save-dev
```

## package.json

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch",
    "start": "webpack serve --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.2"
  }
}
```

---

## creating a bundle

`npm install --save bundlename`  
Add `import` statement in the index.js file

##### Note: replace --save with --save-dev for development bundles

---

## using a configuration

Add webpack.config.js to the project

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Page name',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

---

## Output management

install HtmlWebpack plugin  
`npm install --save-dev html-webpack-plugin`

---

## Using Webpack-dev-server

to install  
`npm install -D webpack-dev-server`

#### Note: -D is short for --save-dev

use the command  
`npm run start`  
to run the development server
