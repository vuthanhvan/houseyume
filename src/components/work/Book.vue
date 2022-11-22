<script setup>

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav').addClass('black-g');
    } else {
        $('.nav').removeClass('black-g');
    }
})
</script>
<template>
    <div class="body-book">
        <header>
            <div class="main">
                <div class="menu">
                    <ul class="nav menu-nav">
                        <li class="menu-word">
                            <ul class="menu-ul1">
                                <li class="span11">
                                    <a href="#"> <span class="span1 ">Work</span> </a>
                                    <ul class="ul-word ul-word1">
                                        <li>
                                            <router-link to="/book"> <span class="span1">Review Books</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/tale"> <span>Fairy tale</span> </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/music"> <span class="span1">Memory Music</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/photography"> <span>Photography</span> </router-link>
                                        </li>

                                        <li> <a href="https://www.pinterest.com/giahana2610/" target="blank">
                                                <span>Pinterest</span> </a></li>
                                        <li> <a href="https://open.spotify.com/playlist/1daVgwA7S2ycuDyO00HMl5"
                                                target="blank"> <span class="span1">Podcast</span> </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/tolanaday"> <span>Tớ là Na đây</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/nhacuana"> <span class="span1">Nhà của Na</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/vanconmay"><span> Vẫn còn Mây</span></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="img-logo">
                            <router-link to="/home"><img
                                    src="https://i.pinimg.com/564x/cc/45/7a/cc457a64a2114001ea750906c623fdf2.jpg"
                                    alt=""></router-link>
                        </li>
                        <li class="social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/giahan269/" target="blank">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://web.telegram.org/k/" target="blank"> <i
                                            class="far fa-paper-plane"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header">
                <div class="le-title">
                    <h2>XIN CHÀO NGÀY MỚI</h2>
                    <br>
                    <p>Lời hỏi thăm dành cho những điều nhỏ nhoi, bình dị</p>
                </div>

                <div class="wrapper">
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                    <div><span class="dot"></span></div>
                </div>

                <div class="le-content">
                    <div class="le-1">
                        <div class="lea-1">
                            <a href="">
                                <div class=" lea-img lea-img-1"></div>
                            </a>
                        </div>
                        <div class="lea-1">
                            <a href="">
                                <div class=" lea-img lea-img-2"></div>
                            </a>
                        </div>
                        <div class="lea-1">
                            <a href="">
                                <div class=" lea-img lea-img-3"></div>
                            </a>
                        </div>
                        <div class="lea-1">
                            <a href="">
                                <div class=" lea-img lea-img-4"></div>
                            </a>
                        </div>
                        <div class="lea-1-txt">
                            <h2>Knowledge </h2>
                            <hr>
                            <p>Love books, it is a source of knowledge, only knowledge is the way of life</p>
                        </div>
                        <div class="lea-1">
                            <a href="">
                                <div class=" lea-img lea-img-6"></div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </header>


        <section class="g-1 body-book">
            <div class="book">
                <div class="book-khung">
                    <div class="book-content">
                        <div class="book-img-1"></div>
                        <div class="book-text">
                            <h2>Didn’t Love – and What to Read Instead</h2>
                            “Em hãy đọc sách mình thích, làm việc mình muốn, kết bạn với người mình yêu quý và trở thành
                            người mình muốn trở thành… <br>
                            Như vậy gọi là tận hưởng cuộc sống”.
                            <br> ...
                            <div class="book-a"><a href="">you’ll also love</a></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>



        <div class="footer-g">
            <div class="s-continue">
                <div class="s-continue-left" style="margin-right: 40px;">
                    <router-link to="/home" class="s-continue-link">
                        <span>My blog</span>
                        <div class="s-continue-arrow">
                            <svg width="138" height="137" viewBox="0 0 138 137" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M136.713 55.6265C134.295 34.9115 119.392 18.0431 100.99 9.34813C75.0385 -2.91687 45.9518 -0.581871 18.2351 2.3048C13.6335 2.7848 13.5851 10.0498 18.2351 9.56646C45.5118 6.7248 75.2368 3.79646 100.423 17.1581C122.443 28.8415 137.793 55.3598 125.153 79.3981C105.242 117.271 51.9251 119.826 19.5618 97.1765C30.4418 99.9665 41.8735 100.041 53.1351 97.2915C57.6718 96.1831 55.7501 89.1798 51.2051 90.2898C35.4751 94.1315 19.5001 91.7748 5.51181 83.6331C2.89681 82.1115 -0.86152 84.6598 0.17848 87.7331C5.66181 103.936 12.6185 119.513 21.0601 134.393C23.3651 138.458 29.6418 134.803 27.3301 130.728C21.9651 121.273 17.2301 111.545 13.1001 101.54C40.0435 122.261 79.8468 125.351 108.863 106.688C126.133 95.5815 139.195 76.8815 136.713 55.6265Z"
                                    fill="#FFC4FF"></path>
                            </svg>
                        </div>
                    </router-link>
                </div>
                <div class="s-continue-left">
                    <router-link to="/tale" class="s-continue-link">
                        <span>Fairy tale</span>
                        <div class="s-continue-arrow-1">
                            <svg width="321" height="324" viewBox="0 0 321 324" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M316.615 119.149C315.667 118.237 314.283 117.92 312.815 118.907C312.502 119.118 312.185 119.33 311.872 119.542C294.917 125.859 277.367 130.152 259.424 132.512C254.787 133.122 256.424 140.198 261.028 139.595C271.017 138.282 280.847 136.334 290.529 133.812C248.438 161.53 201.94 188.275 151.131 188.759C137.88 188.886 124.124 186.25 113.694 178.11C121.576 171.757 128.719 164.445 134.516 156.257C142.931 144.373 143.584 127.591 126.929 122.895C113.546 119.12 100.688 128.501 95.531 140.435C90.0189 153.187 93.7929 167.231 102.515 177.437C100.103 179.133 97.644 180.757 95.1274 182.269C68.6654 198.15 36.659 204.058 6.41203 197.515C1.88122 196.535 -0.274038 203.476 4.30884 204.467C36.3742 211.404 70.3419 205.598 98.4751 188.714C101.621 186.826 104.714 184.793 107.73 182.636C134.151 205.167 177.331 195.577 207.011 185.415C235.943 175.51 262.497 160.369 288.154 143.884C284.27 148.458 280.566 153.196 277.07 158.119C274.363 161.932 280.513 165.794 283.212 161.993C293.055 148.132 304.522 135.79 317.559 124.884C319.91 122.91 318.74 120.188 316.615 119.149ZM107.615 172.266C98.2313 161.073 97.0488 143.904 108.999 133.942C114.677 129.206 123.34 127.356 129.664 132.111C138.287 138.599 130.787 149.509 125.856 155.67C120.719 162.089 114.791 167.913 108.342 173.067C108.102 172.797 107.85 172.546 107.615 172.266Z"
                                    fill="#FFC4FF"></path>
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>




