<template>
  <div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = () => {
      // 1. 在 dev 环境下执行
      // 2. 在 prod 环境下不执行
      console.log("click");
      if (DEBUG) {
        const a = 10;
        const b = 10;
        console.log(a + b);
      }
    };

    return { handleClick };
  },
};
</script>

<style lang="scss" scoped></style>
