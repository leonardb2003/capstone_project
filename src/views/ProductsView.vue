<template>
     <div>
        <h2><span>P</span>roducts</h2>
        <div v-if="products == undefined">
            <SpinnerComp/>
        
        </div>
        <div v-else class="container">
            <div class="row">
              <div class="col-6 col-sm-4 " v-for="product in products" :key="product.prodID">
                  <div class="card" >
                    <img v-bind:src="product.imgURL" class="card-img-top" alt="product" >
                    <div class="card-body">
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: bold;" class="card-title">{{product.ProdName}}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace;" class="card-title">{{product.category}}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: 900;" class="card-title">R{{product.price}}</h5>
                      <a href="#" class="btn btn-dark">Add To Cart</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default{
    components: {
        SpinnerComp
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        const products =
        computed( ()=>store.state.products);
        const spinner = 
        computed (()=> store.state.showSpinner);
        return {
           products,
           spinner
        }
    }
}
</script>
<style scoped>
.card{
     width: 350px;
     margin-top: 50px;
     border-radius: 10px;
}
.card img{
    height: 360px;
    object-fit: cover;
    margin-top: 10px;
 }
</style>