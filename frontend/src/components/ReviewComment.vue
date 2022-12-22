<template>
  <div class="reviewComment">
    <div>
      <div class="reviewer-profile">
        <div>
          <a href=""
            ><img
              src="../assets/res/UserCircle.png"
              width="45"
              height="45"
              alt="프로필"
          /></a>
        </div>
        <div class="profile-detail">
          <div class="reviewer-name">{{ reviewer.name }}{{ length }}</div>
          <div class="reviewer-major">{{ reviewer.major }}</div>
        </div>
      </div>
      <div class="review">{{ reviewer.review }}</div>
    </div>
    <div v-if="index !== length - 1" class="line" id="line3"></div>
  </div>
</template>

<script>
export default {
  name: 'ReviewComment',
  props: {
    reviewer: Object,
    index: Number,
    length: Number,
  },
};
</script>

<style>
.reviewComment .reviewer-profile .profile-detail {
  padding-left: 10px;
}

.reviewComment .reviewer-profile .reviewer-name {
  font-size: 14.5px;
  margin-bottom: 3px;
}

.reviewComment .reviewer-profile .reviewer-major {
  font-size: 10px;
  color: #aaaaaa;
}

.reviewComment .review {
  padding-left: 56px;
}

#line3 {
  border-bottom: 1px solid #dddddd;
  margin: 15px 0;
}
</style>

