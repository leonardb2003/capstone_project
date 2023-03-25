<template>
<form @submit.prevent= "login">
     <div class="container">
      <div class="form-box login">
        <h2>Login</h2>
        <div class="insert-box">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <input type="email"  v-model="payload.emailAdd" required>
          <label>Email</label>
        </div>
        <div class="insert-box">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input type="password"  v-model="payload.userPass" required>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"> Remember Me </label><a href="#">Forgot Password?</a>
        </div>
        <button class="enter" type="submit" @click.prevent="login"> Login </button>
        <div class="register-login">
          <p>Don't have an account? <router-link to ="/register"><a href="#" class="register-link">Register</a></router-link></p>
        </div>
      </div>
    </div>
  <!-- </div> -->
</form>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const payload = {
      emailAdd: '',
      userPass: '',
    };
    const store = useStore();
    const login = () => {
      store.dispatch("login", payload);
      store.dispatch("fetchUsers");
    }
    const userMsg = 
    computed( ()=>store.state.message)

    return {
      payload,
      userMsg,
      login
    }
  },
//   methods: {
//  login() {
//   console.log('statement 1');
//      this.$store.dispatch("login", this.payload);
//     }
//   }
}
</script>
<style scoped>
.container{
  position: relative;
  background: transparent;
  width: 500px;
  height: 560px;
  background-color: transparent;
  border: 2px solid #f5f1f4;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px black;
  margin-top: 60px;
  margin-bottom: 20px;
}
.container .form-box{
  width: 100%;
  padding: 50px;
}
.form-box h2{
  font-size: 40px;
  text-align: center;
  color: #efe9e9;
  font-family: 'Courier New', Courier, monospace;
}
.insert-box {
  margin: 40px 0;
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid;

}
.insert-box input:focus~label,
.insert-box input:valid~label{
  top: -5px;
}
.insert-box input{
  font-weight: 600;
  color: #433e3e;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background: transparent;
}
.insert-box label{
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
  top: 50%;
  left: 5px;
  pointer-events: none;
  transform: translateY(-50%);
  color: #272020;
  transition: .4s;
}
.insert-box .fa {
  margin-left: 300px;
  color: black;
}
.remember-forgot {
  margin: -15px 0 15px;
  font-weight: 600;
  color: #3c3232;
  justify-content: space-between;
  display: flex;
}
.remember-forgot a {
  text-decoration: none;
  color: #383535;
}
.enter{
  width: 100%;
  height: 50px;
  background: #d290ea;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  border: #ed91e8;
}
.remember-forgot label input{
  accent-color: #272020;
  margin-right: 3px;
}
.register-login {
  color: #0d0d0d;
  text-align: center;
  font-size: 21px;
  margin: 30px;
}
.register-link  {
  text-decoration: none;
  color: black;
}
@media (max-width:320px) {
  .container{
    width: 300px;
    height: 563px
}
.form-box h2{
  font-size: 30px;
  text-align: center;
  color:white;
  font-family: 'Courier New', Courier, monospace;
}
.register-login {
  color: black;
  font-size: 20px;
  margin: 20px;
}  
}
</style>