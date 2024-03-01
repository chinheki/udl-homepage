const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyFilePlugin = require("copy-webpack-plugin")

const path = require("path");
module.exports = {
  mode: "development",
   entry: {
    main: './src/index.js',
    portfolio: './src/pages/Porfolio/index.js',
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, "build/"),
          publicPath: '/', 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader",  {
          loader: 'css-loader',
          options: {
          url:false,
        }}]
      },
    
      {
        test: /\.(jpe?g|png|gif|jfif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
   ignoreWarnings: [
    {
      module: /log4js/,
      message: /Critical dependency: the request of a dependency is an expression/,
    },
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "./"),
    ],
       alias: {
      '@resource': path.resolve(__dirname, './src/resource'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    }),
    new CopyFilePlugin({
      patterns: [
          {
          context: path.resolve(__dirname, "./src/resource/font"),
          from: path.resolve(__dirname, "./src/resource/font"),
          to: path.resolve(__dirname, "build/font"),
                    noErrorOnMissing: true
        },
        {
          context: path.resolve(__dirname, "./src/resource/images"),
          from: path.resolve(__dirname, "./src/resource/images"),
          to: path.resolve(__dirname, "build/images"),
                    noErrorOnMissing: true
        },
               {
          context: path.resolve(__dirname, "./src/resource/portfolioImages"),
          from: path.resolve(__dirname, "./src/resource/portfolioImages"),
          to: path.resolve(__dirname, "build/portfolioImages"),
                    noErrorOnMissing: true
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true,
    open: true
  },
};
