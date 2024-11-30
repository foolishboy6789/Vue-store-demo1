<template>
  <div class="search">
    <van-nav-bar fixed left-arrow title="商品列表" @click-left="$router.go(-1)"/>

    <van-search
      :value="goodsName || '搜索商品'"
      background="#ffffff"
      readonly
      shape="round"
      show-action
      @click="$router.replace('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o"/>
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div :class="{active: sortType==='all'}"
           class="sort-item"
           @click="sortType = 'all'">
        综合
      </div>
      <div :class="{active: sortType==='sales'}"
           class="sort-item"
           @click="sortType = 'sales'">
        销量
      </div>
      <div :class="{active: sortType==='price'}"
           class="sort-item"
           @click="
           sortPrice = sortType === 'price'?sortPrice^1:sortPrice;
           sortType = 'price'
          ">
        价格({{ sortPrice === 0 ? '升序' : '降序' }})
      </div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in this.goodsList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getGoodsListApi } from '@/api/goods'

export default {
  name: 'ListIndex',
  components: { GoodsItem },
  data () {
    return {
      sortType: 'all',
      sortPrice: 0,
      categoryId: '',
      page: 1,
      goodsList: []
    }
  },
  async created () {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList () {
      const { data: { list } } = await getGoodsListApi({
        sortType: this.sortType,
        sortPrice: this.sortPrice,
        categoryId: this.categoryId,
        goodsName: this.goodsName,
        page: this.page
      })
      this.goodsList = list.data
    }
  },
  computed: {
    goodsName () {
      return this.$route.query.search
    }
  },
  watch: {
    sortPrice (val) {
      this.getGoodsList()
    },
    sortType (val) {
      this.getGoodsList()
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  color: #f03c3c;
}

.search {
  padding-top: 46px;

  ::v-deep .van-icon-arrow-left {
    color: #333;
  }

  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;

    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
