module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [["../index.js", { isProduction: true }]],
};
