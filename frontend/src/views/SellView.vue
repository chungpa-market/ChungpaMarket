<template>
    <div class="sell">
      <NaviComp></NaviComp>
      <header class="body-header">
        <img src="../assets/res/sell 1.png" alt="" width="70px" height="70px" />팔아요
      </header>
      <section>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
      </section>
    </div>
</template>

<script>
import ItemComp from '@/components/ItemComp.vue';
import NaviComp from '@/components/NaviComp.vue'
export default {
  title: '팔래요',
  name: 'ProductDetail',
  components: {
    ItemComp,
    NaviComp,
  },
};
</script>

<style>
.sell .body-header {
  width: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 0 34.988px;
  font-weight: 800;
  font-size: 30px;
}

.sell section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>