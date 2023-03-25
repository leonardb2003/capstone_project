<template>
       <div class="container mt-5">
               <div class="row">
                    <div class="col">
                           <div class="title">USER PROFILE</div>
                                   <div class="input-box">
                                       <label>User Name</label>
                                       <h3>{{ loggedUser.firstName}}</h3>
                                   </div>
                                   <div class="input-box">
                                       <label>Last Name</label>
                                       <h3>{{loggedUser.lastName}}</h3>
                                   </div>
                                   <div class="input-box">
                                       <label>UserRole</label>
                                       <h3>{{loggedUser.userRole}}</h3>
                                   </div>
                                   <div class="input-box">
                                       <label>Email</label>
                                       <h3>{{loggedUser.emailAdd}}</h3>
                                   </div>
                   </div>
               <div class="col">
                   <img class="img-fluid" :src="loggedUser.userProfile" >
               </div>
                       <div class="button">
                       <input type="submit" value="log out">
                       </div>
               </div>
           </div>
</template>
<script>
 export default {
   computed: {
       loggedUser() {
           const data = JSON.parse(localStorage.getItem('user'))
           return this.$store.state.user||data
       }
   },
   mounted() {
       this.store.dispatch('fetchUser')
   }
   }
</script>
<style scoped>
.img-fluid{
   margin-right: 40px;
   margin-bottom: 30px;
   padding-top: 70px;
}
.col{
   margin: 20px;
}
.input-box label{
   margin-right: 35px;
   font-size: 25px;
   font-family: Georgia, 'Times New Roman', Times, serif;
   color: white;
}
.input-box h3{
   margin-right: 30px;
   color: black;
}
.title{
 font-family:'Courier New', Courier, monospace;
 font-size: 0px;
 color: #f6f4f7;
 text-decoration: underline;
}
.container{
 width: 40%;
 background: blueviolet;
 align-items: center;
 border-radius: 3rem;
 padding-bottom: 10px;
}
.container .title{
 font-size: 25px;
 font-weight: 500;
 position: relative;
}
form.button input{
 height: 100%;
 width: 100%;
 outline:none;
 background-image: (163deg, #ff00d9 0%, #ff0095 100%);
 border: none;
 font-size: 18px;
 font-weight: 500;
 letter-spacing: 1px;
 border-radius: 2em;
 background-color: linear-gradient(163deg, #ff00b3 0%, #00a2ff 100%);
}
.button input{
 width: 200px;
 border-radius: 10px;
 background: linear-gradient(163deg, #ff0088 0%, #0077ff 100%);
}
.button{
   padding: 40px;
}
@media (max-width: 320px) {
 .container{
     width: 300px;
 }
 .img-fluid{
   margin-right: 0px;
   margin-bottom: 0px;
   padding-top: 0px;
}
}
</style>






