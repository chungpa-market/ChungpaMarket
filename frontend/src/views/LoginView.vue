<template>
  <form v-on:submit.prevent="submitForm" method="post">
    <div class="login-container">
      <h1>
        <router-link href="" to="/">
          <img
            src="../assets/res/로고3.jpg"
            width="90px"
            height="84.28px"
          />청파마켓
        </router-link>
      </h1>
      <div class="id-field">
        <input
          type="text"
          id="id-field"
          placeholder="  아이디"
          v-model="username"
        />
      </div>

      <div class="password-field">
        <input
          type="password"
          id="password-field"
          placeholder="  비밀번호"
          v-model="password"
        />
      </div>

      <div class="btn-container">
        <router-link to="/">
          <button type="submit" id="login-btn">로그인</button>
        </router-link>
      </div>

      <div class="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label for="checkbox">로그인 상태 유지</label>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  title: '로그인',
  data: function () {
    return {
      username: '',
      password: '',
      title: 'login',
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.login-container {
  width: 635px;
  margin: 0 auto;
  font-weight: 300;
  font-size: 16px;
}
.login-container h1 a {
  display: flex;
  margin: 134px;
  justify-content: space-evenly;
  align-items: flex-end;
  font-family: 'PyeongChangPeace-Light';
  text-decoration-line: none;
  font-weight: 1000;
  font-size: 60px;
  color: #0035d3;
}
.login-container .id-field input,
.password-field input {
  border: 0.5px solid #001f7b;
}

.login-container div:not(.checkbox) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 64px 0 0 0;
}

.login-container .id-field input,
.password-field input {
  box-sizing: border-box;
  width: 635px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
}

.login-container .checkbox {
  width: 250px;
  margin: 10px 0 0 10px;
}

.login-container .checkbox input[type='checkbox'] {
  display: none;
}

.login-container input[type='checkbox'] + label {
  cursor: pointer;
  padding-left: 23px;
  background-repeat: no-repeat;
  background-image: url('../assets/res/Check-off.png');
  color: #b5b5b5;
}

.login-container input[type='checkbox']:checked + label {
  background-image: url('../assets/res/Check-on.png');
  font-weight: 600;
  color: black;
}

.login-container input[type='checkbox']:disabled + label {
  background-image: url('../assets/res/Check-off.png');
  color: #b5b5b5;
}

.login-container .btn-container {
  display: flex;
  justify-content: center;
  margin: 90px 0 90px 0;
}

.login-container button {
  display: block;
  align-items: center;
  box-sizing: border-box;
  width: 635px;
  height: 54px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  background: #0035d3;
  border: 2px solid #0035d3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
}
</style>
