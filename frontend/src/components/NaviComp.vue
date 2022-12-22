<template>
  <div id="app">
    <header class="header">
      <h1>
        <router-link href="" to="/"
          ><img
            src="../assets/res/로고3.jpg"
            width="55"
            height="51"
            alt="로고이미지"
          />청파마켓</router-link>
      </h1>
      <div class="search-box">
        <input type="text" />
        <router-link href="" to="/search" class="icon">
          <img
            src="../assets/res/검색 아이콘.png"
            width="20"
            height="20"
            alt="검색 버튼 아이콘"
          />
        </router-link>
      </div>
      <div class="login">
        <router-link href="" to="">
          <img
            src="../assets/res/청파톡.png"
            width="36px"
            height="33px"
            alt="채팅 아이콘"
          />
        </router-link>
        <router-link href="" to="/mypage">
          <img
            src="../assets/res/내정보.png"
            width="51px"
            height="47px"
            alt="내 정보 아이콘"
          />
        </router-link>
        <router-link href="" to="/login">로그인</router-link>
        <router-link href="" id="join" to="/registration">회원가입</router-link>
      </div>
    </header>
    <div>
      <nav>
        <ul class="nav">
          <li>
            <a class="category-container" href="">
              <div class="category-vector">
                <div></div>
                <div></div>
                <div></div>
              </div>
              카테고리
            </a>
            <ul class="category">
              <li>
                <a href="">도서</a>
                <ul class="submenu">
                  <li><a href="#">Service One</a></li>
                  <li><a href="#">Service Two</a></li>
                  <li><a href="#">Service Three</a></li>
                </ul>
              </li>
              <li>
                <a href="">도서</a>
                <ul class="submenu">
                  <li><a href="#">Service One</a></li>
                  <li><a href="#">Service Two</a></li>
                  <li><a href="#">Service Three</a></li>
                </ul>
              </li>
              <li><a href="">도서</a></li>
              <li><a href="">도서</a></li>
            </ul>
          </li>
          <li>
            <router-link href="" to="/sell">팔아요</router-link>
          </li>
          <li>
            <router-link href="" to="/buy">살래요</router-link>
          </li>
          <li>
            <router-link href="" to="/share">나눠요</router-link>
          </li>
        </ul>
      </nav>
      <div class="line" id="line1"></div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
    width: 1120px;
    margin: 0 auto;
    font-weight: 100;
    font-size: 13px;
    font-family: 'NanumGothic';
}

a {
  text-decoration-line: none;
  color: black;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
}

button {
  cursor: pointer;
}

.line {
  border-bottom: 0.5px solid;
  border-color: black;
}

#line1 {
  border-color: #c2c2c2;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-family: 'PyeongChangPeace-Light';
  font-weight: 1000;
  font-size: 36px;
}

.header h1 a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0035d3;
}

.header h1 a img {
  padding-right: 10px;
}

.header .search-box {
  position: relative;
  width: 510px;
  height: 35px;
}

.header .search-box .icon {
  position: absolute;
  top: 10px;
  right: -7px;
}

.header .search-box input {
  width: 100%;
  height: 100%;
  border: 2px solid #001f7b;
  border-radius: 38px;
  padding: 0 0 0 25px;
  font-weight: 520;
  font-size: 13px;
  font-family: NanumGothic;
}

.login {
  display: flex;
  align-items: center;
}

.login #login {
  border-right: 1px solid black;
  padding: 0 12px 0 8px;
}

.login #join {
  padding: 0 0 0 12px;
}

.nav {
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-size: 17px;
  margin: 7px 0px;
}

.nav > li {
  position: relative;
  line-height: 50px;
}

.nav > li > a:hover {
  color: #0035d3;
}

.category {
  width: 208px;
  display: none;
  position: absolute;
  z-index: 2;
  background: white;
  border-radius: 3px;
  box-shadow: 3px 3px 13px 1px rgba(75, 75, 75, 0.15);
}

.category > li {
  line-height: 30px;
  position: relative;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 16px;
}

.category a {
  display: block;
}

.nav > li:hover .category {
  display: block;
}

.category li:hover {
  background: #e6e6e6;
}

.category-container {
  display: flex;
  align-items: baseline;
}

.category-vector div {
  width: 20px;
  border-bottom: 2px solid;
  padding-bottom: 4px;
  margin-right: 10px;
}
</style>
