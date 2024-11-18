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
          v-model="imageCode"
          :rules="[{ required: true }]"
          name="imageCode"
          placeholder="请输入图形验证码"
          type="number"
        >
          <template #button>
            <van-image
              :src="require('@/assets/code.png')"
              fit="contain"
              width="80px"
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
            <div class="send">发送验证码</div>
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
export default {
  name: 'LoginIndex',
  data () {
    return {
      phone: '',
      imageCode: '',
      code: '',
      phoneReg: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onSubmit (values) {
      console.log('submit!', values)
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
</style>
