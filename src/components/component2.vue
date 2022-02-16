<template>
  <div class="cont">
    <div class="item mdGutters bg-white">
      <div class="otel w100 p3">
        <div class="d-flex jsb">
          <strong>{{otel.selectedOtel?.hotel_name}}</strong>
          <div class="text"> {{startDate}} | {{endDate}} </div>
        </div>
        <br>
        <div class="d-flex jsb">
          <div class="text"> {{otel.adultQuantity + otel.childQuantity}} Kişi ({{otel.childQuantity}} çocuk)</div>
          <div class="text"> {{datesDiffrence-1}} Gece {{datesDiffrence}} Gün</div>
        </div>
      </div>
    </div>
    <button type="button" class="collapsible mt3"  @click="collepseAccordion('col1')">
      <div class="d-flex jsb text">
        <span v-if="true">Oda Tipi Seçimi </span>
        <div v-if="getSelectedRoomType?.title"> (<strong>{{getSelectedRoomType?.title}}</strong>)</div>
      </div>
      <div class="arrowicon">
        <img src="../../public/assets/icons/down-arrow.png" v-if="!selectedAccordion &&  selectedAccordionId ===null " width="17">
        <img src="../../public/assets/icons/up-arrow.png" v-if="selectedAccordion  &&   selectedAccordionId ===null  " width="17">
      </div>
    </button>
    <div class="content" ref = "col1">
      <div  class="item mdGutters bg-white">
        <div class="roomTypes">
          <div class="room" :value="index.id" v-for="index in roomTypes" :key="index" @click="selectRoomType(index)" v-bind:class="{ active: selectedRoomTypeId === index.id }">
            <div class="title">
              {{index.title}}
            </div>
            <img :src="index.photo">
            <div class="detail">
              <div class="">
                <div class="diffrence">
                  {{ datesDiffrence }} Gün
                </div>
                <div class="quantity">
                  {{otel.adultQuantity}} Yetişkin {{otel.childQuantity}} Çocuk
                </div>
              </div>
              <div class="price">
                {{index.price}} TL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="collapsible mt3"  @click="collepseAccordion('col2')">
      <div class="d-flex jsb text">
        <span v-if="true">Manzara Seçimi</span>
        <div v-if="getSelectedScenic?.title">(<strong>{{getSelectedScenic?.title}}</strong>)</div>
      </div>
      <div class="arrowicon">
        <img src="../../public/assets/icons/down-arrow.png"  v-if="!selectedAccordion &&  selectedAccordionId ===null" width="17">
        <img src="../../public/assets/icons/up-arrow.png" v-if="selectedAccordion &&  selectedAccordionId ===null" width="17">
      </div>
    </button>
    <div class="content" ref = "col2">
      <div  class="item mdGutters bg-white">
        <div class="roomTypes">
          <div class="room" :value="index.id" v-for="index in roomScenic" :key="index" @click="selectRoomScenic(index)" v-bind:class="{ active: selectedRoomScenicId === index.id }">
            <div class="title">
              {{index.title}}
            </div>
            <img :src="index.photo">
            <div class="detail">
              <div class="mt2">
                Fiyata Etki Oranı
              </div>
              <div class="price mt-1">
                {{index.price_rate}}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="buttons">
    <button class="mdButton"  @click='previouse()'>Geri</button>
    <button class="mdButton"  @click='next'>Devam</button>
  </div>
</template>

<script>


