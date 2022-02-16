<template>
  <div class="md-container">
    <div class="header bg-gray"><Header/></div>
    <div class="content bg-white">
      <router-view/>
    </div>
    <div class="footer bg-gray"><Footer/></div>
  </div>



</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'mdApp',
  components: {
    Header,
    Footer
  },
 
}
</script>

<style lang="scss">
@import "./style.scss";



.md-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .header{
    min-height: 55px;
    display: flex;
  }
  .content{
    height: 100%;
    overflow: auto;
  }
  .footer{
    min-height: 35px;
    display: flex;
  }
}

</style>
