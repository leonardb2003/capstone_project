<template>
    <div v-if="!carts">
    <SpinnerComp/>
        <h1>Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Quantity</th> -->
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in carts" :key="product.prodID">
                    <td><img :src="product.imgURL" alt=""></td>
                    <td>{{ product.prodName }}</td>
                    <!-- <td>{{ product.prodQuantity }}</td> -->
                    <td>R{{ product.price }}</td>
                    <td><i @click="deleteCartItem" class="fa-solid fa-trash fa-beat"></i></td>
                </tr>
            </tbody>
        </table>
        <div class="wrapper">
            <h2>Summary</h2>
            <div class="summary">
                <div>
                    <p>SubTotal</p>
                    <p>R {{ subTotal.toFixed(2) }}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>{{ totalAmount.toFixed(2)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    name: "CartView",
    data() {
        return {
            userID: '',
            firstName: '',
            lastName: '',
            emailAdd: '',
            userPass: '',
            userRole: '',
            userProfile: '',
            joinDate: ''
        }
    },
    components: {
        SpinnerComp
    },
    methods: {
        deleteCartItem: function (user) {
            return this.$store.dispatch("deleteCartItem", {
                userID: user.userID,
            })
        },
    },
    computed: {
        carts: function () {
            return this.$store.state.carts
        },
        user: function () {
            return JSON.parse(localStorage.getItem("user"))
        },
        subTotal() {
            let itemPrice = 0;
            this.carts.forEach((product) => {
                itemPrice += parseFloat(product.price);
            });
            return itemPrice;
        },
        totalAmount(){
            return this.subTotal + this.delivery
        }
    },
    created() {
        this.$store.dispatch("fetchCartItem")
        this.$store.dispatch("fetchProducts")
        // this.$store.dispatch("getUser")
    }
}
</script>
<style scoped>
.summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.btn-success{
    margin-bottom: 2rem;
}
.wrapper {
    width: 30rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}
.emoji {
    width: 30rem;
    margin-bottom: 3rem;
}
a {
    text-decoration: none;
    color: white;
}
img {
    width: 5rem;
}
h1,
h3 {
    color: lightcoral;
    margin-bottom: 3rem;
}
@media screen and (max-width: 505px) {
    .emoji {
        width: 17rem;
    }
    .wrapper {
    width: 20rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}
}
@media screen and (max-width: 340px) {
    .wrapper {
    width: 17rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}
}
</style>
<!-- <script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
    export default {
        setup(){
            const store = useStore();
            async function setCarts(){
                let user = await JSON.parse(localStorage.getItem('user'));
                store.dispatch('fetchCartItem'), await user.userID;
            }
            setCarts();
            function cartsTotal(carts){
                let cartArr = carts;
                let cartsTotal = 0;
                try{
                    cartArr.forEach((item)=>{
                      cartsTotal += item.price
                    });
                }catch(err){
                    console.log('Loading Time...')
                }
                return cartsTotal
            }
            let carts = computed(() => store.state.cart)
            return{
                carts,
                cartsTotal
            }
    }
 }
</script> -->






