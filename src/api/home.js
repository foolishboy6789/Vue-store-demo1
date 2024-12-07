import request from '@/utils/request'

export const getHomeDataApi = () => {
  return request.get('/page/detail', {
    params: {
      id: 0
    }
  })
}
