<template>
       <div class="add">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Product 
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
          <div class="col-md-6">
            <label for="name" class="form-label"></label>
            <input type="name" class="form-control" id="Your Name">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">lastName</label>
            <input type="name" class="form-control" id="name">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">EmailAdd</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">userRole</label>
            <input type="name" class="form-control" id="name">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">userProfile</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
        </div>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>