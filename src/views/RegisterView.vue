<template>
    <form @submit.prevent="registration">
      <!-- <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"> -->
        <div class="container">
          <div class="form-box register">
              <h2>SignUp Now</h2>
              <div class="insert-box">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text"  name="firstName" v-model="payload.firstName" required>
                  <label>FirstName</label>
              </div>
              <div class="insert-box">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text"  name="lastName"  v-model="payload.lastName" required>
                  <label>LastName</label>
              </div>
              <div class="insert-box">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <input type="email" name="email" v-model="payload.emailAdd" required>
                  <label>EmailAdd</label>
              </div>
              <div class="insert-box">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                  <input type="password" name="password" v-model="payload.userPass" required>
                  <label>Password</label>
              </div>
              <div class="insert-box">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                  <input type="text" name="name" v-model="payload.userRole" required> 
                  <label>UserRole</label>
              </div>
              <div class="insert-box">
                  <input type="date" name="date" v-model="payload.joinDate" required>
              </div>
              <div class="remember-forgot">
                  <label><input type="checkbox">I agree to all terms & conditions.</label>
              </div>
              <button type="submit" class="enter"> Register </button>
          </div>
        </div>
      <!-- </div> -->
    </form>
</template>
<style scoped>
.container{
  position: relative;
  background: transparent;
  width: 500px;
  height: 820px;
  background-color: #b167e9;
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
  font-size: 60px;
  text-align: center;
  color: #f9f4f4;
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
  color: #383535;
  text-align: center;
  font-size: 21px;
  margin: 30px;
}
.register-link  {
  text-decoration: none;
  color: #383535;
}
</style>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      userRole: 'User',
      userProfile: 'https://i.postimg.cc/dVDqFpMd/default-avatar-profile-icon-of-social-media-user-vector.jpg',
      joinDate: '',
    };
    const store = useStore();
    // const register = (payload)=> {
    //   store.dispatch("register", payload);
    //   // return(payload);
    // }
    const userMsg = 
    computed( ()=>store.state.message)

    return {
      payload,
      userMsg,
      // register
    }
  },
  methods: {
    registration() {
      this.$store.dispatch("register", this.payload);
    }
  }
}
</script>