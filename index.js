module.exports = ({ types: t }) => {
  return {
    visitor: {
      // 去写一些逻辑
      Identifier(path) {
        const parentIsIf = t.isIfStatement(path.parentPath);
        const isDebug = path.node.name === "DEBUG";
        if (parentIsIf && isDebug) {
          // 把 Identifier 转换成 string
          const stringNode = t.stringLiteral("DEBUG");
          path.replaceWith(stringNode);
        }
      },
      StringLiteral(path, state) {
        const parentIsIf = t.isIfStatement(path.parentPath);
        const isDebug = path.node.value === "DEBUG";
        const PROD_ENV = state.opts.isProduction;
        console.log("PROD_ENV", PROD_ENV);

        if (parentIsIf && isDebug) {
          // 把 Identifier 转换成 string
          // 移除当前的节点
          // 方式一：判断当前浏览器运行环境
          // if (process.env.NODE_ENV === "production") {
          //   path.parentPath.remove();
          // }

          // 方式二：动态传入环境变量值
          if (PROD_ENV) {
            path.parentPath.remove();
          }
        }
      },
    },
  };
};
