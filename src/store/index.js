import { createStore } from "vuex";
import { useCookies } from "vue3-cookies";
import axios from "axios";
import router from "../router/index";
const bedUrl = "https://blossom-bee.onrender.com/";
const {cookies} = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    carts: []
  },
  getters: {},
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setSingleProduct(state, value) {
      state.SingleProduct = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setCarts(state, value) {
      state.carts = value;
    }
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${bedUrl}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${bedUrl}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async register(context, payload) {
      console.log(payload);
      fetch(`https://blossom-bee.onrender.com/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          router.push('/login')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addProduct(context, payload) {
      console.log(payload);
      fetch(`https://blossom-bee.onrender.com/product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // async register(context, payload){
    //   const res= await axios.post(`${bedUrl}register`, payload);
    //   const {msg,err} = await res.data;
    //   if(msg){
    //     context.commit('setMessage',msg)
    //   }else{
    //     context.commit('setMessage',err)
    //   }
    // },
    // async addProduct(context, payload) {
    //   const res = await axios.post(`${bedUrl}product`, payload);
    //   const { msg, err } = await res.data;
    //   if (msg) {
    //     context.commit("setMessage", msg);
    //   } else {
    //     context.commit("setMessage", err);
    //   }
    // },
    async login(context, payload) {
      console.log(payload)
      const res = await axios.post(`${bedUrl}login`, payload);
      console.log("Response: ", res);
      const { bbToken, result, msg , err } = await res.data;
      if (result) {
        context.commit('setUser', result);
        context.commit("setMessage", msg);
        cookies.set("LegitUser", bbToken);
        localStorage.setItem('user', JSON.stringify(result))
        localStorage.setItem('userID', JSON.stringify(result.userID))
        router.push("/");
      } else {
        context.commit("setMessage", err);
      }
    },
    async SingleProduct(context, id) {
      const res = await axios.get(`${bedUrl}product/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProduct", results[0]);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addUser(context, id) {
      const res = await axios.get(`${bedUrl}user/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUser", results[0]);
      } else {
        context.commit("setMessage", err);
      } 
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${bedUrl}product/${id}`);
      console.log(res);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setProduct", msg[0]);
      } else {
        context.commit("setMessage", err);
      } 
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${bedUrl}user/${id}`);
      console.log(res);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setUser", msg[0]);
      } else {
        context.commit("setMessage", err);
      } 
    },
    async updateUser(context, payload) {
      const res = await axios.put(`${bedUrl}user/${payload.userID}`, payload);
      const { msg, err } = await res.data;
      console.log("msg - update: ", msg);
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      } 
    },
    async updateProduct(context, payload) {
      const res = await axios.put(`${bedUrl}product/${payload.prodID}`, payload);
      console.log(res);
      const { msg, err,results } = await res.data;
      if (msg) {
        context.commit("setProduct", results);
      } else {
        context.commit("setMessage", err);
      } 
    },
    async fetchCartItem (context,id){
      const res = await axios.get(`${bedUrl}user/${id}/carts`);
      const{err, results} = await res. data;
     if(results){
      console.log(results)
      context.commit('setCarts',results);
     }else{
      console.log(err)
      context.commit('setMessage', err)
     }
    },
    async addCartItem(context, id){
      const res = await axios.post(`${bedUrl}user/${id}/cart`);
      const {err, results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setCarts', results);
      }else context.commit('setMessage',err)
    },
    async updateCartItem(context, payload){
      const res = await axios.put(`${bedUrl}carts`, payload);
      const {err, results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      }else context.commit('setMessage',err)
    },
    async deleteCartItem(context, id){
      const res = await axios.delete(`${bedUrl}carts/${id}`);
      const {err, results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      }else context.commit('setMessage',err)
    },
    async UserProfile(context, id) {
      const res= await axios.get(`${bedUrl}user/${id}`);
      console.log(res);
      const{msg, err} = await res.data;
      if(msg){
        context.commit("setUser",msg[0]);
        console.log(msg);
      }else{
        context.commit("setMessage", err);
      }
    }
  },
  modules: {},
});
