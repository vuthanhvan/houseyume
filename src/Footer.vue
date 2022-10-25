<script setup>

</script>
<template>
    <footer>
    <div class="in-me">
        <div class="copy-right">
            <span class="span-copy">
                © Copyright 2022 |
                <p class="bottom-span">
                    <router-link to="/home">
                        <span>&nbsp; Tớ là Na &nbsp; </span>
                    </router-link>
                </p>
                | Mỉm cười thì may mắn sẽ tới với bạn thôi !
            </span>
        </div>
    </div>
    <div class="footer">
        <div class="footer-i">
            <div>
                <a href="https://www.facebook.com/giahan269/" target="blank"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
            <div><a href=""><i class="fa-brands fa-twitter" target="blank"></i></a></div>
            <div><a href="https://www.instagram.com/yumevan/" target="blank"><i class="fa-brands fa-instagram-square"></i></a></div>

            <div><a href="https://viblo.asia/u/yume.me" target="blank"><i class="fa-brands ">
                        <img class="logo-v" src="https://images.viblo.asia/avatar/d3fbbb69-55f2-4530-99de-de866b71e9d8.png" alt="">
                    </i></a> </div>
        </div>
    </div>

</footer>
</template>
<style scoped>
/* footer */

footer {
    margin: 40px auto 0;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.footer {
    display: flex;
    width: 50%;
    max-width: 1200px;
    margin: 50px auto;

}

.footer-i {
    display: flex;

}

.footer-i i {
    padding: 0 20px;
    font-size: 20px;
}

.footer-end {
    line-height: 1.5rem;
    padding: 0 20px;
}

.footer-i div:hover {
    color: #945c2b;
    border: 2px solid #a36c3c;
}

.footer-i div {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    border: 1.5px solid rgba(236, 214, 173, 1);
    margin: 20px;
}

.footer-i a {
    color: rgba(199, 143, 40, 1);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-v {
    width: 30px;
    height: 30px;
}

.in-me {
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
}

.span-copy {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Overlock', cursive;
}

.span-copy .bottom-span a {
    font-size: 1rem;
    line-height: 20px;
}

.span-copy a span {
    color: #945c2b;
}
.copy-right{
    margin-left: 40px;
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


    /* the end footer */
</style>
