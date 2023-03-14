<template>
    <div class="contact-info">
        <h1><span>C</span>ontact <span>U</span>s</h1>   
    </div>
    <section class="container">
        <div class="info">
            <div class="address">
                <i class="fa fa-map-marker" aria-hidden="true" ></i>
                <h4>Location:</h4>
                <p>6 Skepe Square,Factreton Avenue</p>
            </div>
            <div class="email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h4>Email:</h4>
                <p>blossombee12@gmail.com</p>
            </div>
            <div class="call">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <h4>Call:</h4>
                <p>+27 21 764 2309</p>
            </div>
        </div>
            <div class="form">
                <form>
                    <div class="input-box">
                        <label for="text">First Name</label>
                        <input type="text" name="name" placeholder="Your Name" required>
                        <div class="input-box">
                            <label for="text">Last Name</label>
                            <input type="text" name="name" placeholder="Your Surname" required>   
                        </div>
                        <div class="input-box">
                            <label for="text">Your Email</label>
                            <input type="email" name="email" placeholder="Your Email" required>                           
                        </div>
                        <div class="box">
                            <label for="text">Message</label>
                            <textarea></textarea>
                        </div>
                        <div class="click"><button type="submit">Send Message</button></div>
                    </div>
                </form>
            </div>
    </section>
</template>
<style scoped>
.contact-info span{
    color: blueviolet;
    margin-top: 50px;  
}
.contact-info{
    color: rgb(251, 246, 246);
    margin-top: 50px;
}
.container{
  display: flex;
  justify-content: space-between;
}
.info{
    padding: 30px;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.12);
} 
 .info i{
    font-size: 20px;
    color: #0d0d0e;
    float: left;
    width: 44px;
    height: 44px;
    background: #dff3fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: all 0.3s ease-in-out;
}
.form{
    padding: 30px;
    width: 800px;
    height: 640px;
    border-radius: 5px;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.12);
}
.input-box label{
    float: left;
    margin-top: 50px;
    font-size: 20px;
    color: black;
    font-family: monospace;
}
.input-box input{
    height: 70px;
    width: 400px;
    margin-top: 35px;
    border-radius: 4px;
}
.box textarea{
    margin-top: 60px;
    width: 500px;
    height: 150px;
    border-radius: 5px;
}
.click button{
   background-color: blueviolet;
   height: 50px;
   width: 170px;
   margin-top: 10px;
   border-radius: 20px;
   justify-content: center;
}
.click button [type="submit"]:hover{
    background: white;
}
.address, .email, h4 p{
    color: black;
}
.call, h4 p{
    color: black;
}
</style>