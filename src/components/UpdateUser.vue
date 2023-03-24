<template>
   <div class="add">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModalToggle' + this.user.firstName">
   Update
  </button>
  </div>
  <div class="modal fade" :id="'exampleModalToggle' + this.user.firstName" tabindex="-1" aria-labelledby="exampleModalToggleLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Update {{ this.user.firstName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" @submit="updateUser">
    
          <div class="col-md-6">
            <label for="name" class="form-label">FirstName</label>
            <input type="firstName" class="form-control"  v-model="payload.firstName">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">LastName</label>
            <input type="lastName" class="form-control"  v-model="payload.lastName">
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="payload.emailAdd">
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Password</label>
            <input type="userPass" class="form-control" id="name" v-model="payload.userPass">
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">UserRole</label>
            <input type="userRole" class="form-control" id="userRole" v-model="payload.userRole">
          </div>
          <div class="col-md-6">
            <label for="image" class="form-label">Profile</label>
            <input type="userProfile" class="form-control" id="userProfile" v-model="payload.userProfile">
          </div>
          <button class="btn btn-success mt-3" @click=" updateUser (this.user)" data-bs-dismiss="modal">
            Update User
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
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  inheritAttrs:false,
  props:['user'],
  setup() {
    const payload = {
      userID: '',
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      userRole: 'User',
      userProfile: 'https://i.postimg.cc/dVDqFpMd/default-avatar-profile-icon-of-social-media-user-vector.jpg',
    };
    const store = useStore();

    const userMsg = 
    computed( ()=>store.state.message)

     function updateUser(user){
      payload.userID = user.userID;
      if(payload.firstName=='') payload.firstName = user.firstName;
      if(payload.lastName=='') payload.lastName = user.lastName;
      if(payload.emailAdd=='') payload.emailAdd = user.emailAdd;
      if(payload.userPass=='') payload.userPass = user.userPass;
      console.log(payload);

       store.dispatch('updateUser', payload)
       store.dispatch('fetchUsers');

    }

    return {
      payload,
      userMsg,
      updateUser
     
    }
  },

}
</script>