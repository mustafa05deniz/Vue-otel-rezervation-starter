<template>
  <div class="flex-column flex-column jsb p3 complete">
    <div class="">
      <img src="../../public/assets/icons/check.png">
    </div><br>
    <div class="">
      Rezervasyon başarılı bir şekilde kayıt edilmiştir.
    </div><br>
    <div class="item mdGutters bg-white">
      <div class="otel  p3">
        <div class="d-flex jsb">
          <strong>{{otel.selectedOtel?.hotel_name}}</strong>
          <div class="text"> {{startDate}} | {{endDate}} </div>
        </div>
        <br>
        <div class="d-flex jsb">
          <div class="text"> {{otel.adultQuantity + otel.childQuantity}} Kişi ({{otel.childQuantity}} çocuk)</div>
          <div class="text"> {{datesDiffrence-1}} Gece {{datesDiffrence}} Gün</div>
        </div>
        <br>
        <div class="d-flex jsb">
          <div class="text">Oda Tipi : <strong>{{selectedRoomTypeName}}</strong> |  Manzara : <strong>{{selectedRoomScenicName}}</strong></div>
        </div>
      </div>
    </div>
  <br>
    <div class="buttons">
      <button class="mdButton primary"  @click='newRezervation()'>Yeni Rezervasyon Yap</button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "complete",
  mounted() {

  },
  data(){
    const data = JSON.parse(localStorage.getItem('step1'));
    const data2 = JSON.parse(localStorage.getItem('step2'));
    return {
      rezervationId:1,
      otel:data,
      selectedRoomTypeName:data2?.selectedRoomTypeName,
      selectedRoomScenicName:data2?.selectedRoomScenicName,
    }
  },
  methods:{
    newRezervation:function (){
      localStorage.clear();
      this.$router.push('/')
    }
  },
  computed: {
    startDate: function () {
      return moment(String(this.otel.startDate)).format('MM/DD/YYYY')
    },
    endDate: function () {
      return moment(String(this.otel.endDate)).format('MM/DD/YYYY')
    },
    datesDiffrence:function (){
      return moment(String(this.otel.endDate)).diff(moment(String(this.otel.startDate)),'days');
    },
    calculateLastPrice:function (){
      return parseFloat(parseInt(this.calculatedPrice * this.discountRate ) / 100).toFixed(2)
    }
  },
}
</script>

<style scoped lang="scss">
  .complete{
    text-align: center;
  }

  .item{
    background-color: #e2f7d9;
    height: 200px;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;

  }
</style>
