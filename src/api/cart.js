import request from '@/utils/request'

export const addCartApi = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartListApi = () => {
  return request.get('/cart/list')
}

export const changeCountApi = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const delSelectApi = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
