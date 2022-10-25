<script setup>
import Header from '../../Header.vue'
</script>
<template>
  <Header></Header> 
<router-view></router-view>

<div class="la">
    <img class="leaf" src="../../../public/img/leaf-spring-plant-ecology-green-512.webp"/>
    <img class="leaf" src="../../../public/img/leaf-spring-plant-ecology-green-512.webp"/>
    <img class="leaf" src="../../../public/img/leaf-spring-plant-ecology-green-512.webp"/>

</div>

        <div class="vanconmay">
            <div class="isometriccontainer isome">
        <div class="isometric isometric-col-1">
            <div class="isometric-item isometric-item1"></div>
            <div class="isometric-item isometric-item2"></div>
            <div class="isometric-item isometric-item3"></div>
        </div>
        <div class="isometric isometric-col-2">
            <div class="isometric-item isometric-item4"></div>
            <div class="isometric-item isometric-item5"></div>
            <div class="isometric-item isometric-item6"></div>
        </div>
        <div class="isometric isometric-col-3">
            <div class="isometric-item isometric-item7"></div>
            <div class="isometric-item isometric-item8"></div>
            <div class="isometric-item isometric-item9"></div>
        </div>
        <div class="isometric isometric-col-4">
            <div class="isometric-item isometric-item10"></div>
            <div class="isometric-item isometric-item11"></div>
            <div class="isometric-item isometric-item12"></div>
        </div>
    </div>
        </div>

        <div class="vanconmay vanmay1">
            <div class="isometriccontainer">
        <div class="isometric isometric-col-5">
            <div class="isometric-item isometric-item1"></div>
            <div class="isometric-item isometric-item2"></div>
            <div class="isometric-item isometric-item3"></div>
        </div>
        <div class="isometric isometric-col-6">
            <div class="isometric-item isometric-item4"></div>
            <div class="isometric-item isometric-item5"></div>
            <div class="isometric-item isometric-item6"></div>
        </div>
        <div class="isometric isometric-col-7">
            <div class="isometric-item isometric-item7"></div>
            <div class="isometric-item isometric-item8"></div>
            <div class="isometric-item isometric-item9"></div>
        </div>
        <div class="isometric isometric-col-8">
            <div class="isometric-item isometric-item10"></div>
            <div class="isometric-item isometric-item11"></div>
            <div class="isometric-item isometric-item12"></div>
        </div>
    </div>
        </div>



</template>
<style scoped>

/* lá */
.leaf {
  width: 50px;
  position: fixed;
}
.leaf:nth-child(1) {
  bottom: 5%;
  left: -10%;
  animation: blowing 12s 1s linear infinite;
}
.leaf:nth-child(2) {
  bottom: 10vh;
  left: -10%;
  animation: blowing 6s linear infinite;
}
.leaf:nth-child(3) {
  bottom: 0vh;
  left: -10%;
  animation: blowing 9s 3s linear infinite;
}
@keyframes blowing {
  0% {
    transform: translate(0,0) rotate(0)
  }
  20% {
    transform: translate(15vw, -10vh) rotate(170deg)
  }
  65% {
    transform: translate(55vw, -12vh) rotate(550deg)
  }
  80% {
    transform: translate(70vw, -17vh) rotate(740deg)
  }
  100% {
    transform: translate(100vw, -25vh) rotate(920deg)
  }
}




/* ảnh */
.vanconmay{
    height: 50vh;
}
.isometriccontainer {
    opacity: 1;
   
    left: 10%;
    top: 5%;
    display: block;
    width: 1050px;
    margin-right: auto;
    margin-left: auto;
    transform-style: preserve-3d;
    transition: opacity 2000ms cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 2000ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
}
.isome{
    position: absolute;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
}

.isometric, .isometric-item {
    transform-style: preserve-3d;
}
.isometric {
    float: left;
    transition: transform 2000ms linear 0s;
}
.isometric-col-1 {
    transform: translateX(0px) translateY(-17.5%) translateZ(0px);
}
.isometric-col-2 {
    transform: translateX(0px) translateY(-35%) translateZ(0px);
}
.isometric-col-3 {
    transform: translateX(0px) translateY(-17.5%) translateZ(0px);
}
.isometric-item {
    width: 130px;
    height: 130px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #2974c2;
    border-radius: 3px;
    box-shadow: -5px 7px 0 0 #ffffff1a;
    transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
    background-position: center;
    background-size: cover;
}
.isometric-item:hover {
    box-shadow: 0px 0px 0 0 #ffffff1a;
    transform: rotateX(-90deg) translate3d(0px, -50px, 10px);
}


.isometric-item1{
    background-image: url(https://i.pinimg.com/736x/5e/9b/58/5e9b58d7864146e7b0e38759726e6794.jpg);
}
.isometric-item2{
    background-image: url(https://i.pinimg.com/564x/48/5a/1b/485a1bd430d1b80ac7ffb2f0494810dc.jpg); 
}
.isometric-item3{
    background-image: url(https://i.pinimg.com/564x/f6/86/5d/f6865de24d19961485c9ce3a3a1409fb.jpg); 
}
.isometric-item4{
    background-image: url(https://i.pinimg.com/564x/a8/45/b4/a845b401a6901dfb312d13cf25fa28df.jpg); 
}
.isometric-item5{
    background-image: url(https://i.pinimg.com/736x/62/e7/c9/62e7c9c10747ae9de6b30ec5a470ce4c.jpg); 
    background-position: bottom;
}
.isometric-item6{
    background-image: url(https://i.pinimg.com/236x/98/e7/72/98e77279cde293d7a89c1d0e33f2172b.jpg); 
}
.isometric-item7{
    background-image: url(https://i.pinimg.com/236x/3e/7f/79/3e7f797d7a192a63c1b732b10b221a76.jpg); 
}
.isometric-item8{
    background-image: url(https://i.pinimg.com/564x/de/16/cf/de16cf0f7929afe6e6b19cd44619fd71.jpg); 
}
.isometric-item9{
    background-image: url(https://i.pinimg.com/236x/6a/f6/86/6af68687f0a7d74645ed000ba490e4b5.jpg); 
}
.isometric-item10{
    background-image: url(https://i.pinimg.com/236x/4f/a9/f4/4fa9f455f8709d2a6bc2936336996aa7.jpg); 
}
.isometric-item11{
    background-image: url(https://i.pinimg.com/236x/76/c1/45/76c1457cb7862fafc9722a731ddfe6fb.jpg); 
}
.isometric-item12{
    background-image: url(https://i.pinimg.com/236x/64/48/21/644821cd27851e8c3cee0189bed230a6.jpg); 
}

/*  the end ảnh */


.isometric-col-5 {
    transform: translateX(0px) translateY(17.5%) translateZ(0px);
}
.isometric-col-6 {
    transform: translateX(0px) translateY(35%) translateZ(0px);
}
.isometric-col-7 {
    transform: translateX(0px) translateY(17.5%) translateZ(0px);
}


@media (max-width: 900px){
.vanmay1{
    display: none;
}
}


</style>