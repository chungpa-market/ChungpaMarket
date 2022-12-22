<template>
    <div class="search">
        <NaviComp></NaviComp>
        <div class="text">
            <div>"융합적 사고와 글쓰기"의 검색결과 6개</div>
        </div>
        <div class="recommend_sort">
            <div class="recommend">
                <div>추천</div>
                <div>|</div>
                <div>비사토</div>
                <div>교필</div>
                <div>영교필</div>
                <div>논사소</div>
                <div>교필책</div>
            </div>
            <div class="sort">
                <div>정확도순</div>
                <div>최신순</div>
                <div>저가순</div>
                <div>고가순</div>
            </div>
        </div>
        <div class="result">
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
        </div>
        <div class="result">
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
        </div>
    </div>
</template>
<script>
import NaviComp from '../components/NaviComp.vue';
import ItemComp from '@/components/ItemComp.vue';
export default{
    title: '검색결과페이지',
    components: {
        ItemComp,
        NaviComp,
    },
    props: {
        search: Object,
    },
}
</script>
<style>
.search .result {
    display: flex;
    justify-content: space-between;
}
.search .text{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
}
.search .recommend_sort{
    display: flex;
    padding-left: 30px;
    justify-content: space-between;
}
.search .recommend_sort .recommend,
.search .recommend_sort .sort {
    display: flex;
    justify-content: space-between;
}
.search .recommend_sort .recommend div {
    width: 50px;
}
.search .recommend_sort .sort div{
    width: 70px;
}

.search .recommend_sort .sort div:hover{
    color:blue;
}
</style>
