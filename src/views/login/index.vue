<template>
  <div class="login">
    <div class="header">
      <van-nav-bar
        left-arrow
        title="登录"
        @click-left="onClickLeft"
      />
    </div>
    <div class="body">
      <h2>手机号登录</h2>
      <p>未注册的手机号登录后将自动注册</p>
      <van-form :show-error="false" @submit="onSubmit">
        <van-field
          v-model="phone"
          :rules="[{ required: true ,pattern: phoneReg, message: '请输入正确的手机号'}]"
          name="phone"
          placeholder="请输入手机号码"
        />
        <van-field
          v-model="imgCode"
          :rules="[{ required: true }]"
          name="imageCode"
          placeholder="请输入图形验证码"
          type="text"
        >
          <template #button>
            <van-image
              v-if="imgUrl"
              :src="imgUrl"
              fit="contain"
              @click="getImgCode"
            />
          </template>
        </van-field>
        <van-field
          v-model="code"
          :rules="[{ required: true }]"
          name="code"
          placeholder="请输入短信验证码"
          type="number"
        >
          <template #button>
            <div v-if="sendTime===60" class="send" @click="sendCode">发送验证码</div>
            <div v-else class="sending" @click="Toast({
              message:`请求过于频繁,请${sendTime}秒后再试`,
              position: 'bottom'
            })">
              重新发送({{ sendTime }})
            </div>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button block color="#333" native-type="submit" round>登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getImgCodeApi, loginApi, sendCodeApi } from '@/api/login'
import { md5encrypt } from '@/utils/md5util'

export default {
  name: 'LoginIndex',
  created () {
    this.getImgCode()
  },
  destroyed () {
    if (this.timer) clearInterval(this.timer)
  },
  computed: {
    Toast () {
      return Toast
    }
  },
  data () {
    return {
      phone: '',
      imgCode: '',
      imgUrl: '',
      code: '',
      phoneReg: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      sendTime: 60
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      if (!this.check()) return
      const res = await loginApi(false, this.phone, {}, this.code)
      this.$store.commit('user/setUserInfo', res.data)
      Toast({
        message: '登录成功',
        position: 'bottom'
      })
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    },
    async getImgCode () {
      const { data: { base64, key, md5 } } = await getImgCodeApi()
      this.imgUrl = base64
      this.imgKey = key
      this.md5 = md5
    },
    async sendCode () {
      if (!this.check()) return
      this.sendTime--
      Toast.success('发送成功,请注意查收')
      await sendCodeApi(this.imgCode, this.imgKey, this.phone)
      this.timer = setInterval(() => {
        this.sendTime--
        if (this.sendTime <= 0) {
          this.sendTime = 60
          clearInterval(this.timer)
        }
      }, 1000)
    },
    check () {
      if (!this.phoneReg.test(this.phone)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'bottom'
        })
        return false
      }
      if (this.md5 !== md5encrypt(this.imgCode.toLowerCase())) {
        Toast({
          message: '请输入正确的图形验证码',
          position: 'bottom'
        })
        return false
      }
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  padding: 30px;

  h2, p {
    margin: 20px 0;
  }

  p {
    color: #ccc;
  }
}

.van-image {
  height: 24px;
}
</style>
