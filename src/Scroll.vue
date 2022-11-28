<script setup>
// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
var offset = 500;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 750;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);
        else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, duration);
    });
});
</script>
<template>
    <div title="Về đầu trang" id="top-up">
        <div class="btn">
            <div class="top-up-img"></div>
            <div class="btn-top-up"></div>
            <div class="btn-top-up"></div>
            <div class="btn-top-up"></div>
        </div>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
    </svg>

</template>
<style scoped>
/* scroll */
#top-up {
    font-size: 3rem;
    cursor: pointer;
    position: fixed;
    z-index: 9999;
    color: #004993;
    bottom: 70px;
    right: 70px;
    display: none;

}

#top-up:hover {
    color: #333
}

.top-up-img {
    background-image: url(/img/Yume-removebg-preview.png);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* border: 1px solid #8e490d; */
    background-position: center;
    background-size: 125px;
    z-index: 1;
}

#filter-svg {
    display: none;
}

.btn {
    border: none;
    outline: none;
    cursor: pointer;
    filter: url(#goo);
    position: relative;
}

.btn-top-up {
    border-radius: 50%;
    position: absolute;
    /* background-color: #ffc4ff; */
    transition: all 0.5s cubic-bezier(0.75, 0.32, 0, 0.93);
}

.btn .btn-top-up {
    z-index: -1;
}


.btn-top-up:nth-child(2) {
    width: 100px;
    height: 100px;
    top: calc(50% - 50px);
    right: calc(50% - 50px);
}

.btn-top-up:nth-child(3) {
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
}

.btn-top-up:nth-child(4) {
    width: 70px;
    height: 70px;
    top: calc(50% - 35px);
    right: calc(50% - 35px);
}

.btn:hover .btn-top-up:nth-child(2) {
    right: -50px;
    top: 70%;
    background: linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #FFE4CF;
}

.btn:hover .btn-top-up:nth-child(3) {
    left: -70px;
    background: linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #FFE4CF;
}

.btn:hover .btn-top-up:nth-child(4) {
    top: -60px;
    background: linear-gradient(338.83deg, #f8c6ff -3.41%, rgba(255, 196, 255, 0) 52.31%), #FFE4CF;
}

@media (max-width: 1023px) {
    #top-up {
        bottom: 40px;
        right: 35px;
        display: none;
    }

    .top-up-img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-position: center;
        background-size: 90px;
    }

}

/* the end scroll */
</style>
