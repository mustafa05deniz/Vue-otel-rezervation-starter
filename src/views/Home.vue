<template>
  <div class="search-bar ">
    <div class="banner-image"></div>
    <div class="search-input ">
      <input class="mdInput" v-model="searchItem"  v-on:change="search()" type="text" placeholder="Ne Arıyorsunuz ...">
    </div>
  </div>
  <div class="banner-list mt1">
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://img.tamindir.com/ti_e_ul/canerdil/p/karli-gece-temasi_1_1024x640.jpg);">
        <p><span class="subText">Kış Temalı Oteller</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://cdn2.setur.com.tr/image/web-banner/nugget-doga-otelleri.jpg);">
        <p><span class="subText">Doğa Temalı Oteller</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(http://www.buseterim.com.tr/upload/default/2019/11/9/30agustostrkiye680.jpg);">
        <p><span class="subText">Ankara Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900);">
        <p><span class="subText">Paris Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://www.gezilesiyer.com/wp-content/uploads/2019/11/Galata-kulesi-tarihi.jpg);">
        <p><span class="subText">İstanbul Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://izmir.ktb.gov.tr/Resim/68383,konakjpg.png?0);">
        <p><span class="subText">İzmir Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>

    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://media-cdn.tripadvisor.com/media/photo-s/1d/2b/6f/ae/exterior.jpg);">
        <p><span class="subText">5 Yıldızlı Oteller</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://imagessl.etstur.com/files/images/cruise/660_330/22-bursa.jpg);">
        <p><span class="subText">Bursa Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://www.avrupa.info.tr/sites/default/files/styles/standard_page_header/public/2016-08/Italy%20Pisa.jpg?itok=8Kq8APh6);">
        <p><span class="subText">İtalya Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://mediap.flypgs.com/awh/2500/1619//files/ulkeler/Almanya/berlin-almanya.jpg);">
        <p><span class="subText">Almanya Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://blog.flypgs.com/wp-content/uploads/2018/02/hollanda-amsterdam.jpg);">
        <p><span class="subText">Almanya Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="d-flex gallery" @click="this.$router.push('/otels')">
      <div class="image-text text" style="background-image: url(https://www.bilgiustam.com/resimler/2015/06/b_03122014mlsf9N36gE6p3gymBEuli0sKq.jpg);">
        <p><span class="subText">İngiltere Otelleri</span></p>
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped lang="scss">
@import './src/style.scss';
@import './src/media.scss';
@include calculateSize(web) {

  .search-bar{
    height: 400px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    .banner-image{

      /* Full height */
      height: 100%;

      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(https://thimages.co.uk/wildfoot-page/wildfootpage-25/page-image-43310.jpg);
    }
    input{
      height: 50px !important;
    }
    .overlay{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: .4;
      background: #000;
      color:white
    }
    .search-input{
      color: white;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 80%;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
    }
  }
  .banner-list{
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    padding-left: 13%;
    padding-right: 13%;
  }
  .gallery{
    border: 1px solid #898c95;
    justify-content: space-between;
    flex:33%;
    height: 225px;
    cursor: pointer;
    border-radius: 5px;
    .first{
      flex:2;
    }
    .second{
      flex:1
    }
    img{
      max-width: 100%;
      max-height: 100%;
    }

    .image-text{
      width: 100%;
      height: 225px;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;

      :hover {
        -webkit-transition: all 3s ease-in-out;
        border:1px solid #6bb56b;
        box-shadow: 0 3px 10px #00000033;
      }
      .subText {
        font-size: 20px;
      }
      .description{
        font-size:15px;
      }
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        opacity: .4;
        background: #000;
        color:white
      }
    }
    .text{
      display: table;
      p {
        color:white;
        display: table-cell;
        position: relative;
        z-index: 2;
        padding: 15px 20px 15px 20px;
      }
    }
  }
}

@include calculateSize(mobile) {
  .search-bar{
    display: none;
  }
  .banner-list{
    flex-direction: column;
    display: flex;
    grid-row-gap: 10px;
    padding-left: 3%;
    padding-right: 3%;
  }
  .gallery{
    border: 1px solid;
    min-height: 160px;
    justify-content: space-between;
    //max-width: -webkit-fill-available;
    .first{
      flex:2;
    }
    .second{
      flex:1
    }
    img{
      max-width: 100%;
      max-height: 100%;
    }
    .image-text{
      width: 100%;
      height: 225px;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      .subText {
        font-size: 20px;
      }
      .description{
        font-size:15px;
      }
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        opacity: .4;
        background: #000;
        color:white
      }
    }
    .text{
      display: table;
      p {
        color:white;
        display: table-cell;
        position: relative;
        z-index: 2;
        padding: 15px 20px 15px 20px;
      }
    }
  }



}

</style>
