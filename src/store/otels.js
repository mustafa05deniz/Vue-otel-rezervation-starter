import axios from 'axios'

const state = {
    users: [],
    otels:[],
    otel:{
        adultQuantity: 2,
        childQuantity: 2,
        endDate: new Date("2/15/2022"),
        selectedOtel: {id: '3', hotel_name: 'Dela Hotel'},
        startDate: new Date("2/10/2022")
    },
    otelDetail:{

    },
    couponList:[]
}

const getters = {
    usersList: state => state.users,
    otelsList:state=>state.otels,
    getSelectedOtel:state=>state.otel,
    getCouponList:state=>state.couponList
}

const actions = {
    async getOtels({commit}){
        const response = await axios.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels')
        commit('setOtels', response.data)
    },
    setOtel({commit},data){
        commit('setOtel',data);
    },
    async getOtelDetail({commit},otelId){
        console.log("test",otelId)
        const response = await axios.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details');
        console.log( response.data.find(res=>res.id === otelId));
        commit('setOtelDetail', response.data.find(res=>res.id === otelId))
    },
    async getCoupons({commit},otelId){
        console.log("test",otelId)
        const response = await axios.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/coupons');
        commit('setCouponList', response)
    },
    async saveRezervation({commit},data){
        console.log(data)
        const response = await axios.post('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-bookings',data);
        /*
        {
            "hotel_id": 3,
            "start_date": "2021-01-20",
            "end_date": "2021-02-20",
            "adult": 10,
            "child": 2,
            "room_type": 2,
            "room_scenic": 3,
            "price": 7676,
            "coupon_code": "CODE100",
            "card_name": "Ali Yılmaz",
            "card_number": "1111222233334444",
            "card_date_month": "01",
            "card_date_year": "2030",
            "card_cvv": "999"
            }

         */
        commit('not', response)
        console.log(response);
    }
}

const mutations = {
    setUsers: (state, users) => (
        state.users = users
    ),
    setOtels:(state,otels)=>{
        state.otels = otels;
    },
    setOtel:(state,otel)=>{
        state.otel = otel;
    },
    setOtelDetail:(state,detail)=>{
        state.otelDetail = detail;
    },
    setCouponList:(state,list)=>{
        state.couponList = list;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
