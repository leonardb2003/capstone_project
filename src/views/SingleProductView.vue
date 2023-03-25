<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img v-bind:src="product?.imgURL" class="card-img-top" alt="product" >
                    <div class="card-body">
                      <h5  class="card-title">{{product?.prodName}}</h5>
                      <h3 class="card-d">{{product?.prodDescription}}</h3>
                      <h5  class="card-cat">{{product?.category}}</h5>
                      <h5  class="card-price">R{{product?.price}}</h5>
                    </div>
                    <router-link to="/carts/:id"> <button @click="addCartItem(user, product)" class="btn btn-light">Add To Cart</button></router-link> 
            </div>
        </div>
    </div>
</template>
<script>  
export default {
    computed: {
        product() {
            return this.$store.state.product
        },

        data(){
        return{
            userID: '',
            prodID: ""
        }
    },
    methods:{
        addCartItem: function (user, product) {
            return this.$store.dispatch("addCartItem", {
                userID: user?.userID,
                prodID: product?.prodID
            })
        },
    },
    },
    created() {
        this.$store.dispatch('SingleProduct', this.$route.params.id)
        this.$store.dispatch('/carts/:id', this.$route.params.id)
    }
}
</script>
<style scoped>
.col img{
    width: 550px;
    height: 590px;
    margin-top: 50px;
    float: left;
}
.card-body{
    margin-top: 60px;
}
.card-title{
    font-size: 40px;
    color: #fbf8f8;
}
.card-cat{
    font-size: 27px;
    color: white;
}
.card-price{
    color: white;
    margin-top: 10px;
    font-size: 30px;
}
.card-d{
    color: white;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 20px;
}
.btn{
    margin-top: 90px;
    width: 120px;
    height: 60px;
}
@media (max-width: 320px) {
.col img[data-v-6a1e9602] {
    width: 300px; 
    height: 330px;
    margin-top: 50px;
    float: left;    
}
}
</style>