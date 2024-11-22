import request from '@/utils/request'

export const getHomeData = () => {
  return request.get('/page/detail', {
    params: {
      id: 0
    }
  })
}
