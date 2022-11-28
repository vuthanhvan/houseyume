<script setup>
import Scroll from '../../Scroll.vue'
import Header from '../../Header.vue'
</script>
<template>
    <Header></Header>
    <router-view></router-view>



    <div>
        <div class="main-about">
            <div class="about-me">
                <p>about me</p>
            </div>
            <div class="about">
                <div class="text-about">

                    <div class="img-about">
                        <img src="https://i.pinimg.com/564x/10/7d/37/107d370aac6dda9298fe8ebe86224fb4.jpg" alt="">
                    </div>
                    <!-- https://i.pinimg.com/564x/b1/2b/fa/b12bfa5a65f7c51b637dbc3befd921b7.jpg -->
                    <div class="text-about-me">
                        <div class="about-me-p">
                            <div class="p-h2">
                                <div class="flip-animation">
                                    <span>Tớ</span><span>&nbsp; </span>
                                    <span>là</span> <span>&nbsp; </span>
                                    <span>Na</span><span> &nbsp;</span>
                                    <span>đây</span>
                                    <span>.</span>
                                </div>
                            </div>



                            <p>
                                Xin chào~~~~ <br> <br>
                                Tớ là Thanh Vân, Thanh trong thanh khiết, Vân trong mây trời, gọi là Na cũng được~ Vịt
                                cũng được
                                ạ ^^~~~ <br><br>

                                Thật ra tớ là cô gái rất thất thường, nhìn một chiếc lá rơi xuống tớ cũng có thể buồn cả
                                ngày
                                được. Nhìn dễ gần vậy đó nhưng tớ cực kì cực kì đơn độc, có những sở thích kỳ lạ **
                                Bạn tớ bảo mong tớ bớt làm nũng lại, hehe. <br>
                                <br>

                                À, nói hơi nhiều nhỉ ^^ <br><br>

                                Chỉ muốn nói là tớ dùng nơi này làm cung điện mây của mình vậy, ghi những điều tớ thấy
                                hay
                                , những người tớ yêu,
                                những cuốn sách tớ đọc và những cảm nhận chuyến đi tớ đã đi qua. <br>
                                <br>
                                Dù mệt mỏi hay nản lòng, mong bạn hãy tìm đến mây để chúng chở đi những nặng nề trong
                                bạn, theo
                                gió, bay đi. <br><br>

                                Có nhiều người yêu bạn , hơn là bạn đã tưởng đấy!
                            </p>
                        </div>
                    </div>
                </div>
                <!-- <div class="txt-note">
                <span>Note: </span>blog của tớ là song ngữ nha, mong các cậu có thể vui vẻ khi tới nơi này...
            </div> -->
            </div>
        </div>

    </div>


    <div class="connect">
        <div class="connect-el">
            <div>
                Hello, I'm Thanh Van, Thanh is pure, Van is in the clouds. Hope when you come to my small town, you will
                be yourself, cheerful and happy.
            </div> <br>
            <div class="connect-1">Connect: <br>
                ▸ tớ trên instagram | <a href=" https://www.instagram.com/yumevan/" target="_blank">Instagram</a> <br>
                ▸ tớ trên facebook | <a href="https://www.facebook.com/giahan269/" target="_blank">Facebook</a> <br>
                ▸ tớ trên youtube | <a href="https://www.youtube.com/channel/UCnYPD0HKGHyTYeh7sNy29lw"
                    target="_blank">Youtube</a> <br>
                <br>
                <div>
                    Contact for work: <br>
                    ▸ email | yumevu259@gmail.com
                </div> <br>
                <!-- <div>© Copyright by Yume. Do not Reup</div> -->
            </div>
        </div>
    </div>
    <div class="contact">
        <div class="container-thu">
            <a class="envelop-thu" href="https://www.facebook.com/giahan269/" target="blank">
                <div class="heart-thu"> </div>
            </a>
        </div>
    </div>




    <Scroll></Scroll>

</template>
<style scoped>
/* tớ là na đây */
.main-about {
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 1.2rem;
}

