import { createStore } from 'vuex'
import axios from 'axios'
const bedUrl = "https://blossom-bee.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value;
    },
    setSingleProduct(state, value) {
      state.SingleProduct = value;
    },
    setMessage(state, value) {
      state.message = value;
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${bedUrl}users`);
      const {results,err} = await res.data;
      if(results){
        context.commit('setUsers',results)
      }else{
        context.commit('setMessage',err)
      }
    },
    async fetchProducts(context){
      const res= await axios.get(`${bedUrl}products`)
      const {results,err} = await res.data;
      if(results){
        context.commit('setProducts',results)
      }else{
        context.commit('setMessage',err)
      }
    },
    async register(context, payload){
      const res= await axios.post(`${bedUrl}register`, payload);
      const {msg,err} = await res.data;
      if(msg){
        context.commit('setMessage',msg)
      }else{
        context.commit('setMessage',err)
      }
    },
    async login(context, payload){
      const res= await axios.post(`${bedUrl}login`, payload);
      const {msg,err} = await res.data;
      if(msg){
        context.commit('setMessage',msg)
      }else{
        context.commit('setMessage',err)
      }
    },
    async SingleProduct(context, id){
      const res= await axios.get(`${bedUrl}product/${id}`,)
      const {results,err} = await res.data;
      if(results){
        context.commit('setProduct',results[0])
      }else{
        context.commit('setMessage',err)
      }
    }
  },
  modules: {
  }
})
