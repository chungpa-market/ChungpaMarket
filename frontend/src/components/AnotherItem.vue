<template>
  <div class="another-item">
    <img
      src="../assets/res/no-picture.png"
      width="190"
      height="190"
      alt="상품1"
    /><br />{{ item.title }}
  </div>
</template>

<script>
export default {
  name: 'AnotherItem',
  props: {
    item: Object,
  },
};
</script>

<style>
.another-item {
  text-align: center;
}

.another-item img {
  margin: 0 0 5px 0;
}
</style>