import moment from 'moment';
export default {
  name: "component2",
  mounted() {
    const data1 = JSON.parse(localStorage.getItem('step1'));
    if(data1){
      this.otel={
        adultQuantity : data1.adultQuantity,
        childQuantity:data1.childQuantity,
        startDate:data1.startDate,
        endDate:data1.endDate,
        selectedOtel:data1.selectedOtel
      }

    }else{
      this.otel = this.$store.state.otelsModule.otel;
    }

    this.$store.dispatch("getOtelDetail",this.otel.selectedOtel?.id);
  },
  computed:{
    startDate: function () {
      return moment(String(this.otel.startDate)).format('MM.DD.YY')
    },
    endDate :function () {
      return moment(String(this.otel.endDate)).format('MM.DD.YY')
    },
    roomTypes:function (){
      return this.$store.state.otelsModule?.otelDetail?.room_type;
    },
    roomScenic:function (){
      return this.$store.state.otelsModule?.otelDetail?.room_scenic;
    },
    datesDiffrence:function (){
      return moment(String(this.otel.endDate)).diff(moment(String(this.otel.startDate)),'days')
    },
    getSelectedRoomType:function (){
      const selectedRoom = this.roomTypes?.find(x=>x.id ===this.selectedRoomTypeId);
      return selectedRoom;
    },
    getSelectedScenic:function (){
      const selectedRoomScenic = this.roomScenic?.find(x=>x.id ===this.selectedRoomScenicId);
      return selectedRoomScenic;
    }
  },
  methods:{
    previouse:function (){
      this.$router.push('step1')
    },
    next:function (){
      const data={
        "selectedRoomType":this.selectedRoomTypeId,
        "selectedRoomScenic":this.selectedRoomScenicId,
        "selectedRoomTypeName":this.getSelectedRoomType?.title,
        "selectedRoomScenicName":this.getSelectedScenic?.title,
        "selectedRoomPrice":this.getSelectedRoomType?.price,
        "selectedRoomScenicPrice":this.getSelectedScenic?.price_rate
      }
      localStorage.step2=JSON.stringify(data)
      this.$router.push('step3')
    },
    selectRoomType: function(index){
      this.selectedRoomTypeId = index.id;
    },
    selectRoomScenic: function(index){
      this.selectedRoomScenicId = index.id;
    },
    collepseAccordion:function (colId){
      const col =this.$refs[colId];
      if (col.style.display === "block") {
        col.style.display="none";
      } else {
        col.style.display="block";
      }
      this.selectedAccordion = !this.selectedAccordion;

      // diger accordionları kapatmak için
      // bu kısım statik oldu daha gelişmiş olarak dinamik bir biçimde yapılabilir bir array biçiminde tanımlama vs yapılabilir.
      if(colId === "col1"){
        const col =this.$refs.col2;
        col.style.display="none";
      }else if(colId === "col2"){
        const col =this.$refs.col1;
        col.style.display="none";
      }
    }
  },
  data: () => {
    const data2 = JSON.parse(localStorage.getItem('step2'));
    return {
      otel :{},
      otelDetail:{},
      selectedRoomTypeId:data2?.selectedRoomType,
      selectedRoomScenicId:data2?.selectedRoomScenic,
      selectedAccordion:false,
      selectedAccordionId:null,

    }
  }
}


</script>

<style scoped lang="scss">
@import './src/media.scss';
  .item{
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    button{
      width: 100%;
    }
  }

.text{
  color:#6e5e5e;
}

.cont{
  display: flex;
  flex-direction: column;
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

  .otel{
  }

  

  @include calculateSize(mobile) {
    .roomTypes{
      display: flex;
      grid-column-gap: 8px;
      flex-direction: row;
      justify-content: space-between;

      .title{
        font-weight: bold;
      }

    }
    .room{
      border: 1px solid;
      padding: 10px;
      border-color: #dddddd;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      flex-direction:column;
      border-radius: 6px;

      img{
        margin-top:2px;
        height: 150px;
        border: 1px solid;
        border-color: gray;
      }
      .detail{
        display: flex;
        justify-content: space-between;
        font-weight: 200;

        .price{
          display: flex;
          justify-content: normal;
          font-weight: bold;
          font-size: 18px;
          align-items: flex-end;

        }
      }
    }
    .content {
      display: none;
      overflow: auto;
      background-color: white;
      border: 1px solid;
      border-top: none;
      border-color: #efefef;
      padding-bottom: 10px;
    }


    .active{
      border-color: #6bb56b;
      box-shadow: 0 3px 10px #00000033;
    }
  }

@include calculateSize(web) {
  .roomTypes{
    width: 100%;
    display: flex;
    grid-column-gap: 8px;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: flex-start;

    .title{
      font-weight: bold;
    }

  }
  .room{
    border: 1px solid;
    padding: 10px;
    border-color: #dddddd;
    margin-top: 5x;
    display: flex;
    justify-content: center;
    flex-direction:column;
    border-radius: 6px;

    img{
      margin-top:2px;
      height: 140px;
      border: 1px solid;
      border-color: gray;
    }
    .detail{
      display: flex;
      justify-content: space-between;
      font-weight: 200;

      .price{
        display: flex;
        justify-content: normal;
        font-weight: bold;
        font-size: 18px;
        align-items: flex-end;

      }
    }


  }
  .content {
    display: none;
    overflow: auto;
    border: 1px solid;
    border-top: none;
    background-color: white;
    border-color: #efefef;
  }
  .active{
    border-color: #6bb56b;
    box-shadow: 0 3px 10px #00000033;
  }
}


.collapsible {
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}






</style>