.about-me>p,
.contact-me {
    display: inline-block;
    padding: 15px 25px;
    margin-top: 20px;
    margin-left: 80px;
    font-size: 25px;
    letter-spacing: 7px;
    background: linear-gradient(350deg, #f8c6ff -6%, rgba(255, 196, 255, 0) 60%), #ffeec4;
    border-radius: 10px;
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 1.2rem;
}

.text-about {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 30px;
    gap: 20px;
}


.img-about {
    display: flex;
    margin: 10px 40px;
}

.img-about img {
    border-radius: 5px;
    width: 400px;
    height: 500px;
    box-shadow: 0 52px 74px rgb(0 21 64 / 14%);
}

.text-about-me {
    display: flex;
    line-height: 30px;

}

.about-me-p {
    width: 100%;
}

/* title tớ là na đây animation */
.about-me-p .p-h2 {
    font-size: 30px;
    border: 4px double #ebc8aa;
    padding: 10px 15px;
    text-align: center;
    margin: 0 40px;
}

.flip-animation {
    display: flex;
    justify-content: center;
    transform: translate3d(0, 0, 0);
}

.flip-animation>span {
    font-size: 3rem;
    color: #333;
    animation: flipping 2s infinite;
}

.flip-animation>span:nth-child(1) {
    animation-delay: 0.2s;
}

.flip-animation>span:nth-child(2) {
    animation-delay: 0.4s;
}

.flip-animation>span:nth-child(3) {
    animation-delay: 0.6s;
}

.flip-animation>span:nth-child(4) {
    animation-delay: 0.8s;
}

.flip-animation>span:nth-child(5) {
    animation-delay: 1s;
}

.flip-animation>span:nth-child(6) {
    animation-delay: 1.2s;
}

.flip-animation>span:nth-child(7) {
    animation-delay: 1.4s;
}

.flip-animation>span:nth-child(8) {
    animation-delay: 1.6s;
}

@keyframes flipping {

    0%,
    80% {
        transform: rotateY(360deg);
    }
}

/* the end animation */



.about-me-p>p {
    margin: 20px;
}

.border-send {
    width: 100%;
    min-width: 500px;
}

.send-1 {
    background-color: rgb(250, 249, 249);
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
}

.send {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px 50px;
    text-align: center;
    grid-gap: 30px;
    padding: 50px 50px 30px;

}

.send-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 200%;
}

#name,
#email {
    min-width: 10%;
}

#message {
    grid-column-start: 1;
    grid-column-end: 3;
}

#name,
#email,
#message {
    padding: 3px;
    outline: none !important;
    border: none;
    border-bottom: 1px solid #222;
    background-color: rgb(250, 249, 249);
}

.btn-send {
    text-align: center;
    width: 100%;
    padding: 10px;

}

.btn-send button {
    width: 100px;
    padding: 10px;
    border: none;
    background-color: rgb(250, 249, 249);
}

.btn-send button:hover {
    transition-duration: 0.4s;
    color: #a36c3c;
}

.txt-note {
    margin-left: 50px;
}

.connect {
    margin: 30px auto;
    width: 1200px;
    max-width: 100%;
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 1.2rem;
}

.connect-el {
    margin-left: 40px;
}

.connect-1 {
    font-size: 15px;
}

.connect-1 a:hover {
    transition-duration: 0.4s;
    color: #a36c3c;
    font-size: 20px;
}

.contact {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
}

@media (max-width: 1023px) {

    .img-about img {
        width: 300px !important;
    }

    .img-about {
        display: flex;
        margin: 10px;
        padding: 0;
    }

    .about {
        display: block;
        text-align: center;
    }

    .text-about {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
    }


    .about-me-p,
    .txt-note {
        text-align: left;
    }

    .about-me-p h2 {
        width: 100%;
        margin: 10px auto;
    }

    .border-send {
        width: 100%;
        margin: 10px auto;
    }

    .send {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0px 50px;
        text-align: center;
        padding: 50px 50px 30px;
        background-color: rgb(250, 249, 249);

        margin: 20px;
    }

    .send-input {
        grid-template-columns: 1fr;
        max-width: 100%;
    }

    #message {
        max-width: 80%;
    }

}

@media (max-width: 523px) {
    .contact {
        display: none;
    }

}

@media (max-width: 800px) {

    /* .text-about-me */
    .main-about {
        background: white url(https://i.pinimg.com/564x/10/7d/37/107d370aac6dda9298fe8ebe86224fb4.jpg);
        background-size: cover;
        background-position: bottom;
    }

    .img-about {
        display: none;
    }
}

/* the end tớ là na đây */
/* thư */
.container-thu {
    padding: 20px;
    display: flex;
    justify-content: center;
}

.envelop-thu {
    width: 300px;
    height: 200px;
    box-sizing: border-box;
    border-color: grey;
    border-style: solid;
    border-top: 100px solid #F4F9F9;
    border-right: 150px solid #CCF2F4;
    border-bottom: 100px solid #A4EBF3;
    border-left: 150px solid #A4EBF3;
}

.heart-thu {
    background-color: #F05454;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%) rotate(45deg);
    position: relative;
    animation: heart-beat 0.8s infinite;
}

.heart-thu:before,
.heart-thu:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.heart-thu:before {
    background-color: #F05454;
    left: -50%;
}

.heart-thu:after {
    background-color: #F05454;
    top: -50%;
}

@keyframes heart-beat {
    0% {
        scale: 1;
    }

    30% {
        scale: 0.8;
    }
}

/*  the end thư */
</style>
