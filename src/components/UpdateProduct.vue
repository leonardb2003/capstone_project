<template>
  <div class="add">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModalToggle' + this.product.prodName">
   Update
  </button>
  </div>
  <div class="modal fade" :id="'exampleModalToggle' + this.product.prodName" tabindex="-1" aria-labelledby="exampleModalToggleLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Update {{ this.product.prodName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" @submit="updateProduct">
    
          <div class="col-md-6">
            <label for="name" class="form-label">prodName</label>
            <input type="prodName" class="form-control"  v-model="payload.prodName">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">category</label>
            <input type="category" class="form-control"  v-model="payload.category">
          </div>
          <div class="col-md-6">
            <label for="text" class="form-label">price</label>
            <input type="price" class="form-control" v-model="payload.price">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">prodQuantity</label>
            <input type="prodQuantity" class="form-control" id="name" v-model="payload.prodQuantity">
          </div>
          <div class="col-md-6">
            <label for="imageURL" class="form-label">prodImg</label>
            <input type="imageURL" class="form-control" id="imgURL" v-model="payload.imgURL">
          </div>
          <button class="btn btn-success mt-3" @click=" updateProduct (this.product)" data-bs-dismiss="modal">
            Update Product
          </button>
        </div>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  inheritAttrs:false,
  props:['product'],
  setup() {
    const payload = {
      prodID:'',
      prodName: '',
      category: '',
      price: '',
      prodQuantity: '',
      imgURL: '',
    };
    const store = useStore();

    const userMsg = 
    computed( ()=>store.state.message)

    async function updateProduct(product){
      payload.prodID = product.prodID;
      if(payload.prodName=='') payload.prodName = product.prodName;
      if(payload.category=='') payload.category = product.category;
      if(payload.price=='') payload.price = product.price;
      if(payload.imgURL=='') payload.imgURL = product.imgURL;
      console.log(payload);

      await store.dispatch('updateProduct', payload)

      await store.dispatch('fetchProducts');
    }

    return {
      payload,
      userMsg,
      updateProduct
     
    }
  },

}
</script>