</template>

<style scoped>
/* header */

.header {
    background: linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #ffeec4;
    height: 100vh;
    padding: 100px;
}

.main {
    margin: 0 auto;
    width: 100%;
    z-index: 99;
    background: #ffeec4;
    position: fixed;

}

.menu-nav {
    /* background: #ffeec4; */
    width: 100%;
    z-index: 10;
    position: relative;
}

.nav.black-g {
    background: #ffeec4;
    height: 4rem;
    padding: 10px 50px;
    z-index: 10;
    width: 100%;
    max-width: 1200px;
}

/* .mu {
    padding-bottom: 31px;
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;
} */


/* animation vòng tròn */
.wrapper div {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: ani 4s linear infinite;
    /* background: linear-gradient(180deg,#04fafd 5%,#119dff 50%,#030423); */
    border-color: #A36C3C;


}

div .dot {
    height: 10px;
    width: 10px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 20%;
    right: 20%;
}

.wrapper div:nth-child(1) {
    top: 20%;
    left: 20%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(2) {
    top: 60%;
    left: 80%;
    animation: ani 10s linear infinite;
}

.wrapper div:nth-child(3) {
    top: 20%;
    left: 20%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(4) {
    top: 40%;
    left: 40%;
    animation: ani 5s linear infinite;
}

.wrapper div:nth-child(5) {
    top: 70%;
    left: 20%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(6) {
    top: 20%;
    left: 30%;
    animation: ani 2s linear infinite;
}

.wrapper div:nth-child(7) {
    top: 60%;
    left: 50%;
    animation: ani 11s linear infinite;
}

.wrapper div:nth-child(8) {
    top: 20%;
    left: 90%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(9) {
    top: 90%;
    left: 90%;
    animation: ani 11s linear infinite;
}

.wrapper div:nth-child(10) {
    top: 70%;
    left: 90%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(11) {
    top: 20%;
    left: 60%;
    animation: ani 6s linear infinite;
}

.wrapper div:nth-child(12) {
    top: 60%;
    left: 20%;
    animation: ani 11s linear infinite;
}

.wrapper div:nth-child(13) {
    top: 10%;
    left: 90%;
    animation: ani 8s linear infinite;
}

.wrapper div:nth-child(14) {
    top: 70%;
    left: 70%;
    animation: ani 5s linear infinite;
}

.wrapper div:nth-child(15) {
    top: 10%;
    left: 10%;
    animation: ani 8s linear infinite;
}

@keyframes ani {
    0% {
        transform: scale(0) translateY(0) rotate(70deg);

    }

    100% {
        transform: scale(1.3) translateY(-100px) rotate(36deg);

    }
}


.le-title {
    text-align: center;
    margin: 50px auto 30px;
}

.le-content {
    width: 85%;
    margin: 50px auto;
}

.le-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.lea-img {
    background-position: center;
    background-size: cover;
    height: 230px;
    margin: 20px;
}

.lea-img-1 {
    background-image: url(https://i.pinimg.com/564x/3b/3a/aa/3b3aaadd0657616f9e97e13f605835e9.jpg);
}

.lea-img-2 {
    background-image: url(https://i.pinimg.com/564x/61/f6/52/61f6523ac59e139cc22ec36284c00b25.jpg);
}

.lea-img-3 {
    background-image: url(https://i.pinimg.com/564x/02/26/b1/0226b11d1ea36299a781d4da5809e76c.jpg);
}

.lea-img-4 {
    background-image: url(https://i.pinimg.com/736x/80/2b/42/802b421d730140dbeb1a3569498ef6cc.jpg);
}

.lea-img-6 {
    background-image: url(https://i.pinimg.com/564x/e1/ca/35/e1ca357fd9e9ffc16d7a4bcee287f71e.jpg);
}

.lea-1-txt {

    text-align: center;
}

.lea-1-txt h2 {
    margin: 50px 0 40px;
    line-height: 1.5;
}

.lea-1-txt p {
    margin: 20px;
    line-height: 1.5;
}


/* the end header */

/* section */
.book {
    margin: 0px auto;
    width: 100%;
    max-width: 1200px;
}

.book-khung {
    display: flex;
    justify-content: space-evenly;
    margin: 30px;
}

.book-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    border-radius: 20px;
    border: 5px solid rgb(12, 139, 212);
    margin-top: 50px;
}

.book-img-1 {
    background-image: url(https://i.pinimg.com/564x/3b/3a/aa/3b3aaadd0657616f9e97e13f605835e9.jpg);
    height: 400px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
}

.book-text {
    margin: 40px;
    font-size: 20px;
}

.book-text h2 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 15px;
}

.book-a {
    text-align: center;
}

.book-a a {
    text-decoration: none;
    padding: 10px;
    border-bottom: 1px solid #222;
}

.book-a a:hover {
    border: none;
    border-bottom: 2px solid #745D49;
    background-color: #fff;
    color: #745D49;
}




@media (max-width:700px) {
    .footer-g {
        display: none;

    }




    .book-content {
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        padding: 25px;
    }


}
</style>