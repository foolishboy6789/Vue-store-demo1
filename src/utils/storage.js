const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_shopping_history'
const CARTNUM_KEY = 'hm_shopping_cartNum'

export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : defaultInfo
}

export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistory = () => {
  const res = localStorage.getItem(HISTORY_KEY)
  return res ? JSON.parse(res) : []
}

export const setHistory = (history) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export const getCartNum = (num) => {
  return localStorage.getItem(CARTNUM_KEY) || 0
}

export const setCartNum = (num) => {
  localStorage.setItem(CARTNUM_KEY, num)
}
