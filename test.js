const { transformSync } = require("@babel/core");
const code = `
      if (DEBUG) {
        console.log("click");
        const a = 10;
        const b = 10;
        console.log(a + b);
      }
`;
const babelConfig = {
  plugins: ["./index.js"],
};

const output = transformSync(code, babelConfig);
console.log(output.code);
