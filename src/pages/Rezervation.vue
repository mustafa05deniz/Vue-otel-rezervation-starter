<template>
  <div class="home">
    <tabs :step="this.$route.params.stepId"></tabs>
    <div class="components">
      <component1 v-if="this.$route.params.stepId === 'step1'"></component1>
      <component2 v-if="this.$route.params.stepId === 'step2'"></component2>
      <component3 v-if="this.$route.params.stepId === 'step3'" ></component3>
      <component4 v-if="this.$route.params.stepId === 'complete'" ></component4>
    </div>
  </div>
</template>

<script>

import Tabs from "@/components/Tabs";
import component1 from "@/components/component1";
import component2 from "@/components/component2";
import component3 from "@/components/component3";
import component4 from "@/components/component4";

export default {
  name: 'Home',
  components: {
    Tabs,
    component1,
    component2,
    component3,
    component4
  },
  data(){
    return { }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
 .home{
   height: 100%;
   display: flex;
   flex-direction: column;
   background-color: #dfe6ef;
 }

 .components{
   margin-left: 4%;
   margin-right: 4%;
   height:  100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 }
</style>
