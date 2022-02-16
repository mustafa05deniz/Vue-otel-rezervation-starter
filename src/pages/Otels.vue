<template>
  <div class="d-flex flex-column filter">
    <div class="input d-flex jsb">
      <input class="mdInput" v-model="searchItem"  v-on:change="search()" type="text" placeholder="Otel Adı Giriniz ...">
    </div>
  </div>
  <div class="otellist">
    <div class="otel mt1 p1"  v-for="element in otels" :key="element" @click="selectOtel(element)">
      <div class="leftSide">
        <img  lazy="true" :src="getRandomImage()">
      </div>
      <div class="rightSide d-flex flex-column jsb">
        <div class="otel-name"> {{element.hotel_name}}</div>
        <div class="point d-flex">
          <div class="mdInnerHtmlPoint" v-html="randomPoint()" points></div>
        </div>
        <div class="location  d-flex">
          <div class="location-text">
            Kadıköy / Istanbul
          </div>
        </div>
        <div class="price-avaliable d-flex jsb">
          <div class="available">
            <div class="mdInnerHtmlBox" v-html="otelAvailable()" mdAvaliable></div>
          </div>
          <div class="stars">
            <div class="mdInnerHtmlStars" v-html="randomStars()" mdStars></div>
          </div>
          <div class="price">
            <div class="price-text">{{randomPrice()}} TL </div>
            <div class="small-text">'den başlayan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Otels",
  mounted() {
    this.$store.dispatch("getOtels");
  },
  data(){
    return {
      searchItem:""
    }
  },
  computed:{
    otels:function (){
      const mainList = this.$store.state.otelsModule.otels;
      if (!this.searchItem || this.searchItem === "") {
        return mainList;
      }
      const searchText = this.searchItem.toLocaleLowerCase('tr');
      return mainList.filter(x => {
        let isAvailable = false;
        if (x.hotel_name.toLocaleLowerCase('tr').indexOf(searchText) > -1) {
          isAvailable = true;
        }
        return isAvailable;
      });
    },
  },
  methods:{
    getRandomImage(){
      const imageList = [
          "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_470,q_65,w_640/v1/clients/wilmingtonnc/ff2c5ff3_70de_445b_a001_29b51aa8dec6_81ccd151-7cb3-4f33-a9b6-431bbaef4009.jpg",
          "https://divancdn.azureedge.net/divan/media/divan/otel/divan-istanbul/gallery/divan-istanbul-gallery-(1)-810x525.jpg",
          "https://www.trendy.com.tr/content/uploads/anasayfa_otel_tablar/aspendos.jpg",
          "https://media-cdn.tripadvisor.com/media/photo-s/1b/ef/1b/bc/oz-hotels-antalya-resort.jpg",
          "https://content.r9cdn.net/rimg/himg/db/18/db/ice-145281-72699116_3XL-539873.jpg?width=335&height=268&crop=true",
          "https://images.trvl-media.com/hotels/1000000/30000/21700/21663/5cb73089.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
          "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/43/97/439761_v6.jpeg"
      ]
      return imageList[Math.floor(Math.random() * imageList.length)];
    },
    otelAvailable(){
      const now = new Date()
      const list = [
        new Date(new Date().setDate(now.getDate() + 1)).getDate(),
        new Date(new Date().setDate(now.getDate() + 2)).getDate(),
        new Date(new Date().setDate(now.getDate() + 3)).getDate(),
        new Date(new Date().setDate(now.getDate() + 4)).getDate(),
        new Date(new Date().setDate(now.getDate() + 5)).getDate(),
      ]
      let boxList=""
      for (var i = 0; i < list.length; i++) {
        if(Math.floor(Math.random()*list.length)<i){
          boxList+="<div class='box available'>"+list[i]+"</div>"
        }else{
          boxList+="<div class='box not-available'>"+list[i]+"</div>"
        }
      }
      return "<div class='box-list d-flex jsb'>"+ boxList +"</div>"
    },
    randomPrice(){
      return 300+Math.floor(Math.random() * 500);
    },
    randomPoint(){
      const random =  Math.fround(Math.random() * 9).toFixed(2);
      const lastRandom = Math.floor(random)
      if(0<=lastRandom && lastRandom<4){
        return "<div class='number'>"+random+"</div><div class='point-text low'>Low</div>"
      }else if(4<=lastRandom && lastRandom<7){
        return "<div class='number'>"+random+"</div><div class='point-text medium'>Medium</div>"
      }else if(7<=lastRandom && lastRandom<10){
        return "<div class='number'>"+random+"</div><div class='point-text high'>High</div>"
      }
    },
    randomStars(){

      let html = ""
      for (var i = 0; i < Math.floor(Math.random()*6)+2; i++) {
        html +=  "<span>☆</span>"
      }
      return html
    },
    search(){
      console.log(this.searchItem);
    },
    selectOtel(element){
      console.log(element);
      localStorage.selectedOtel = JSON.stringify(element);
      this.$router.push('/rezervation/step1')
    }
  }
}
</script>


