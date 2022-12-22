<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default{
    name: 'app',
    data(){
        return{   
        }
    }
}
</script>
<style>
@font-face {
  font-family: 'PyeongChangPeace-Light';
  src: url('@/assets/fonts/PyeongChangPeace-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'NanumGothic';
  src: url('@/assets/fonts/NanumGothic.ttf') format('truetype');
  font-weight: 400;
}
</style>

