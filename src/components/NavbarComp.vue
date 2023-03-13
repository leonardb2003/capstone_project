<template>
   <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blossom Bee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Blossom Bee</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
          <i class="fa fa-home" aria-hidden="true"></i><router-link to ="/"> Home   </router-link>       
        </li>
        <li class="nav-item ">
          <i class="fa fa-inbox" aria-hidden="true"></i><router-link to ="/about"> About   </router-link>
        </li>
        <li class="nav-item">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i><router-link to ="/products"> Products   </router-link>     
        </li>
        <li class="nav-item ">
          <i class="fa fa-lock" aria-hidden="true"></i><router-link to ="/admin"> Admin   </router-link>       
        </li>
        <li class="nav-item ">
          <i class="fa fa-user" aria-hidden="true"></i><router-link to ="/login"> Login   </router-link>
        </li>
        <li class="nav-item ">
          <i class="fa fa-user-plus" aria-hidden="true"></i><router-link to ="/register"> Register   </router-link>
        </li>
        <li class="nav-item ">
          <i class="fa fa-phone" aria-hidden="true"></i><router-link to ="/contact"> Contact   </router-link>
        </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
.nav-item{
  text-decoration: none;
  margin-top: 10px;
}


</style>