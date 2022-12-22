<template>
  <main>
    <NaviComp></NaviComp>
    <div class="my-info-container">
      <div class="img-area">
        <img
          src="../assets/res/UserCircle.png"
          width="185"
          height="185"
          alt=""
        />
      </div>
      <div class="txt-area">
        <div id="name">noonsong123</div>
        <div>컴퓨터과학과</div>
        <div class="deal-info-container">
          <div class="reliability">
            신뢰온도
            <div class="count" id="reliability"><span>58</span>°</div>
          </div>
          <div class="deal-count">
            거래횟수
            <div class="count" id="count">3</div>
          </div>
        </div>
        <div class="deal-info-a-tags">
          <router-link class="item" href="" to="/wish">찜 목록</router-link>
          <router-link class="item" href="" to="/detail">받은 거래 후기</router-link>
          <router-link class="item" href="" to="/transactionhistory">거래 내역</router-link>
          <a class="item" href="">채팅</a>
        </div>
        <div class="btn-container">
          <router-link to="/write"><button>글 등록</button></router-link>
          <button id="logout-btn">로그아웃</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NaviComp from '@/components/NaviComp.vue';
export default {
  title: '마이페이지',
  components: {
    NaviComp,
  }
};
</script>

<style>
.txt-area {
  margin: 0 0 0 31px;
}

.txt-area #name {
  font-weight: 800;
  font-size: 33px;
  margin: 30px 0 0 0;
}

.my-info-container {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  margin-top: 92px;
  padding: 50px;
  display: flex;
}

.my-info-container .deal-info-container {
  display: flex;
  align-items: center;
  margin: 15px 0 0 0;
}

.my-info-container .deal-info-container .reliability {
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.my-info-container .deal-info-container .count {
  font-weight: 800;
  font-size: 32px;
  margin: 0 0 0 20px;
}

.my-info-container .deal-info-container .deal-count {
  font-weight: 400;
  font-size: 20px;
  margin-left: 44px;
  display: flex;
  align-items: center;
}

.my-info-container .deal-info-container .reliability #reliability {
  color: #0035d3;
}

.my-info-container .deal-info-container .deal-count #count {
  color: #ff0000;
}

.my-info-container .deal-info-a-tags {
  width: 302px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0 40px 0;
}

.my-info-container .deal-info-a-tags .item {
  width: 50%;
}

.my-info-container .btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px 0;
}

.btn-container button {
  width: 142px;
  height: 42px;
  font-weight: 550;
  font-size: 17px;
  color: white;
  background-color: #3b42fc;
  border-radius: 10px;
  border-color: #3b42fc;
}

.btn-container #logout-btn {
  margin: 0 0 0 42px;
}
</style>
