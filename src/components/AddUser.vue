<template>
  <div class="add">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add User
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Users</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" @submit="register">
          <div class="col-md-6">
            <label for="name" class="form-label">firstName</label>
            <input
              type="name"
              class="form-control"
              v-model="firstName"
              name="firstName"
            />
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">lastName</label>
            <input
              type="name"
              class="form-control"
              v-model="lastName"
              name="lastName"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">EmailAdd</label>
            <input
              type="emailAdd"
              class="form-control"
              v-model="emailAdd"
              name="email"
            />
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">userRole</label>
            <input
              type="userRole"
              class="form-control"
              v-model="userRole"
              name="name"
            />
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">userPass</label>
            <input
              type="userPass"
              class="form-control"
              v-model="userPass"
              name="password"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">userProfile</label>
            <input
              type="userProfile"
              class="form-control"
              name="image"
            />
          </div>
          <button class="btn btn-success mt-3" @click="($event) => register()">
            Add User
          </button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>
<script>
// import { computed } from "@vue/runtime-core";
// import { useStore } from "vuex";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAdd: "",
      userPass: "",
      userRole: "User",
    };
  },
  methods: {
    register() {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        userRole: "User",
      };
      this.$store.dispatch("register", payload);
    },
  },
};

//   // userProfile: "",

// const store = useStore();
// // const register = (payload)=> {
// //   store.dispatch("register", payload);
// //   // return(payload);
// // }
// const userMsg = computed(() => store.state.message);

// return {
//   payload,
//   userMsg,
//   // register
// };
</script>
