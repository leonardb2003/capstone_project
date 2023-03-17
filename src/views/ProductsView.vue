<template>
     <div>
        <div class="name">
        <h2>Products</h2>
        </div>
        <div v-if="products == undefined">
            <SpinnerComp/>
        
        </div>
        <div v-else class="container">
            <div class="row">
              <div class="col-6 col-sm-4 " v-for="product in products" :key="product.prodID">
                  <div class="card" >
                    <img v-bind:src="product.imgURL" class="card-img-top" alt="product" >
                    <div class="card-body">
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: bold;">{{ product.prodName }}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace;" class="card-title">{{product.category}}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: 900;" class="card-title">R{{product.price}}</h5>
                      <RouterLink :to="{name:'singleProduct', params:{id:product.prodID}}">
                        <button class="btn btn-dark">View More</button></RouterLink>
                       <button class="btn btn-dark">Add To Cart</button>
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
.name h2{
    color: blueviolet;
    font-family:'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 50px;
    margin-top: 20px;
}
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
 .btn{
    margin: 10px;
 } 
</style>