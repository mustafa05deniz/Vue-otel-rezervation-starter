<template>
  <div class="cont">
    <div class="item mdGutters bg-white">
      <div class="checkout">
        <div class="credit-card-box">
          <div class="flip">
            <div class="front">
              <div class="chip"></div>
              <div class="logo">
                <svg  id="visa" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                      width="47.834px" height="47.834px" viewBox="0 0 47.834 47.834" style="enable-background:new 0 0 47.834 47.834;">
                  <g>
                    <g>
                      <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                         c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                         c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                         M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                         c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                         c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                         l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                         C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                         C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                         c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                         h-3.888L19.153,16.8z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="number">{{this.form.number1}} {{this.form.number2}} {{this.form.number3}} {{this.form.number4}}  </div>
              <div class="card-holder">
                <label>Card holder</label>
                <div>{{this.form.cardHolder}}</div>
              </div>
              <div class="card-expiration-date">
                <label>Expires</label>
                <div>{{ this.form.cardExpireDate.month }} / {{ this.form.cardExpireDate.year }}</div>
              </div>
            </div>
            <div class="back">
              <div class="strip"></div>
              <div class="ccv">
                <label>CCV</label>
                <div>{{ this.form.cardCvv }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="form">
          <div class="cardNumber">
            <div class="label">Card Number</div>
            <div class="inputs">
              <input
                  class="mdInput" v-bind:class="{ mdError:form.errors().has('number1')}"
                  type="text"
                  maxlength="4"
                  minlength="4"
                  v-model="form.number1"
                  onfocus="this.value=''"
              />
              <input
                  class="mdInput" v-bind:class="{ mdError:form.errors().has('number2')}"
                  type="text"
                  maxlength="4"
                  minlength="4"
                  v-model="form.number2"
                  onfocus="this.value=''"
              />
              <input
                  class="mdInput"  v-bind:class="{ mdError:form.errors().has('number3')}"
                  type="text"
                  maxlength="4"
                  minlength="4"
                  v-model="form.number3"
                  onfocus="this.value=''"
              />
              <input
                  class="mdInput" v-bind:class="{ mdError:form.errors().has('number4')}"
                  type="text"
                  maxlength="4"
                  minlength="4"
                  v-model="form.number4"
                  onfocus="this.value=''"
              />
            </div>
          </div><br>
          <div class="name">
            <input
                class="mdInput"
                v-bind:class="{ mdError:form.errors().has('cardHolder')}"
                type="text"
                maxlength="25"
                v-model="form.cardHolder"
                onfocus="this.value=''"
            />

          </div>
          <br>
          <div class="date-cvv">
            <div class="date">
              <select v-model="form.cardExpireDate.month"  class="mdInput"   >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select v-model="form.cardExpireDate.year" class="mdInput">
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
              </select>
            </div>
            <div class="cvv">
              <input
                  class="mdInput" v-bind:class="{ mdError:form.errors().has('cardCvv')}"
                  type="text"
                  maxlength="3"
                  v-model="form.cardCvv"
                  onfocus="this.value=''"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="buttons">
    <button class="mdButton primary"  @click='previouse()'>Geri</button>
    <button class="mdButton primary"  @click='complete'>Devam</button>
  </div>
</template>

<script>
import form from "vuejs-form";


export default {
  name: "component3",
  components: {
  },
  mounted() {
    const data1 = JSON.parse(localStorage.getItem('card'));
    if(data1){
      this.form.number1 = data1?.number1;
      this.form.number2 = data1?.number2;
      this.form.number3 = data1?.number3;
      this.form.number4 = data1?.number4;
      this.form.cardHolder = data1?.cardHolder;
      this.form.cardExpireDate = data1?.cardExpireDate;
      this.form.cardCvv = data1?.cardCvv;

    }
  },
  methods: {
    previouse: function () {
      this.$router.push('step2')
    },
    complete: function () {
      const data = this.form.all();
      console.log(data);
      if (this.form.validate().errors().any()) return;
      console.log("test")
      localStorage.card=JSON.stringify(data)
      this.$router.push('complete')
    },

  },
  computed: {
  },
  data: () => {
    return {
      form: form({
        number1:null,
        number2:null,
        number3:null,
        number4:null,
        cardHolder:"",
        cardExpireDate:{
          month:1,
          year:2022
        },
        cardCvv:null
      }).rules({
        number1: "required",
        number2: "required",
        number3: "required",
        number4: "required",
        cardHolder: "required",
        cardExpireDate: "required",
        cardCvv:"required"

      }).messages({

      }),
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

.form {
  padding: 4%;

  .cardNumber {
    .label{
      margin-bottom: 3px;
      font-weight: 200;
    }
    .inputs{
      display: flex;
      grid-column-gap: 10px;
    }
  }

  .date-cvv{
    display: flex;
    grid-column-gap: 10px;
    .date{
      display: flex;
      grid-column-gap: 10px;
      flex:2
    }
    .cvv{
      flex:1;
      &:hover .checkout.credit-card-box.flip {
        transform: rotateY(180deg);
      }
    }
  }
}

.checkout {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.credit-card-box {
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .flip,
  &.hover .flip {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 320px;
    height: 160px;
    border-radius: 15px;
    backface-visibility: hidden;
    background: linear-gradient(135deg, #bd6772, #53223f);
    color: #fff;
    font-family: Inconsolata;
    text-shadow: 0 1px 1px hsla(0, 0, 0, 0.3);
    box-shadow: 0 1px 6px hsla(0, 0, 0, 0.3);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url('http://cdn.flaticon.com/svg/44/44386.svg') no-repeat center;
      background-size: cover;
      opacity: .05;
    }
  }

  .flip {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .logo {
    position: absolute;
    top: 9px;
    right: 20px;
    width: 60px;

    svg {
      width: 100%;
      height: auto;
      fill: #fff;
    }
  }

  .front {
    z-index: 2;
    transform: rotateY(0deg);
    margin-top:10px;
  }

  .back {
    transform: rotateY(180deg);
    margin-top: -160px;
    .logo {
      top: 185px;
    }

  }

  .chip {
    position: absolute;
    width: 60px;
    height: 45px;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, hsl(269,54%,87%) 0%,hsl(200,64%,89%) 44%,hsl(18,55%,94%) 100%);;
    border-radius: 8px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border: 4px solid hsla(0, 0, 50, .1);
      width: 80%;
      height: 70%;
      border-radius: 5px;
    }
  }

  .strip {
    background: linear-gradient(135deg, hsl(0, 0, 25%), hsl(0, 0, 10%));
    position: absolute;
    width: 100%;
    height: 50px;
    top: 30px;
    left: 0;
  }

  .number {
    position: absolute;
    margin: 0 auto;
    top: 75px;
    left: 17px;
    font-size: 23px;
  }

  label {
    font-size: 10px;
    letter-spacing: 1px;
    text-shadow: none;
    text-transform: uppercase;
    font-weight: normal;
    opacity: 0.5;
    display: block;
    margin-bottom: 3px;
  }

  .card-holder,
  .card-expiration-date {
    position: absolute;
    margin: 0 auto;
    top: 107px;
    left: 19px;
    font-size: 18px;
    text-transform: capitalize;
  }

  .card-expiration-date {
    text-align: right;
    left: auto;
    right: 20px;
  }

  .ccv {
    height: 18px;
    background: #fff;
    width: 91%;
    border-radius: 5px;
    top: 110px;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    color: #000;
    text-align: right;
    padding: 10px;

    label {
      margin: -25px 0 14px;
      color: #fff;
    }
  }


}


.the-most {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 50vw;
  max-width: 200px;
  padding: 10px;

  img {
    max-width: 100%;
  }
}
</style>
