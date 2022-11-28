<script setup>
import Header from './Header.vue'
import Scroll from './Scroll.vue'

</script>
<template>
    <Header></Header>
    <router-view></router-view>
    <section class="index-section">
        <div class="main1">
            <div class="main-txt">
                <h1>
                    Hi. I'm Nana. <br>
                    A Front End Developer
                </h1>
                <p>I'm a front-end developer hope you guys like my products.</p>
            </div>
            <div class="main1-img">
                <div class="main1-img1">
                    <div class=" square square1"></div>
                    <div class="square square2"></div>
                    <div class="square square3"></div>
                    <div class="square square4"></div>
                    <div class="square square5"></div>
                </div>
            </div>
        </div>

        <div class="index-story">
            <div class="index-story1 index-hr">
                <h2>Have you ever bought home a “story”?</h2>
                <div class="text-home">
                    <p>"When the student is ready, the teacher will appear." <br>
                        Learning exists at all times and in all forms in this life. You just need to be open to
                        receiving it and thinking about it.
                    </p>
                </div>
                <div class="button-home bottom-span">
                    <router-link to="/book">
                        <span>ABOUT THAT</span>
                    </router-link>
                </div>
            </div>
        </div>


        <div class="index-khung" id="test">
            <div class="box">
                <div class="box-khung">
                    <div class="box-1 box1">
                        <a href="https://www.instagram.com/p/Chb8YZWvhvS/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f1"> </div>
                                    <div class="face back b1"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box2">
                        <a href="https://www.instagram.com/p/Chb9OGbPp9M/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f2"> </div>
                                    <div class="face back b2"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box3">
                        <a href="https://www.instagram.com/p/Chb-HKDvFgV/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f3"> </div>
                                    <div class="face back b3"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box4">
                        <a href="https://www.instagram.com/p/Chb-i7jvVeG/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f4"> </div>
                                    <div class="face back b4"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box5">
                        <a href="https://www.instagram.com/p/Chb-6DRPtj2/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f5"> </div>
                                    <div class="face back b5"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box6">
                        <a href="https://www.instagram.com/p/Chb_kGQPo2_/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f6"> </div>
                                    <div class="face back b6"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box7">
                        <a href="https://www.instagram.com/p/ChcAAaHvQLg/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f7"> </div>
                                    <div class="face back b7"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="box-1 box8">
                        <a href="https://www.instagram.com/p/ChcAYPUPBJn/" target="blank">
                            <div class="d-container">
                                <div class="card">
                                    <div class="face front f8"> </div>
                                    <div class="face back b8"></div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <div class="index-box">
            <div class="index-box11">
                <div class="index-box1 index-box111">
                    <li>
                        <div class="i-box1">
                            <img class="box-img1"
                                src="https://i.pinimg.com/564x/10/7d/37/107d370aac6dda9298fe8ebe86224fb4.jpg" alt="">
                        </div>
                        <router-link to="/tolanaday" class="box-a1" target="blank">
                            Tớ là Na đây
                        </router-link>
                    </li>
                </div>

                <div class="index-box1 index-box2">
                    <li>
                        <div class="i-box1">
                            <img class="box-img1"
                                src="https://i.pinimg.com/564x/ac/c3/69/acc369d30c04bf986921f436ef469314.jpg" alt="">
                        </div>
                        <router-link to="/nhacuana" class="box-a1" target="blank">
                            Nhà của Na
                        </router-link>
                    </li>
                </div>

                <div class="index-box1 index-box3">
                    <li>
                        <div class="i-box1">
                            <img class="box-img1"
                                src="https://i.pinimg.com/564x/91/ad/64/91ad64c9f6d8a56030d3e215252eba1f.jpg" alt="">
                        </div>
                        <router-link to="/vanconmay" class="box-a1" target="blank">
                            Vẫn còn mây
                        </router-link>
                    </li>
                </div>


            </div>
        </div>


        <div>
            <div class="main2">
                <div class="main22 ">
                    <router-link to="/book">
                        <div class="main11-img main-img">
                            <span>book<br>
                                <h2>Review book</h2>
                            </span>
                            <div class="main-read"><img src="/img/book1.PNG" alt=""></div>
                        </div>
                    </router-link>
                </div>

                <div class="main22">
                    <router-link to="/tale">
                        <div class="main3-img main-img">
                            <span>story <br>
                                <h2>Fairy tale</h2>
                            </span>
                            <div class="main-read"><img src="/img/book2.PNG" alt=""></div>

                        </div>
                    </router-link>
                </div>

                <div class="main22">
                    <router-link to="/music">
                        <div class="main5-img main-img">
                            <span>music <br>
                                <h2>Memory Music</h2>
                            </span>

                            <div class="main-music">
                                <video class="s-video" controls autoplay loop>
                                    <source src="../img/Hoa Hướng Dương - Facebook.mp4" type="video/mp4">
                                </video>
                            </div>

                        </div>
                    </router-link>
                </div>

                <div class="main22">
                    <a href="https://www.pinterest.com/giahana2610/" target="_blank">
                        <div class="main2-img main-img">
                            <span style="color:#ffeec4  ;"> img <br>
                                <h2>Photography</h2>
                            </span>
                            <div class="main-spotify">
                                <img src="https://i.pinimg.com/564x/1a/22/f0/1a22f0ffc897a6d63e307b5fac54673c.jpg"
                                    alt="">
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>


    <Scroll></Scroll>

