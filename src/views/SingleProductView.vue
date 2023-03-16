<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img v-bind:src="product.imgURL" class="card-img-top" alt="product" >
                    <div class="card-body">
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: bold;">{{ product.prodName }}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace;" class="card-title">{{product.category}}</h5>
                      <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: 900;" class="card-title">R{{product.price}}</h5>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    created() {
        this.$store.dispatch('SingleProduct', this.$route.params.id)
    }
}
</script>