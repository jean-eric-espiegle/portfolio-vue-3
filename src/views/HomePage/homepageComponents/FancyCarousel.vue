<template>
  <div class="carousel-container">
    <button class="up-btn" @click="up()"><div class="up arrow"></div></button>
      <img id="sq-1" class="top-image" src="./carouselImages/image3.jpeg" alt="">
      <p id="d-1" class="desc">project 1</p>
      <img id="sq-2" class="mid-image" src="./carouselImages/image1.jpeg" alt="">
      <p id="d-2" class="desc">project 2</p>
      <img id="sq-3" class="bot-image" src="./carouselImages/image2.jpeg" alt="">
      <p id="d-3" class="desc">project 3</p>
      <button class="dn-btn" @click="down()"><div class="down arrow"></div></button>
  </div>
</template>

<script>
export default{
  name:"FancyCarousel",
  data(){
    return {
      images:[
        ['image1.jpeg',1],
        ['image2.jpeg',2],
        ['image3.jpeg',3]
      ]
    }
  },
  methods:{
    up(){
      let square1 = document.getElementById('sq-1');
      let desc1 = document.getElementById('d-1')
      let square2 = document.getElementById('sq-2');
      let desc2 = document.getElementById('d-2')
      let square3 = document.getElementById('sq-3');
      let desc3 = document.getElementById('d-3')

      let leftover = square1.src;
      let leftoverTxt = desc1.innerText;

      square1.src = square2.src;
      desc1.innerText = desc2.innerText;
      square2.src = square3.src;
      desc2.innerText = desc3.innerText;
      square3.src = leftover;
      desc3.innerText = leftoverTxt;
    },
    down(){
      let square1 = document.getElementById('sq-1');
      let desc1 = document.getElementById('d-1')
      let square2 = document.getElementById('sq-2');
      let desc2 = document.getElementById('d-2')
      let square3 = document.getElementById('sq-3');
      let desc3 = document.getElementById('d-3')

      let leftover = square3.src;
      let leftoverTxt = desc3.innerText;

      square3.src = square2.src;
      desc3.innerText = desc2.innerText;

      square2.src = square1.src;
      desc2.innerText = desc1.innerText;

      square1.src = leftover;
      desc1.innerText = leftoverTxt;
    }
  }
}
</script>

<style scoped>
.carousel-container{
  margin-left: 0.5%;
  width: 15%;
  margin-top: 2.5%;;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5%;
  background: linear-gradient(to bottom,#3b322c00,12.5%,#94948E,87.5%,#3b322c00);
}

.carousel-container img{
  position: relative;
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  height: 20%;
}

.carousel-container .img img{
  width: 100%;
  height: 100%;
}

.mid-image{
  transform: scale(0.95);
  filter: drop-shadow(5px 5px 5px black);
}
.top-image{
  transform: scale(0.85);
}

.bot-image{
  transform: scale(0.85);
}
.carousel-container .up-btn{
  padding: 10px;
  width: 100%;
  background-color: #3b322c00;
  border: none;
  height: 5%;
}

.carousel-container .dn-btn{
  border: none;
  padding: 10px;
  width: 100%;
  height: 5%;
  background-color: #3b322c00;
}

.arrow{
  border: solid #B9A79F;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.up:hover{
  transform: rotate(-135deg) scale(1.5);
  -webkit-transform: rotate(-135deg) scale(1.5);
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down:hover{
  transform: rotate(45deg) scale(1.5);
  -webkit-transform: rotate(45deg) scale(1.5);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.desc{
  height: 5%;
  text-align: center;
  margin-top: -5%;
}
</style>