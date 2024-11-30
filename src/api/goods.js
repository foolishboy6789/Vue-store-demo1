import request from '@/utils/request'

export const getGoodsListApi = (params) => {
  return request.get('/goods/list', {
    params
  })
}