</template>
<style scoped>
/* index */

.index-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 6vw;
    padding-right: 6vw;

}

.main1 {
    width: 100%;
    max-width: 1200px;
    margin: 100px auto 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding-top: 95px;
    color: #232320;
}

.main1-img1 {
    background-image: url(https://i.pinimg.com/564x/4f/a9/f4/4fa9f455f8709d2a6bc2936336996aa7.jpg);
    width: 23rem;
    height: 22rem;
    border-radius: 20px;
    position: relative;
    background-position: center;
    background-clip: calc();

}

.square {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    position: absolute;
    transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
    transform: scale3d(.6, .6, .6);
}

.square1 {
    left: -130px;
    top: -120px;
    background: linear-gradient(323.93deg, rgba(10, 185, 149, .7) -32.24%, rgba(10, 185, 149, 0) 57.93%), #dacdff;

}

.square2 {
    right: -130px;
    top: -120px;
    background: linear-gradient(331.16deg, #f8c6ff -19.15%, rgba(255, 196, 255, 0) 55.74%), #ffeec4;
}

.square3 {
    right: -130px;
    bottom: -120px;
    background: linear-gradient(180.1deg, #142c69 -59.06%, rgba(20, 44, 105, 0) 65.9%), #008081;
}

.square4 {
    left: -130px;
    bottom: -120px;
    background: linear-gradient(5.85deg, #dacdff -39.75%, rgba(218, 205, 255, 0) 61.37%), #ffeaee;
}

.square5 {
    left: -30px;
    bottom: -220px;
    background: #ffeec4;
}

.main2 {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    display: grid;
    margin-bottom: 30px;
    display: flex;
    margin-top: 10rem;
    flex-direction: column;

}

.main22 {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 50px;
}

.main22:hover {
    transform: translate3d(0, -7px, 0);
    box-shadow: 0 52px 74px rgb(0 0 0 / 12%);
    border-radius: 20px;
}

.main-read,
.main-music,
.main-spotify {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;
}

.main11-img img,
.main3-img img {
    width: 47rem;
    margin: 20px auto;
    border-radius: 15px;
}

.main-img {
    filter: drop-shadow(0 52px 74px rgba(0, 21, 64, .138559));
    transition: all .4s ease-in-out;
}

/* 
.main-img:hover,
.main-music:hover video {
    transform: translate3d(0, -10px, 0);
} */

.main-img span {
    position: absolute;
    float: right;
    right: 2em;
    top: 2em;
    text-align: right;
    line-height: 35px;
    z-index: 1;
}

.main-music video {
    width: 50%;
    margin: 20px auto;
    border-radius: 15px;
}

.main11-img,
.main2-img,
.main3-img,
.main4-img,
.main5-img,
.main6-img {
    height: 30rem;
    border-radius: 20px;
    position: relative;
    /*  */
}

.main11-img {
    background: linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #ffeec4;
}

.main3-img {
    background: linear-gradient(6.03deg, #dacdff .5%, rgba(218, 205, 255, 0) 46.89%), #ffeaee;
}

.main5-img {
    background: linear-gradient(39.4deg, #b6a0ea -2.55%, rgba(182, 160, 234, 0) 45.21%), #f1ebff;
}


.main2-img {
    background: linear-gradient(314.25deg, rgba(10, 185, 149, .7) 1.09%, rgba(10, 185, 149, 0) 43.26%), #dacdff;
}

.main-spotify {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
}

.main-spotify img {
    max-width: 570px !important;
    width: 80%;
    height: 20rem;
    position: absolute;
}



/* the end index-section */
/* index-story */

.index-story {
    font-family: 'Overlock', cursive;
    font-size: 1.2rem;
}

.index-story h2 {
    padding: 50px;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: #232320;
}

.text-home {
    text-align: center;
    font-size: 1.3rem;
    color: #262624;
}

.button-home {
    text-align: center;
    padding: 20px;
    width: 80%;
    margin: 10px auto 20px;
    font-weight: bold;
    font-family: 'Overlock', cursive;
}


/* thẻ a khi di vào */

.bottom-span a span,
.bottom-span a {
    position: relative;
    z-index: 10;
}

.bottom-span a {
    color: #232320;
    font-size: 18px;
    line-height: 32px;
    display: inline-block;
    transition: all .2s ease-in-out;
}

.bottom-span a:hover:before {
    height: 10px;
}

.bottom-span a:before {
    z-index: -1;
    content: "";
    width: 100%;
    position: absolute;
    bottom: 2px;
    height: 3px;
    left: 0;
    display: block;
    background: #ffc4ff;
    transition: all .2s ease-in-out;
    transform: rotate(-.5deg);

}

/* hr kẻ ngang */

.index-hr {
    padding-top: 30px;
    background: linear-gradient(to right, #F2CAB3 30%, #fefaf6 0%);
    background-position: top;
    background-size: 30px 2px;
    background-repeat: repeat-x;

}







/* background main */
/* A7D6E3 */

.index-story1 {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 20px;

}

/* the end index-story */

/* index-box */
.index-box {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
}

.index-box11 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;

}




.index-box1 li {
    position: relative;
    overflow: hidden;
}

.index-box1 li::before {
    right: 12px;
    bottom: 14px;
    border-right: 3px solid #F2CAB3;
    border-bottom: 3px solid #F2CAB3;
}

.index-box1 li::before,
.index-box1 li::after {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    z-index: 1;
    -webkit-transition: all ease 0.35s;
    -o-transition: all ease 0.35s;
    transition: all ease 0.35s;
    overflow: hidden;
}

.index-box1 li:hover::before,
.index-box1 li:hover::after {
    width: calc(100% - 12px);
    height: calc(100% - 19px);
}

.index-box1 li::after {
    left: 12px;
    top: 14px;
    border-left: 3px solid #F2CAB3;
    border-top: 3px solid #F2CAB3;
}


.i-box1,
.i-box1 a {
    display: block;
    text-decoration: none;
    font-size: 0.7777777778em;
    color: #333;
    text-align: center;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

.index-box1 li:hover img {
    transform: scale(1.2) rotate(5deg);
}

.i-box1 img {
    width: 100%;
    height: 466px;
    display: block;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;
}

.box-a1 {
    position: absolute;
    left: 50%;
    top: 55%;
    width: unset;
    white-space: nowrap;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #F2CAB3;
    color: #333;
    margin: auto;
    text-transform: none;
    padding: 13px 30px;
    z-index: 3;
}

.box-a1:hover {
    background-color: #ba6636;
    color: #333;
}

.box-a1::before {
    content: "";
    background-image: unset;
    background-color: #F2CAB3;
    /* background-color: rgba(var(--primary-color-rgb), 0.5); */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all ease 0.35s;
    -o-transition: all ease 0.35s;
    transition: all ease 0.35s;
    z-index: -1;

}

.box-a1:hover::before {
    transform: unset;
    background-color: #ba6636;
}

.box-a1::after {
    content: "";
    border: 1px solid #F2CAB3;
    background: none;
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    width: auto;
    height: auto;
    -webkit-transition: all ease 0.35s;
    -o-transition: all ease 0.35s;
    transition: all ease 0.35s;
}

.box-a1:hover::after {
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
    opacity: 0;
}








/* the end index-box */

/* index-khung */
.index-khung {
    text-align: center;
    margin: 100px auto;
    width: 100%;
    max-width: 1200px;

}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
}

.box-title {
    text-align: left;
    margin: 20px auto;
    margin-left: 30px;
}

.box-title a {
    text-decoration: none;
    color: #333;
}

.box-title a h2:hover {
    color: #009688;
}

.box-khung {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    text-align: center;
    margin: 30px auto;
}

.d-container-1 {
    perspective: 600px;

}

.card {
    /* border: 1px solid black; */
    width: 221px;
    height: 210px;
    position: relative;
    transform-style: preserve-3d;
    /* to tranform with 3d effect */
    animation: flip 3s linear 1;
    transition: transform 1s;
    border-radius: 10px;
}

.face {
    position: absolute;
    /* for stick 2 card side together */
    backface-visibility: hidden;
    /* hide back face when front face is face us */
    width: 220px;
    height: 210px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
}

.front {
    background-color: tomato;
    background-position: center;
    background-size: cover;
}

.back {
    background-color: lavender;
    transform: rotateY(180deg);
    /* to flip back */
    background-position: center;
    background-size: cover;
}

.f1 {
    /* background-color: tomato; */
    background-image: url(https://i.pinimg.com/564x/fe/e4/cd/fee4cd3b1ac360947901774e4510be24.jpg);
}

.b1 {
    background-image: url(https://i.pinimg.com/564x/1b/9b/69/1b9b699a11b4f423423d798a166cb811.jpg);
}

.b2 {
    background-image: url(https://i.pinimg.com/236x/4a/c2/1e/4ac21e81fa1956837fe532eb0587a626.jpg);
    /* background-image: url(https://i.pinimg.com/564x/6c/c9/b2/6cc9b2cfd09bb181904415ed65ff573e.jpg); */
}

.f2 {
    background-image: url(https://i.pinimg.com/564x/d8/3c/2b/d83c2b7d4ff6728c309c58f91a3e6b53.jpg);
}

.f3 {
    background-image: url(https://i.pinimg.com/564x/24/e3/86/24e3865bae575599aeecb07957b6852e.jpg);
}

.b3 {
    background-image: url(https://i.pinimg.com/564x/34/8d/0d/348d0d7660781d12f50356840b2e700b.jpg);
}

.f4 {
    background-image: url(https://i.pinimg.com/564x/d4/a4/7e/d4a47e14dc7c462c9afd44dd639115ea.jpg);
}

.b4 {
    background-image: url(https://i.pinimg.com/564x/97/f8/e3/97f8e328d27c0cdce449280b24ebcf90.jpg);
}

.f5 {
    background-image: url(https://i.pinimg.com/564x/2d/40/a3/2d40a3153e4f0e610d1fc646a98b8a42.jpg);
}

.b5 {
    background-image: url(https://i.pinimg.com/564x/67/21/c1/6721c14627a0d6179fdce6e4166dc0bc.jpg);
}

.f6 {
    background-image: url(https://i.pinimg.com/564x/bd/36/6c/bd366cad654fb6dee1fd885f2f18bf50.jpg);
}

.b6 {
    background-image: url(https://i.pinimg.com/236x/22/fd/0d/22fd0dbe4f96e9cd9bfc61a68f8e35cb.jpg);
}

.f7 {
    background-image: url(https://i.pinimg.com/564x/aa/79/8e/aa798e793425a29da1c60f3f25460973.jpg);
}

.b7 {
    background-image: url(https://i.pinimg.com/236x/4d/9d/34/4d9d340e1419eceb4534c94726a8973a.jpg);
}

.f8 {
    background-image: url(https://i.pinimg.com/564x/e6/78/eb/e678eb6f5941c6f758c56ecb70cd1fe8.jpg);
}

.b8 {
    background-image: url(https://i.pinimg.com/236x/43/99/44/4399449c9fbeafbada485ebb6d906b4d.jpg);
}

.card:hover {
    transform: rotateY(180deg);
}

@keyframes flip {

    30%,
    70% {
        transform: rotateY(0);
    }

    45%,
    55% {
        transform: rotateY(180deg);
    }
}

@media (max-width: 1023px) {
    .index-khung {
        display: none;
    }
}

@media (max-width: 1023px) {
    .footer-i div {
        margin: 10px;
    }

}

@media (max-width:900px) {
    .index-box3 {
        display: none;
    }

    .index-box11 {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .main1 {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        margin: 100px auto 100px;
    }

    .main1-img {
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .main1-img1 {
        width: 20rem;
        height: 20rem;
        background-size: cover;
    }




    footer {
        display: flex;
        flex-direction: column-reverse;
    }

    .in-me {
        width: 100%;
        max-width: 1200px;
        margin: 0px auto;
        padding-left: 40px;
    }

    .footer {
        margin: 10px auto 30px;
        padding-left: 30px;

    }
}

@media (max-width:700px) {

    .main1-img {
        margin-top: 50px;
        margin-bottom: 50px;
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .index-box111 {
        display: none;
    }

    .index-box11 {
        display: grid;
        grid-template-columns: 1fr;
    }

    .pl-icon-holder img {
        width: 40px;
        height: 40px;
    }

    .s-page-left {
        margin-top: 10px;
    }

    .s-page-right {
        padding: 0 0 1em 1em;
    }



    .footer {
        margin: 10px auto 30px;
        display: flex;
        padding-left: 0;

    }
}

@media (max-width:500px) {

    .main1-img {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .square {
        display: none;
    }

    .span-copy {
        display: flex;
        flex-direction: column;
    }

    .main1 {
        margin: 100px auto 50px;

    }


}

/* the end */
</style>