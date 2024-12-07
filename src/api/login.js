import request from '@/utils/request'

export const getImgCodeApi = () => {
  return request.get('/captcha/image')
}

export const sendCodeApi = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const loginApi = (isParty, mobile, partyData, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty,
      mobile,
      partyData,
      smsCode
    }
  })
}
