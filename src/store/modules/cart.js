import { getCartNum, setCartNum } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      cartTotal: getCartNum()
    }
  },
  mutations: {
    setCartTotal (state, num) {
      state.cartTotal = num
      setCartNum(num)
    }
  },
  actions: {},
  getters: {}
}
