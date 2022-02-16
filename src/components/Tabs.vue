<template>
  <div class="mobileTabs bg-white" >
    <div class="progress ">
      <div class="circle">
        <span>{{ selectedTab === 'step1'?1:selectedTab === 'step2'?2:selectedTab === 'step3'?3:4 }} of 4</span>
        <div v-bind:class="{ step1: selectedTab === 'step1',step2: selectedTab === 'step2',step3: selectedTab === 'step3',step4: selectedTab === 'complete' }" @click="selecTab('step1')">
          <div class="first50bar" v-if="selectedTab === 'step3'"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
    <div class="text" v-if=" selectedTab === 'step1'">
      <div class="current">Otel Seçimi</div>
      <div class="next">next : Oda Seçimi</div>
    </div>
    <div class="text" v-if=" selectedTab === 'step2'">
      <div class="current">Oda Seçimi</div>
      <div class="next">next : Kart Bilgileri</div>
    </div>
    <div class="text" v-if=" selectedTab === 'step3'">
      <div class="current">Kart Bilgileri</div>
      <div class="next">next : Ödeme</div>
    </div>
    <div class="text" v-if=" selectedTab === 'complete'">
      <div class="current">Tamamla</div>
    </div>
  </div>
  <div class="webTabs">
    <div class="tabs " >
      <div class="subItem"  @click="this.$router.push('step1') ">
        <div class="tab circle "  ref = "el1" v-bind:class="{ active: selectedTab === 'step1',complateTab:selectedTab ==='step2' || selectedTab === 'step3'|| selectedTab === 'complate' }" @click="selecTab('step1')" >
          <img src="../../public/assets/icons/calendar.png">
        </div>
        <div class="text" v-bind:class="{ textActive: selectedTab === 'step1'}">
          Otel ve tarih
        </div>
      </div>
      <div class="distance" v-bind:style="{ width: tabsDistance }" v-bind:class="{ distanceActive: selectedTab === 'step2' || selectedTab === 'step3'}"></div>
      <div class="subItem"  @click="this.$router.push('step2') ">
        <div  class="tab circle  " ref = "el2" v-bind:class="{ active: selectedTab === 'step2' ,complateTab: selectedTab === 'step3'|| selectedTab === 'complate'  }" @click="selecTab('step2')" >
          <img src="../../public/assets/icons/bed.png">
        </div>
        <div class="text" v-bind:class="{ textActive: selectedTab === 'step2'}">
          Oda Tipi
        </div>
      </div>
      <div class="distance" v-bind:style="{ width: tabsDistance }"  v-bind:class="{ distanceActive: selectedTab === 'step3' }"></div>
      <div class="subItem"  @click="this.$router.push('step3') ">
        <div  class="tab circle " ref = "el3" v-bind:class="{ active: selectedTab === 'step3',complateTab:selectedTab === 'complate' }" @click="selecTab('step3')">
          <img src="../../public/assets/icons/credit-card.png">
        </div>
        <div class="text" v-bind:class="{ textActive: selectedTab === 'step3'}">
          Ödeme
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// NOT bu sayfadaki responsive tasarım elemanları refresh sonrası çalışmaktadır yani örneğin bir telefon ile açıldıgında sorun olmayacaktır ancak chrome console üzerinden responsive
// değiştirildiğinde bazı geliştirmeler görünmeyebilir
export default {
  name: "Tabs",
  props: {
    step: String
  },
  data() {
    return {  selectedTab:"s",tabsDistance:"120px" }
  },
  created() {

  },
  watch:{
    $route (to){
     this.selectedTab = to.params.stepId
    }
  },
  mounted() {
    // tablar arasındaki 1 tane boşlugu hesaplatmak yetiyor
    const div1rect =this.$refs.el1.getBoundingClientRect();
    const div2rect = this.$refs.el2.getBoundingClientRect();
    const div1x = div1rect.left + div1rect.width/2;
    const div1y = div1rect.top + div1rect.height/2;
    const div2x = div2rect.left + div2rect.width/2;
    const div2y = div2rect.top + div2rect.height/2;
    const distanceSquared = Math.pow(div1x - div2x, 2) + Math.pow(div1y - div2y, 2);
    const distance = Math.sqrt(distanceSquared);
    // hesaplama kısmını internetten buldum link : https://stackoverflow.com/questions/19671131/distance-in-px-between-two-elements-in-the-dom/19671293
    this.tabsDistance = distance+"px";
    this.selecTab(this.step)

  },
  methods: {
    selecTab: function(tab) {
      this.selectedTab = tab;
    },
    isMobile() {
      // önce bu kısımla yapıcaktım fakat responsive diye diger şekilde yapıyorum.
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }

}
</script>

<style  lang="scss" scoped>
  @import './src/media.scss';



@include calculateSize(web) {

  .mobileTabs{
    display: none;
  }

  .webTabs{

    .tabs{
      display: flex;
      padding-top: 4%;
      padding-bottom:4%;
      padding-left: 4%;
      padding-right: 4%;
      align-items: center;
      justify-content: space-around;
      margin-left: 4%;
      margin-right: 4%;
      margin-top:2%;
      margin-bottom: 2%;
      border-radius: 6px;
      background-color: white;
      .distance{
        height: 1px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #e1dddd;
        margin-bottom: 12px;
      }

      .distanceActive{
        background: #dbdada;
      }
      .tab{
        img{
          width: 20px;
        }

      }
      .subItem{
        text-align: center;
        font-weight: 200;
        color: #a19e9e;
        min-width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .text{
        margin-top:7px;
      }
    }
    .complateTab{
      background-color: #dfffe7 !important;
    }

    .active{
      background-color:#cdcdcd !important
    }

    .textActive{
      color: black;
    }

    .circle{
      border: 1px solid;
      border-color: #92d9a4;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


}

@include calculateSize(mobile) {
  .webTabs{
    display: none;
  }

  .mobileTabs{
    display: flex;
    margin-top: 2%;
    margin-bottom:3%;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 6px;
    padding: 15px;
    .progress{

      .outer-circle {
        background: #8fe72f;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        position: relative;
      }
      .inner-circle {
        position: absolute;
        background: white;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        top: 50%;
        left: 50%;
        margin-left: -35px;
        display: flex;
        margin-top: -35px;
        /* margin: -95px 0px 0px -150px; */
        justify-content: center;
        align-items: center;
      }
    }
    .text{
      flex:6;
      padding:6%;
      .current{
        font-size: 25px;
        font-width: bold;
      }
      .before{
        font-size: 13px;
        display: flex;
        font-width: 100;
        justify-content: flex-end;
        color: #818181;
      }
      .next{
        font-size: 13px;
        display: flex;
        font-width: 100;
        justify-content: flex-end;
        color: #818181;
      }
    }
    .circle {
      font-size: 20px;
      position: relative;
      padding: 0;
      width: 5em;
      height: 5em;
      background-color: #edeaeabf;
      border-radius: 50%;
      line-height: 5em;
      &:after {
        border: none;
        position: absolute;
        top: 0.35em;
        left: 0.35em;
        text-align: center;
        display: block;
        border-radius: 50%;
        width: 4.3em;
        height: 4.3em;
        background-color: white;
        content: " ";
      }
      span {
        position: absolute;
        line-height: 5em;
        width: 5em;
        text-align: center;
        display: block;
        color: black;
        z-index: 2;
      }

      .step1 {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        position: absolute;
        clip: rect(auto, auto, 50px, auto);
        .bar {
          position: absolute;
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 0.45em solid #8fe72f;
          box-sizing: border-box;
          clip: rect(auto,auto,50px,50px);
        }
      }

      .step2 {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        position: absolute;
        clip: rect(auto, auto, auto, auto);
        .bar{
          position: absolute;
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 0.45em solid #8fe72f;
          box-sizing: border-box;
          clip: rect(0px, auto, auto, 50px);
        }
      }

      .step3 {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        position: absolute;
        clip: rect(auto, auto, auto, auto);
        .first50bar {
          position: absolute;
          clip: rect(0, 5em, 5em, 2.5em);
          background-color: #8fe72f;
          border-radius: 50%;
          width: 5em;
          height: 5em;
        }
        .bar{
          position: absolute;
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 0.45em solid #8fe72f;
          box-sizing: border-box;
          clip: rect(50px, auto, auto, 0px);
        }
      }


      .step4 {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        position: absolute;
        clip: rect(auto, auto, auto, auto);
        .bar{
          position: absolute;
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 0.45em solid #8fe72f;
          box-sizing: border-box;
        }
      }




    }









  }



}

</style>
