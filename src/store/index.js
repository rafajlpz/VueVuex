import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 150
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    },
    disminuir(state){
      state.contador = state.contador - 10
    }
  },
  actions: {
  },
  modules: {
  }
})
