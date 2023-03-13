<template>
  <div class="background">
  <NavbarComp/>
    <img src="https://i.postimg.cc/15TPKm9k/HD-wallpaper-cherry-blossoms-nature-spring.jpg" style="display: contents;">
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
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
