<template>
  <div class="sell-info-container">
    <div class="img-area">
      <img
        src="../assets/res/no-picture.png"
        width="337"
        height="382"
        alt="상품 사진"
      />
    </div>
    <div class="detail-area">
      <div class="product-header">
        <div>
          <h2>{{ product.title }}</h2>
          <span>{{ product.price }}</span>
        </div>
        <div class="detail-btn-container" v-if="role === '판매자'">
          <router-link to="/write">
            <button>수정</button>
          </router-link>
          <button>삭제</button>
        </div>
      </div>
      <div id="line2"></div>
      <div class="post-info-icon-container" id="post-info-icon-container">
        <div class="icon">
          <img
            src="../assets/res/찜한수.png"
            width="14"
            height="13"
            alt="찜한수"
          /><span>{{ product.like }}</span>
        </div>
        <div><img src="../assets/res/세로 구분줄.png" alt="줄" /></div>
        <div class="icon">
          <img
            src="../assets/res/조회수.png"
            width="20"
            height="13"
            alt="조회수"
          /><span>{{ product.view }}</span>
        </div>
        <div><img src="../assets/res/세로 구분줄.png" alt="줄" /></div>
        <div class="icon">
          <img
            src="../assets/res/업로드 시간.png"
            width="14"
            height="14"
            alt="업로드 시간"
          /><span>{{ product.time }}시간 전</span>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th><div>상품명</div></th>
              <td>
                <div>{{ product.name }}</div>
              </td>
            </tr>
            <tr>
              <th><div>희망 거래 방식</div></th>
              <td>
                <div>
                  <span>{{ product.method }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-container">
        <ul>
          <li>
            <router-link to="/wish">
              <button>
                <img src="../assets/res/찜하기.png" width="60px" height="60px" alt="찜하기" />
              </button>
            </router-link>
          </li>
          <li>
            <a href=""
              ><img
                src="../assets/res/문의하기.png"
                width="60px"
                height="60px"
                alt="문의하기"
            /></a>
          </li>
          <li>
            <router-link to="/transactionhistory">
              <button>
                <img src="../assets/res/거래btn.png" width="60px" height="60px" alt="문의하기" />
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'ItemInfo',
  props: {
    product: Object,
    role: String
  },
};
</script>

<style>
.sell-info-container {
  display: block;
  margin-top: 32px;
}

.sell-info-container .img-area {
  float: left;
  width: 35.5%;
}

.sell-info-container .detail-area {
  height: 100%;
  float: right;
  width: 64.5%;
}

.sell-info-container .product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.sell-info-container .product-header h2 {
  margin-block-start: 13px;
  margin-block-end: 7px;
  font-size: 25px;
  font-weight: 600;
}

.sell-info-container .product-header span {
  font-size: 30px;
  font-weight: 600;
}

.sell-info-container .detail-btn-container button {
  width: 64px;
  height: 32px;
  background: #0035d3;
  border-radius: 10px;
  color: white;
  border-color: #0035d3;
  font-weight: 550;
  font-size: 14px;
  margin-left: 8px;
}

.sell-info-container table {
  margin: 40px 0;
}

.sell-info-container table th,
td {
  text-align: left;
  padding: 12px 10px 12px 0px;
  font-size: 13px;
}

.sell-info-container table th {
  padding-right: 70px;
}

.sell-info-container .detail-area #line2 {
  border-bottom: 1px solid #dddddd;
  margin: 20px 0 18px 0;
}

.post-info-icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#post-info-icon-container {
  width: 205px;
  margin: 4px 0 13px 0;
}

.post-info-icon-container .icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-info-icon-container div span {
  font-size: 11px;
  color: #cccccc;
  padding-left: 3px;
}

.sell-info-container .btn-container {
  margin-bottom: 13px;
}

.sell-info-container .btn-container ul {
  width: 280px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
  margin: 0;
}

.sell-info-container .btn-container ul li button {
  background: none;
  padding: 0;
  width: auto;
  border: 0;
}

.clear {
  clear: both;
}
</style>
