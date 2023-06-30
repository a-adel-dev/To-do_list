const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "src"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-do list",
      filename: "index.html",
      // template: "./src/source.html",
      // inject: true,
    }),
  ],
  output: {
    filename: "main-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
