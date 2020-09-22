module.exports = {
  devServer: {
    proxy: "http://localhost.localdomain",
    publicPath: "/",
    disableHostCheck: true,
  },
};
