<template>
  <div class="typing-word">
    <h2>Blossom into who you were meant to be</h2>
  </div>
  <div class="home">
    <img src="https://i.postimg.cc/RhXMHs1v/image-122-removebg-preview.png">
  </div>
</template>

<script>
</script>
<style scoped>
.home img{
  display: grid;
  height: 100vh; 
}
.container{
  height: 100vh;
  display: grid;
  place-items: center;
}
.typing-word {
  width: 38ch;
  animation: typing 2s steps(40), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid;  */
  font-family:'Courier New', Courier, monospace;
  font-size: 2rem;
  color: whitesmoke; 
  margin-top: 10px;
  float: right;
}
.word{
  transform: translateY(-240%);
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
