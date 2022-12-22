<template>
  <main>
    <NaviComp></NaviComp>
    <div class="body-header">
      <img
        src="../assets/res/거래btn.png"
        width="60px"
        height="60px"
        alt=""
      />거래 내역
    </div>
    <div class="select-box">
      <select name="deal-history">
        <option value="판매 내역" selected="selected">판매 내역</option>
        <option value="구매 내역">구매 내역</option>
      </select>
    </div>
    <div class="contents-container">
      <div class="content">
        <img
          src="../assets/res/no-item-image.png"
          width="217"
          height="168"
          alt=""
        />
        <div class="item-info">
          <div>융합적 사고와 글쓰기</div>
          <div><span>20,000원</span></div>
        </div>
        <div class="deal-status">거래 완료</div>
      </div>
      <div class="content">
        <img
          src="../assets/res/no-item-image.png"
          width="217"
          height="168"
          alt=""
        />
        <div class="item-info">
          <div>융합적 사고와 글쓰기</div>
          <div><span>20,000원</span></div>
        </div>
        <div class="deal-status">
          거래중
          <button>거래 완료하기</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NaviComp from '@/components/NaviComp.vue';
export default {
  title: '거래내역페이지',
  components:{
    NaviComp,
  }
};
</script>

<style>
.body-header {
  width: 218px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 0 0;
  font-weight: 800;
  font-size: 33px;
}

.select-box {
  display: flex;
  justify-content: flex-end;
}

.select-box select {
  width: 120px;
  height: 35px;
  font-weight: 600;
  font-size: 13px;
  box-shadow: 3px 3px 13px 2px rgba(59, 59, 59, 0.15);
  border-radius: 4px;
  border-style: none;
  padding: 0 6px;
  margin: 5px 0 36px 0;
}

.content {
  border: 1px solid #cccccc;
  border-radius: 17px;
  display: flex;
  align-items: center;
  padding: 20px 0 20px 20px;
  margin: 0 0 33px 0;
}

.content .item-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  margin: 0 510px 0 35px;
}

.content .deal-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  color: #0035d3;
}

.content .deal-status button {
  width: 115px;
  height: 39px;
  border: 0.5px solid rgba(0, 0, 0, 0.92);
  border-radius: 14px;
  background-color: white;
  font-weight: 400;
  font-size: 15px;
  margin: 10px 0 0 0;
}
</style>
