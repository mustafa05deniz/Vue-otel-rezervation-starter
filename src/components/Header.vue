<template>
  <div class="nav">
    <div class="item align-left">
      <div class="logo">
        Md Otelleri
      </div>
    </div>
    <div class="item align-right" >
        <div class="mdButton primary"  @click="this.$router.push('/rezervation/step1')">Rezervasyon Yap</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>



</style>
