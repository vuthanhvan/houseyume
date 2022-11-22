<script setup>

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav').addClass('black-m');
    } else {
        $('.nav').removeClass('black-m');
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
                <div class="music">
                    <div class="mu-txt">
                        Chúng ta rồi sẽ phải nói lời tạm biệt với những thứ không ở trong tầm tay...
                    </div>
                    <div class="mu-content">
                        <div class="video-youtube">
                            <iframe width="560" height="315" id="youtube"
                                src="https://www.youtube.com/embed/lCGBnGHjD1c" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="mu-txt1 ">
                        Chúng ta đều muốn nhận được sự cưng chiều trong tình yêu, nhận được "sự đối xử khác biệt" của
                        người mình thích. Đây không phải một cách nghĩ kỳ lạ, chính vì thế, đừng vì người không yêu bạn
                        mà hoài nghi chính mình, thay đổi bản thân. Người tốt như bạn, xứng đáng với người tốt hơn. Ngủ
                        ngon.
                    </div>
                </div>
            </div>


        </header>


        <section class="m-1">
            <div class="m-11">


            </div>
        </section>



        <div class="footer-g">
            <div class="s-continue">
                <div class="s-continue-left" style="margin-right: 40px;">
                    <router-link to="/tale" class="s-continue-link">
                        <span>Fairy tale</span>
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
                    <router-link to="/photography" class="s-continue-link">
                        <span>Photography</span>
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
    background: linear-gradient(.25deg, #b6a0ea -36.42%, rgba(182, 160, 234, 0) 59.25%), #f1ebff;
    height: 100vh;
    padding: 100px;
}

.main {
    margin: 0 auto;
    width: 100%;
    z-index: 99;
    position: fixed;
    background: #f1ebff;
}

.menu-nav {
    width: 100%;
    z-index: 10;
    position: relative;
}

.nav.black-m {
    background: #f1ebff;
    height: 4rem;
    padding: 10px 50px;
    z-index: 10;
    width: 100%;
    max-width: 1200px;
}



/* the header */

.music {
    padding-bottom: 31px;
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;
}

.mu-txt {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    font-size: 20px;
}

.mu-txt1 {
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 30px;
}

.mu-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}


@media (max-width:700px) {
    .footer-g {
        display: none;

    }
}
</style>