<template>
  <div class="home">
    <van-nav-bar
      title="智慧商城"
    />
    <van-search
      v-model="searchValue"
      background="#f1f1f2"
      placeholder="请输入搜索关键词"
      readonly
      shape="round"
      @click="$router.push('/search')"
    />
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item><img src="@/assets/banner1.jpg"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner2.jpg"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner3.jpg"/></van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="https://smart-shop.itheima.net/uploads/10001/20230320/58a7c1f62df4cb1eb47fe83ff0e566e6.png"
        text="新品首发"
      />
    </van-grid>

    <div class="main">
      <img alt="" src="@/assets/main.png">
    </div>

    <div class="guess">
      <p class="guess-title">-- 猜你喜欢 --</p>
      <div class="goods-list">
        <GoodsItem v-for="item in 10" :key="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>

import GoodsItem from '@/components/GoodsItem.vue'

export default {
  name: 'HomeIndex',
  components: { GoodsItem },
  data () {
    return {
      searchValue: ''
    }
  }
}
</script>

<style scoped>
.van-nav-bar {
  background-color: rebeccapurple;
}

::v-deep .van-nav-bar__title {
  color: #fff;
}

img {
  width: 375px;
}

::v-deep .van-icon {
  font-size: 40px;
}

.guess-title {
  text-align: center;
  color: #777;
}
</style>