<style lang="scss">
@import './src/style.scss';
// bu kısım inner html olarak kullandıgımız kısmın style'ı için yazılmıştır scope oldugunda erişemiyoruz çünkü
.mdInnerHtmlPoint[points] {
  display: flex;
    .number{
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      color: #ffffff;
      background-color: #007bff;
    }
    .point-text{
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      margin-left: 5px;
    }
    .low{
      color: #ffffff;
      background-color: red;
    }
    .medium{
      color: #ffffff;
      background-color:#007bff;
    }
    .high{
      color: #ffffff;
      background-color:#3f7053;
    }

}
.mdInnerHtmlBox[mdAvaliable]{

  .box-list{
    border: 1px solid;
    border-color: $text-color1;
  }
  .box{
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border:1px solid  $text-color1;;
    border-left: none;
    border-top: none;
    border-bottom: none;
    color:white;
    &:last-child{
      border:none
    }
  }
  .available{
    background-color: green;
  }
  .not-available{
    background-color:#dd8181;
  }
}

</style>


<style scoped lang="scss">
@import './src/style.scss';
@import './src/media.scss';
@include calculateSize(mobile) {
  .filter{
    background-color: #dfe6ef;

    overflow: hidden;
    box-shadow: 0 1px 3px #0000001a;
    transition: all .2s ease-in;
    display: flex;
    padding: 2%;
    .input{
      width: 100%;

    }
    .template{
      .filter-image{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .otellist {
    background-color: #dfe6ef;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    .text{
      font-size: 20px;
      line-height: 25px;
      text-align: left;
      padding-left: 0;
    }

    .otel{
      height: 100px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 1px 3px #0000001a;
      background-color: #fff;
      margin-bottom: 10px;
      transition: all .2s ease-in;
      display: flex;
      border-radius: 5px;
      .leftSide{
        flex:1;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .rightSide{
        flex:3;
        padding-left: 3%;
        .otel-name {
          font-weight: bold;
        }
        .point{

        }

        .location{
          .location-text{
            color:$text-color1;
            font-size: 11px;
          }
        }
        .price-avaliable{
          .stars{
            display: block;
            place-self: flex-end;
          }
          .available{
            display: none;
          }
          .price{
            .price-text{
              font-size: 25px;
              color: #dd0000;

            }
            .small-text{
              font-size: 10px;
              margin-left: 15px;
            }
          }
        }

      }
    }



    .mdBorder{
      border: 1px solid #ddd;
    }
  }
}

@include calculateSize(web) {
  .filter{
    background-color: #dfe6ef;

    overflow: hidden;
    box-shadow: 0 1px 3px #0000001a;
    transition: all .2s ease-in;
    display: flex;
    padding-left: 2%;
    padding-right: 2%;
    padding-top:2%;
    .input{
      width: 100%;
      .mdInput{
        border-radius: 0 !important;
      }
    }
    .template{
      .filter-image{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .otellist {
    display: flex;
    flex-direction: row;
    background-color: #dfe6ef;
    padding-left: 2%;
    padding-right: 2%;
    flex-wrap:wrap;
    grid-column-gap: 20px;
    .text{
      font-size: 20px;
      line-height: 25px;
      text-align: left;
      padding-left: 0;
    }

    .otel{
      height: 150px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 1px 3px #0000001a;
      background-color: #fff;
      margin-bottom: 10px;
      transition: all .2s ease-in;
      display: flex;
      flex:25%;
      border-radius: 5px;
      cursor: pointer;
      &:hover .otel-name{
          transition: 0.3s;
          color:#dd0000;

      }
      .leftSide{
        flex:2;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .rightSide{
        flex:3;
        padding-left: 3%;
        .otel-name {
          font-weight: bold;
          font-size: 20px;
        }
        .point{

        }

        .location{
          .location-text{
            color:$text-color1;
            font-size: 11px;
          }
        }
        .price-avaliable{
          .stars{
            display: block;
            place-self: flex-end;
            font-size: 20px;
          }
          .available{
            display: none;
          }
          .price{
            .price-text{
              font-size: 30px;
              color: #dd0000;

            }
            .small-text{
              font-size: 10px;
              margin-left: 30px;
            }
          }
        }

      }
    }



    .mdBorder{
      border: 1px solid #ddd;
    }
  }
}




</style>
