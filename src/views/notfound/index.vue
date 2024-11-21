<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
  </div>
</template>

<script>

export default {
  name: 'NotFoundIndex',
  data () {
    return {}
  },
  mounted () {
    this.autoReplace = setTimeout(() => {
      this.$router.replace('/')
    }, 1000)
  },
  destroyed () {
    clearTimeout(this.autoReplace)
  }
}
</script>

<style scoped>

</style>
