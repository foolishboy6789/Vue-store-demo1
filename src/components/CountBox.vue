<template>
  <div class="count-box">
    <div class="minus" @click="SubFn">-</div>
    <input :value="value" class="inp" type="text" @change="changeFn">
    <div class="add" @click="addFn">+</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    SubFn () {
      if (this.value > 1) this.$emit('input', this.value - 1)
    },
    addFn () {
      this.$emit('input', this.value + 1)
    },
    changeFn (e) {
      const val = +e.target.value
      if (isNaN(val)) e.target.value = this.value
      else if (val < 1) e.target.value = 1
      else if (val > 99) e.target.value = 99
      else this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box {
  width: 110px;
  display: flex;

  .add, .minus {
    width: 30px;
    height: 30px;
    background-color: #efefef;
    outline: none;
    border: none;
    text-align: center;
    line-height: 30px;
  }

  .inp {
    width: 40px;
    height: 30px;
    text-align: center;
    background-color: #efefef;
    outline: none;
    border: none;
    margin: 0 5px;
  }
}
</style>
