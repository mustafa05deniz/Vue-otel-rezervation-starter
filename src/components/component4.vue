<template>
  <div class="cont">
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
    <div class="item mdGutters bg-white complete">
      <div class="card">
        <strong>{{this.card?.number1}} **** **** **** {{this.card?.number4}} <img @click=" this.$router.push('/rezervation/step3')" src="../../public/assets/icons/edit.png"></strong>
      </div><br>
      <div class="prices d-flex jsb flex-column mdGutters">
        <div><strong>Oda Fiyatı : </strong> {{price}} TL</div>
        <div><strong>Fiyat Etki Oranı : </strong> %{{priceRate}}</div>
        <div><strong>Konaklama ( {{datesDiffrence-1}} gece ) : </strong> {{calculatedPrice}} TL</div>
        <div v-if="this.discountRate"><strong>{{this.couponCode}} : </strong> %{{discountRate}}</div>
        <div v-if="this.discountRate"><strong>Toplam Fiyat : </strong> <strong>{{calculateLastPrice}} TL</strong></div>
      </div><br>
      <div class="coupon d-flex  mdGutters jsb">
        <input
            class="mdInput"
            type="text"
            maxlength="10"
            placeholder="Kupon Kodu"
            v-model="couponCode"
            onfocus="this.value=''"
        />
        <button class="mdButton primary"  @click='checkCoupon()'>Kullan</button>
      </div>


    </div>
  </div>
  <div class="buttons">
    <button class="mdButton primary"  @click='previouse()'>Geri</button>
    <button class="mdButton primary"  @click='complete'>Tamamla</button>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "component4",
  mounted() {
    this.$store.dispatch("getCoupons").then(()=>{
      this.couponList = this.$store.state.otelsModule.couponList?.data;
    });
    const step2 =  JSON.parse(localStorage.getItem('step2'));
    const card = JSON.parse(localStorage.getItem('card'));
    this.card= card;
    this.price = step2?.selectedRoomPrice;
    this.priceRate = step2?.selectedRoomScenicPrice;
    this.otel = this.$store.state.otelsModule.otel;
    const days = moment(String(this.otel.endDate)).diff(moment(String(this.otel.startDate)),'days');
    const effectPrice = (parseInt(step2?.selectedRoomPrice)*parseInt(step2?.selectedRoomScenicPrice))/100;
    this.calculatedPrice =parseFloat(parseInt(step2?.selectedRoomPrice +effectPrice ) * parseInt(days)).toFixed(2)
  },
  methods: {
    previouse: function () {
      this.$router.push('step3')
    },
    complete: function () {
      console.log("infos");
      const data1 = JSON.parse(localStorage.getItem('step1'));
      const data2 = JSON.parse(localStorage.getItem('step2'));
      const card = JSON.parse(localStorage.getItem('card'));
      const data = {
        "hotel_id": data1?.selectedOtel?.id,
        "start_date": data1?.startDate,
        "end_date": data1?.endDate,
        "adult": data1?.adultQuantity,
        "child": data1?.childQuantity,
        "room_type": data2?.selectedRoomType,
        "room_scenic": data2?.selectedRoomScenic,
        "price": this.totalPrice,
        "coupon_code": this.couponCode,
        "card_name": card?.cardHolder,
        "card_number": card?.number1+card?.number2+card?.number3+card?.number4,
        "card_date_month": card?.cardExpireDate.month,
        "card_date_year":  card?.cardExpireDate.year,
        "card_cvv":  card?.cardExpireDate.cardCvv
      }
      this.$store.dispatch("saveRezervation",data).then(res=>{
        console.log(res);
      })
      this.$router.push('/complete')
    },
    checkCoupon:function (){
      const foundedCouponCode = this.couponList?.find(res=>res.code === this.couponCode);
      if(foundedCouponCode){
        if(new Date()<new Date(foundedCouponCode?.expiration_at)){
          alert("kupon bulundu uygulanıyor");
          this.discountRate = foundedCouponCode?.discount_ammount;
          this.totalPrice = parseInt(this.calculatedPrice * this.discountRate ) / 100;
          console.log(new Date(foundedCouponCode?.expiration_at))
        }else{
          alert("Tarihi geçmiş")
        }
      }else{
        alert("Bulunamadı")
      }

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
  data: () => {
    const data2 = JSON.parse(localStorage.getItem('step2'));
    return {
      otel : {},
      otelDetail:{},
      selectedRoomTypeId:data2?.selectedRoomType,
      selectedRoomTypeName:data2?.selectedRoomTypeName,
      selectedRoomScenicId:data2?.selectedRoomScenic,
      selectedRoomScenicName:data2?.selectedRoomScenicName,
      price:0,
      priceRate:0,
      calculatedPrice:0,
      daysDiffrence:0,
      card:null,
      couponCode:null,
      couponList:[],
      discountRate:null,
      totalPrice:0
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/style.scss';
.cont{
  display: flex;
  flex-direction: column;
  grid-row-gap: 13px;
}
.buttons{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  grid-column-gap: 10px;
  button{
    flex:1
  }
}

.complete{
  padding:5%;
}

</style>
