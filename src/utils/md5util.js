const crypto = require('crypto-js')

const md5encrypt = (obj) => {
  if (typeof obj === 'object') {
    return crypto.MD5(JSON.stringify(obj)).toString()
  } else {
    return crypto.MD5(obj).toString()
  }
}

export {
  md5encrypt
}
