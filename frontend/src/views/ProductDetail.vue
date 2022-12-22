<template>
  <main>
    <NaviComp></NaviComp>
    <div class="selected"><span>도서 </span></div>
    <div class="line"></div>
    <div class="product-detail-container">
      <div>
        <ItemInfo v-bind:product="product" v-bind:role="role"></ItemInfo>
        <div class="product-detail">
          <div class="header">상품정보</div>
          <div class="line"></div>
          <div>
            <div class="product-detail-area">
              <p>
                {{ info }}
              </p>
            </div>
            <div class="seller-info-area" id="seller-info-area">
              <div class="profile" id="profile">
                <img
                  src="../assets/res/UserCircle.png"
                  width="105"
                  height="105"
                  alt="프로필"
                />
                <div class="detail">
                  <div class="name">{{ seller.name }}</div>
                  <div>{{ seller.major }}</div>
                </div>
              </div>
              <div class="seller-detail-container">
                <div class="line" id="line3"></div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th><div>거래 횟수</div></th>
                        <td>
                          <div>{{ seller.dealNum }}</div>
                        </td>
                      </tr>
                      <tr>
                        <th><div>신뢰 온도</div></th>
                        <td>
                          <div>
                            <progress
                              :value="seller.trustTem"
                              max="100"
                            ></progress>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="line" id="line3"></div>
                <div class="deal-review-header">
                  <div>
                    거래 후기(<span>{{ seller.reviewNum }}</span
                    >)
                  </div>
                  <a href=""
                    ><img
                      src="../assets/res/go.png"
                      width="7px"
                      height="14px"
                      alt=">"
                  /></a>
                </div>
                <div class="reviewers">
                  <ul>
                    <ReviewComment
                      v-for="(reviewer, i) in reviewers"
                      :key="i"
                      v-bind:reviewer="reviewer"
                      v-bind:index="i"
                      v-bind:length="reviewers.length"
                    >
                    </ReviewComment>
                  </ul>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="other-products-container">
        <div class="header">동일 카테고리 다른 상품</div>
        <div class="other-products">
          <ul>
            <AnotherItem
              v-for="(item, i) in items"
              :key="i"
              v-bind:item="item"
            ></AnotherItem>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ItemInfo from '@/components/ItemInfo.vue';
import ReviewComment from '@/components/ReviewComment.vue';
import AnotherItem from '@/components/AnotherItem.vue';
import NaviComp from '@/components/NaviComp.vue';

export default {
  title: '상세페이지',
  name: 'ProductDetail',
  components: {
    ItemInfo,
    ReviewComment,
    AnotherItem,
    NaviComp,
  },
  data() {
    return {
      product: {
        id: '0',
        title: '융사글 책 팝니다',
        price: '20,000',
        img: 'https://dummyimage.com/200/F6A9A9/464660',
        like: 23,
        view: 60,
        time: 1,
        name: '융합적 사고와 글쓰기',
        method: '직거래',
      },
      info: '저희 학교 교양 필수인 융합적 사고와 글쓰기 책 팝니다~ 밑줄 두어번 그은게 다입니다!',
      seller: {
        name: '초코송이',
        major: '컴퓨터과학과',
        dealNum: 50,
        trustTem: 70,
        reviewNum: 5,
      },
      role: '판매자',
      reviewers: [
        {
          name: '컴과송이',
          major: '컴퓨터과학과',
          review: '거래 감사합니다! 좋은 책 저렴하게 잘 쓰도록 하겠습니다',
        },
        {
          name: '딸기송이',
          major: '소프트웨어융합학과',
          review: 'good',
        },
        {
          name: '소융송이',
          major: 'ㅇㄹㅇㅀㅇㅀㅀ학과',
          review:
            '정말 너어ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓ무 좋아요 미쳤엉요 완전 굿',
        },
        {
          name: 'abcdefghijkl',
          major: 'Sample Producㄴt1',
          review:
            ' 이젠 머리가 어지러워 어느새 해는 져 있고난 오늘이 무슨 요일인지도 모르고 사나 봐 어질러진 방은 치울 엄두조차 나질 않고 침대 위에 누워 얼마나 잘 수 있나 생각해',
        },
      ],
      items: [
        {
          title: 'Sample Product1',
          img: 'https://dummyimage.com/200/F6A9A9/464660',
        },
        {
          title: 'Sample Product2',
          img: 'https://dummyimage.com/200/FFBF86/464660',
        },
        {
          title: 'Sample Product3',
          img: 'https://dummyimage.com/200/FFF47D/464660',
        },
        {
          title: 'Sample Product4',
          img: 'https://dummyimage.com/200/C2F784/464660',
        },
        {
          title: 'Sample Product5',
          img: 'https://dummyimage.com/200/C2F784/464660',
        },
      ],
    };
  },
};
</script>

<style>
.selected {
  margin: 30px 0;
}

.selected span {
  font-size: 15px;
  font-weight: 200;
}

.selector-wrapper {
  margin: 10px 50px;
}

.selector-wrapper .label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 121px;
  height: 32px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
  background: white;
  filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
}

.selector-wrapper ul {
  padding-left: 0px;
  width: 121px;
  border: 1px solid rgb(182, 182, 182);
}

.selector-wrapper ul li {
  height: 32px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  padding: 0px 8px;
}

.selector-wrapper ul li:hover {
  background: #0035d3;
  color: white;
}

.product-detail {
  margin-top: 70px;
}

.product-detail .header {
  width: 330px;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #0035d3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.product-detail .product-detail-area {
  margin-top: 20px;
  float: left;
  width: 70%;
}

.product-detail .product-detail-area p {
  font-size: 16px;
  font-weight: 100;
}

.product-detail .seller-info-area {
  float: right;
  width: 29%;
}

.product-detail #seller-info-area {
  display: flex;
  flex-direction: column;
  border-left: 0.5px solid #bdbdbd;
  border-right: 0.5px solid #bdbdbd;
}

.product-detail .seller-info-area #profile {
  width: 60%;
  margin: 20px auto;
  margin-bottom: 0;
}

.product-detail .seller-info-area .profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-detail .seller-info-area .profile .detail {
  text-align: center;
}

.product-detail .seller-info-area .profile .detail .name {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 5px;
}

.product-detail .seller-info-area .seller-detail-container {
  width: 87%;
  margin: auto;
}

.seller-detail-container th,
.seller-detail-container td,
.deal-review-header div {
  font-size: 15px;
}

.product-detail .seller-info-area .seller-detail-container tr td {
  padding-left: 30px;
}

.product-detail .seller-info-area .deal-review-header {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.reviewers .reviewer-profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
}

.reviewers ul {
  margin-block-start: 30px;
  margin-block-end: 30px;
  margin: 20px 0 30px 0;
}

.other-products-container .header {
  margin: 50px 0 30px 0;
  font-weight: 500;
  font-size: 20px;
}

.other-products-container .other-products ul {
  display: flex;
  justify-content: space-between;
}
</style>