<template>
    <form v-on:submit.prevent="registrationForm" method="post">
        <div class="registration">
            <h1>
                <router-link href="" to="/">
                    <img src="../assets/res/로고3.jpg" width="90px" height="84.28px">청파마켓
                </router-link>
            </h1>
            <div class="registration-container">
                <div class="id">
                    <label for='id'>아이디</label>
                    <input id='id' type='text' v-model="id">
                </div>

                <div class="password">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" 
                    placeholder="   8~16글자 사이 입력" v-model="password">
                </div>

                <div class="check-password">
                    <label for="check-password">비밀번호 확인</label>
                    <input type="password" id="check-password" v-model="passwordCheck">
                </div>

                <div class="username">
                    <label for="username">이름</label>
                    <input type="text" id="username" v-model="username">
                </div>

                <div class="line"></div>

                <div class="phone-number">
                    <label for="phone-number">휴대폰번호</label>
                    <input type="text" v-model="phoneNumber" id="phone-number">
                </div>

                <div class="line"></div>

                <div class="email-address">
                    <label for="email">이메일</label>
                    <div class="email-input">
                        <input type="text" id="email-address" v-model="emailAddress">
                        <label for="@">@</label>
                        <select name="email" id="email" v-model="email">
                            <option value="">직접입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="sookmyung.ac.kr">sookmyung.ac.kr</option>
                            <option value="nate.com">nate.com</option>
                        </select>
                    </div>
                </div>

                <div class="btn-container">
                    <router-link to="/">
                        <button v-on:click="registration" type="submit">회원가입</button>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    title: '회원가입',
    name: 'registrationForm',
    data() {
        return {
            id: '', password: '', passwordCheck: '',
            username: '', phoneNumber: '', 
            emailAddress: '', email: '',
        }
    },
    methods: {
        registrationForm: function () {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const data = {
                id: this.id,
                password: this.password,
                passwordCheck: this.passwordCheck,
                username: this.username,
                phoneNumber: this.phoneNumber,
                emailAddress: this.emailAddress,
                email: this.email,
            }
            axios.post(url, data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
.registration {
    width: 1050px;
    margin: 0 auto;
    font-family: 'Nanum Gothic', sans-serif;
}
.registration h1 a{
    display: flex;
    margin: 100px;
    justify-content: center;
    align-items: flex-end;
    font-family: 'PyeongChangPeace-Light';
    text-decoration-line: none;
    font-weight: 1000;
    font-size: 60px;
    color: #0035D3;
}

.registration .line {
    border-bottom: 0.5px solid;
    border-color: #c2c2c2;
}

.registration input {
    border: 0.5px solid #001F7B;
}

.registration select {
    filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
    height: 40px;
}

.registration-container div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
}

.registration-container input:not(.phone-number) {
    box-sizing: border-box;
    width: 800px;
    height: 44px;
    background: #FFFFFF;
}

.registration button {
    display: block;
    align-items: center;
    box-sizing: border-box;
    width: 150px;
    height: 54px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    background: #0035D3;
    border: 2px solid #0035D3;
    border-radius: 17px;
}

.registration button:hover {
    background-color: #001F7B;
}

.registration-container .email-input {
    width: 400px;
    margin: 0;
    padding-right: 400px;
    justify-content: flex-start;
}

.registration-container .email-input label {
    margin: 0 14px;
}

.registration .email-address input {
    width: 278px;
    height: 44;
}

.registration .email-address select {
    width: 230px;
}

.registration-container .btn-container {
    display: flex;
    justify-content: center;
    margin: 150px 0 90px 0;
}

.registration .phone-number input{
    box-sizing: border-box;
    width: 800px;
    height: 44px;
    background: #FFFFFF;
}

.registration .phone-number{
    position: relative;
}
</style>