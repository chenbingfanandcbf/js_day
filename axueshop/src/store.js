import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//配置持久化操作vuex-persist
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  //配置插件支持
  plugins: [vuexLocal.plugin]
})
