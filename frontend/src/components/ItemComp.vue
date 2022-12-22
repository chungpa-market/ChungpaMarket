<template>
  <article class="list-item">
    <img
      src="../assets/res/융사글.jpg"
      width="240"
      height="170"
      alt=""
    />
    <div class="item-content">
      <div class="item-info">
        <h1>융합적 사고와 글쓰기</h1>
        <div>5000</div>
      </div>
      <p>
        사용감 별로 없고 깨끗합니다. 싸게 드릴테니 가격 흥정 안돼요!!
      </p>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
.list-item {
  width: 20%;
  margin: 30px 2.5%;
}

.list-item .item-content {
  width: 240px;
}

.list-item .item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-content p {
  margin: 14px 0;
}
</style>
