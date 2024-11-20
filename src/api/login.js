import request from '@/utils/request'

const getImgCodeApi = () => {
  return request.get('/captcha/image')
}

const sendCodeApi = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

const login = (isParty, mobile, partyData, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty,
      mobile,
      partyData,
      smsCode
    }
  })
}

export {
  getImgCodeApi,
  sendCodeApi,
  login
}
