<template>
  <div class="cont">
    <div class="selectItems mdGutters">
      <select v-model="form.selectedOtel" class="mdSelect" name="cars" id="cars" >
        <option value="0"  selected="selected">Otel Seçiniz</option>
        <option :value="index" v-for="index in this.$store.state.otelsModule.otels" :key="index">{{index.hotel_name}}</option>
      </select>
      <Datepicker
          v-model="form.startDate"
          placeholder="Giriş Tarihi"
      ></Datepicker>
      <span v-if="form.errors().has('startDate')">{{
          form.errors().get("startDate")
        }}</span>
      <Datepicker v-model="form.endDate" placeholder="Çıkış Tarihi"></Datepicker>
      <span v-if="form.errors().has('endDate')">{{
          form.errors().get("startDate")
        }}</span>
      <input
          class="mdInput" v-bind:class="{ mdError:form.errors().has('adultQuantity')}"
          type="number"
          v-model="form.adultQuantity"
          placeholder="Yetişkin Sayısı"
      />
      <span v-if="form.errors().has('adultQuantity')">{{
          form.errors().get("adultQuantity")
        }}</span>

      <input
          class="mdInput"
          type="number"
          v-model="form.childQuantity"
          placeholder="Çocuk Sayısı"
      />
      <span v-if="form.errors().has('childQuantity')">{{
          form.errors().get("childQuantity")
        }}</span>


    </div>


  </div>
  <div class="buttons">
    <button class="mdButton " @click="this.$router.push('/')"> Geri</button>
    <button class="mdButton " @click="submit">Devam</button>
  </div>

</template>

<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import form from "vuejs-form";
export default {
  name: "component1",
  components: { Datepicker },
  mounted() {
    this.$store.dispatch("getOtels");
  },
  data: () => {
    const data1 = JSON.parse(localStorage.getItem('step1'));
    const selectedOtel = JSON.parse(localStorage.getItem('selectedOtel'));
    console.log(data1);
    return {
      form: form({
        selectedOtel: selectedOtel?selectedOtel:null,
        startDate: data1?.startDate?new Date(data1.startDate):null,
        endDate:  data1?.endDate?new Date(data1.endDate):null,
        adultQuantity: data1?.adultQuantity?data1.adultQuantity:null,
        childQuantity: data1?.childQuantity?data1.childQuantity:null,
      }).rules({
        selectedOtel: "required",
        adultQuantity: "required",
        childQuantity: "required",
      }).messages({

      })
    }
  },
  methods: {
    contiune: function () {
      console.log("test");
    },
    submit() {
      const data = this.form.all();
      console.log(data);
      console.log(this.form.validate().errors().any())
      if (this.form.validate().errors().any()) return;
      localStorage.step1=JSON.stringify(data)
      this.$store.dispatch("setOtel",data);
      this.$router.push('step2')
      //console.log( this.form.all());
    },
  },
};
</script>

<style scoped lang="scss">
.selectItems {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
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
</style>
