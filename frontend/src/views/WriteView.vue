<template>
    <form v-on:submit.prevent="writeForm">
        <div>
            <NaviComp></NaviComp>
            <div class="info-container">
                <ul class="type-container">
                    <li>
                        <input type="radio" name="type" id="sell" checked="checked" v-model="sell">
                        <label for="sell">팔아요</label>
                    </li>
                    <li>
                        <input type="radio" name="type" id="buy" v-model="buy">
                        <label for="buy">살래요</label>
                    </li>
                    <li>
                        <input type="radio" name="type" id="share" v-model="share">
                        <label for="share">나눠요</label>
                    </li>
                </ul>
                <div class="title">
                    <label for="title">제목</label>
                    <input type="text" id="title" v-model="title">
                </div>

                <div class="name">
                    <label for="name">상품명</label>
                    <input type="text" id="name" v-model="name">
                </div>

                <div class="category-box">
                    <select name="category" id="category" v-model="category">
                        <option value="카테고리">카테고리</option>
                    </select>
                    <input type="text" id="price" placeholder="   희망 가격(선택 사항)" v-model="price">

                    <div class="checkbox">
                        <input type="checkbox" id="checkbox" v-model="checkbox">
                        <label for="checkbox" style="padding-left: 30px; padding-top: 3px;">가격 제안 받기</label>
                    </div>
                </div>

                <div class="line" id="line2"></div>

                <div class="description">
                    <label for="description">상품 설명</label>
                    <input type="text" id="description" v-model="description">
                </div>

                <div class="line"></div>

                <div class="image">
                    <label for="image">상품 이미지</label>
                    <img src="../assets/res/no-picture.png" style="height:200px; width: 200px; padding-right:660px;">
                    <input type="file" required name="image" id="image">
                </div>

                <div class="line" id="line4"></div>

                <div class="transaction-way">
                    <div id="transaction-way" style="margin-left: 0px">희망 거래 방식</div>
                    <div class="direct">
                        <input type="checkbox" id="direct" v-model="direct">
                        <label for="direct" style="padding-left: 30px; padding-top: 3px;">직거래</label>
                    </div>

                    <div class="deliver">
                        <input type="checkbox" id="deliver" v-model="deliver">
                        <label for="deliver" style="padding-left: 30px; padding-top: 3px;">택배 거래</label>
                    </div>

                    <div class="locker">
                        <input type="checkbox" id="locker" v-model="locker">
                        <label for="locker" style="padding-left: 30px; padding-top: 3px;">사물함 거래</label>
                    </div>
                </div>

                <div class="line" id="line5"></div>

                <div class="btn-container">
                    <router-link to="/">
                        <button type="submit">등록</button>
                    </router-link>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import NaviComp from '@/components/NaviComp.vue';
import axios from 'axios';
export default {
    title: '글작성페이지',
    name: 'writeForm',
    data(){
        return{
            sell: '', buy: '', share: '',
            title: '', name: '', category: '', price: '', checkbox: '',
            description: '', direct: '', deliver: '', locker: '',
        }
    },
    components: {
        NaviComp,
    },
    methods: {
        writeForm: function(){
            const url = 'https://jsonplaceholder.typicode.com/users';
            const data = {
                sell: this.sell,
                buy: this.buy,
                share: this.share,
                title: this.title,
                name: this.name,
                category: this.category,
                price: this.price,
                checkbox: this.checkbox,
                description: this.description,
                direct: this.direct,
                deliver: this.deliver,
                locker: this.locker,
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
.info-container {
    font-weight: 400;
    font-size: 18px;
}

.info-container .line {
    border-bottom: 0.5px solid;
    border-color: #c2c2c2;
}
.info-container .type-container button {
    border-radius: 17px;
}

.info-container .type-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 210px;
    margin-top: -20px;
    list-style-type: none;
}

.info-container .type-container li {
    margin-right: 25px;
}

.info-container .type-container label,
.info-container .type-container input {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 130px;
    height: 60px;
    color: #969696;
    font-weight: 700;
    font-size: 28px;
    background: #e9e9e9;
    border-radius: 17px;
}

.info-container .type-container input[type="radio"] {
    opacity: 0.01;
    z-index: 100;
}

.info-container .type-container input[type="radio"]:checked+label,
.Checked+label {
    color: white;
    background: #0035D3;
}

.info-container .type-container label {
    padding: 25px;
    cursor: pointer;
    z-index: 90;
}

.info-container .type-container label:hover {
    background: #DDD;
}

.info-container div:not(.btn-container) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px;
}

.info-container .title input,
.info-container .name input {
    box-sizing: border-box;
    width: 859px;
    height: 44px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
}

.info-container .category-box select,
.info-container .transaction-area select {
    width: 196px;
    height: 48px;
    filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
}

.info-container .category-box {
    position: relative;
    padding-left: 160px;
}

.info-container .category-box input[type=text] {
    box-sizing: border-box;
    width: 600px;
    height: 45.29px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
}

.info-container .checkbox {
    position: absolute;
    width: 170px;
    height: 40px;
    top: -40px;
    right: -60px;
}

.info-container input[type="checkbox"] {
    position: relative;
    display: none;
    top: -1.5px;
}

.info-container input[type=checkbox]+label {
    cursor: pointer;
    padding-left: 23px;
    color: #B5B5B5;
    background-repeat: no-repeat;
    background-image: url('../assets/res/Check-off.png');
}

.info-container input[type=checkbox]:checked+label {
    background-image: url('../assets/res/Check-on.png');
    color: #0035d3;
    font-weight: 400;
}

.info-container input[type=checkbox]:disabled+label {
    background-image: url('../assets/res/Check-off.png');
    color: #B5B5B5;
    font-weight: 400;
}

.info-container .description input {
    box-sizing: border-box;
    width: 859px;
    height: 300px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
    font-size: 20px;
}

.info-container .image input {
    display: none;
}

.info-container .transaction-way {
    padding-right: 190px;
}

.info-container .transaction-way div {
    width: 130px;
    height: 24px;
}

.info-container .btn-container {
    display: flex;
    justify-content: center;
    margin: 100px 0 90px 0;
}

.info-container .btn-container button {
    display: block;
    align-items: center;
    box-sizing: border-box;
    width: 130px;
    height: 60px;
    color: white;
    font-weight: 700;
    font-size: 28px;
    background: #0035D3;
    border-radius: 17px;
}

.info-container .btn-container button:hover {
    background: #001f7b;
}
</style>