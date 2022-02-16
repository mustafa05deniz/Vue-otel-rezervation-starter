import { createStore } from 'vuex'
import otelsModule from './otels'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    test() {
      console.log("test");
    },
  },
  modules: {
    otelsModule
  },
  devtools:true
})
