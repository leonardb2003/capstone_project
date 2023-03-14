<template>
  <div class="background">
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
  </div>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: rgb(255, 253, 253);
}

nav a.router-link-exact-active {
  color: blueviolet;
}
.background{
  background: linear-gradient(#62c8ea, blueviolet,rgb(244, 115, 154),#0073ff);
  min-height: 100vh;
}

</style>
