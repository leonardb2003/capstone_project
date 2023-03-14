<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span>B</span>lossom <span>B</span>ee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <i class="fa fa-home" aria-hidden="true"></i><router-link to ="/"> Home   </router-link>       
        </li>
        <li class="nav-item ">
          <i class="fa fa-inbox" aria-hidden="true"></i><router-link to ="/about"> About Us   </router-link>
        </li>
        <li class="nav-item">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i><router-link to ="/products"> Products   </router-link>     
        </li>
        <li class="nav-item ">
          <i class="fa fa-lock" aria-hidden="true"></i><router-link to ="/admin"> Admin   </router-link>       
        </li>
        <li class="nav-item ">
          <i class="fa fa-user" aria-hidden="true"></i><router-link to ="/login"> Login </router-link>
        </li>
        <li class="nav-item ">
          <i class="fa fa-user-plus" aria-hidden="true"></i><router-link to ="/register"> SignUp   </router-link>
        </li>
        <li class="nav-item ">
          <i class="fa fa-phone" aria-hidden="true"></i><router-link to ="/contact"> Contact   </router-link>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="bt-click" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
.navbar{
  /* background-color: white ; */
  background: transparent;
}
.nav-item{
  margin-left: 50px;
}

.navbar-brand span{
  color: blueviolet;
  font-size: 2rem;
}
.navbar-brand{
  color: white;
}
.fa {
  color: #800ca3;
}
.bt-click{
  background: linear-gradient(lightblue,blueviolet,#2c90ed);
  border: none;
  border-radius: 5px;
}


</style>