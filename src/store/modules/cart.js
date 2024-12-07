import { getCartNum, setCartNum } from '@/utils/storage'
import { changeCount, delSelect, getCartListApi } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartTotal: getCartNum(),
      cartList: []
    }
  },
  mutations: {
    setCartList (state, list) {
      state.cartList = list
    },
    toggleCheck (state, id) {
      const goods = state.cartList.find(item => item.goods_id === id)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeCount (state, { goodsId, value }) {
      const obj = state.cartList.find(item => item.goods_id === goodsId)
      obj.goods_num = value
    },
    updateCartTotal (state) {
      const num = state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
      state.cartTotal = num
      setCartNum(num)
    }
  },
  actions: {
    async getCartAction (context) {
      const { data: { list } } = await getCartListApi()
      list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', list)
      context.commit('updateCartTotal')
    },
    async changeCountAction (context, obj) {
      const { goodsId, value, skuId } = obj
      context.commit('changeCount', {
        goodsId,
        value
      })
      await changeCount(goodsId, value, skuId)
      context.commit('updateCartTotal')
    },
    // 删除购物车数据
    async delSelect (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      await delSelect(cartIds)
      // 重新拉取最新的购物车数据 (重新渲染)
      await context.dispatch('getCartAction')
      Toast('删除成功')
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    isAllChecked (state, getters) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
