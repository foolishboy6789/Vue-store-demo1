import request from '@/utils/request'

export const getGoodsListApi = (params) => {
  return request.get('/goods/list', {
    params
  })
}

export const getGoodsDetailApi = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

export const getGoodsCommentApi = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
