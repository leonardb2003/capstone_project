<template>
<div class="add">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Add Product
  </button>
</div>
<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdrop" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdrop">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" @submit="addProduct">
    
          <div class="col-md-6">
            <label for="name" class="form-label">prodName</label>
            <input type="prodName" class="form-control"  v-model="prodName">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">category</label>
            <input type="category" class="form-control"  v-model="category">
          </div>
          <div class="col-md-6">
            <label for="text" class="form-label">price</label>
            <input type="price" class="form-control" v-model="price">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">prodQuantity</label>
            <input type="prodQuantity" class="form-control" id="name" v-model="prodQuantity">
          </div>
          <div class="col-md-6">
            <label for="imageURL" class="form-label">prodImg</label>
            <input type="imageURL" class="form-control" id="imgURL" v-model="imgURL">
          </div>
          <button class="btn btn-success mt-3" @click="($event) => addProduct()">
            Add Product
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
export default {
  data() {
    return {
      prodName: "",
      category: "",
      price: "",
      prodQuantity: "",
      imgURL: "",
    };
  },
  methods: {
    addProduct() {
      const payload = {
        prodName: this.prodName,
        category: this.category,
        price: this.price,
        prodQuantity: this.prodQuantity,
        imgURL:this.imgURL,
      };
      this.$store.dispatch("addProduct", payload);
    },
  },
};
</script>