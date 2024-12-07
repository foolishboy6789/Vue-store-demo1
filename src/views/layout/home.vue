<template>
  <div class="home">
    <!-- 导航条 -->
    <van-nav-bar fixed title="智慧商城"/>

    <!-- 搜索框 -->
    <van-search
      background="#f1f1f2"
      placeholder="请在此输入搜索关键词"
      readonly
      shape="round"
      @click="$router.push('/search')"
    />

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imgUrl">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="item in navList" :key="item.imgUrl"
        :icon="item.imgUrl"
        :text="item.text"
        @click="$router.push('/category')"
      />
    </van-grid>

    <!-- 主会场 -->
    <div class="main">
      <img :src="mainImage" alt="">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>

      <div class="goods-list">
        <GoodsItem v-for="item in goodsList" :key="item.goods_id" :item="item"></GoodsItem>
      </div>
    </div>
  </div>

</template>

<script>

import GoodsItem from '@/components/GoodsItem.vue'
import { getHomeDataApi } from '@/api/home'

const Constants = {
  banner: 1,
  navBar: 3,
  goods: 6,
  image: 4
}

export default {
  name: 'HomeIndex',
  components: { GoodsItem },
  data () {
    return {
      bannerList: [],
      navList: [],
      goodsList: [],
      mainImage: ''
    }
  },
  async created () {
    const { data: { pageData } } = await getHomeDataApi()
    this.bannerList = pageData.items[Constants.banner].data
    this.navList = pageData.items[Constants.navBar].data
    this.goodsList = pageData.items[Constants.goods].data
    this.mainImage = pageData.items[Constants.image].data[0].imgUrl
  }
}
</script>

<style lang="less" scoped>
// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分类导航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
