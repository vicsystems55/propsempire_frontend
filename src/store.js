import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: ' ',
    keyword: '',
  },
  mutations: {
    getCategory(state, category){
      state.category = category
      
    },
    getKeyword(state, keyword){
      state.keyword = keyword
    }
  },
  getters:{
    category: state =>  state.category,
    keyword: state =>  state.keyword,
  },
  actions: {

  }
});
