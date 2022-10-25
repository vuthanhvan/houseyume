<script setup>
import Header from '../../Header.vue';

</script>

<template>
    <Header></Header>
     <div class="photo">
        <div class="title-photo">
            <h2 class="animate__animated animate__bounceInDown ">MY EYES TO FIND THE BEAUTY IN MY LIFE.</h2>
        </div>
        <div class="photo-img">
            <div class="photo-img-title">
                 <div class="p-img p-img1"></div>
                 <div class="p-img p-img2"></div>
                 <div class="p-img p-img3"></div>
                 <div class="p-img p-img4"></div>
                 <div class="p-img p-img5"></div>
                 <div class="p-img p-img6"></div>
                 <div class="p-img p-img7"></div>
                 <div class="p-img p-img8"></div>
           </div>
        </div>

    <div class="blog-content">
        <div class="re-book">
                            <div class="re">
                                <div class="re-1 re1">
                                        <div class="re-img re-img-1"></div>
                                </div>

                                <div class="re-1 re2">
                                        <div class=" re-img re-img-2"></div>
                                </div>

                                <div class="re-1 re3">
                                        <div class="re-img re-img-3"></div>
                                </div>

                                <div class="re-1 re4">
                                        <div class="re-img re-img-4"></div>
                                </div>

                                <div class="re-1 re5">
                                        <div class="re-img re-img-5"></div>
                                </div>

                                <div class="re-1 re6">
                                        <div class="re-img re-img-6"></div>
                                </div>

                                <div class="re-1 re7">
                                        <div class="re-img re-img-7"></div>
                                </div>

                                <div class="re-1 re8">
                                        <div class="re-img re-img-9"></div>
                                </div>

                                <div class="re-1 re9">
                                        <div class="re-img re-img-8"></div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                
            </div>
           
</template>
<style scoped>
.photo {
    margin: 0px auto;
    max-width: 1200px;
    width: 100%;
}

.title-photo {
    display: flex;
    justify-content: center;
}

.photo-img{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}


.re {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr; */
    grid-gap: 30px;
    padding: 30px 50px;
    /* text-align: center; */
    margin: 0px auto;
    padding: 30px 50px;
    /* align-items: center;
    justify-content: center; */
}


.re-1 {
    background: #fff;
    display: inline-block;
    border: 0;
    position: relative;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
}

.re-1:hover {
    box-shadow: 0px 0px 150px #000000;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.2);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.5);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.2);
    transition: all 200ms ease-in;
    transform: scale(1.2);
    background-color: #EBC8AA;

}

.re-1:hover hr {
    display: none;
}

.re-1:hover a {
    color: #333;
    background-color: #ca986d;
}

.re-img {
    background-position: center;
    background-size: cover;
    /* height: 250px; */
    height: 200px;
}

.re-img-1 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/12/img_20210825_152726913.jpg?w=2000&h=1200&crop=1);
}

.re-img-2 {
    background-image: url(https://vanpicachu.files.wordpress.com/2022/02/img_20220218_133634313.jpg?w=2000&h=1200&crop=1);
}

.re-img-3 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/12/img_20211119_230344_695.webp?w=1263&h=758&crop=1&zoom=2);
}

.re-img-4 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/12/2021-10-08-22-27-47-096.jpg?w=2000&h=1200&crop=1);
}

.re-img-5 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/12/img_20211004_204157885.jpg?w=2000&h=1200&crop=1);
}

.re-img-6 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/07/img_20210710_175740225.jpg?w=2000&h=1200&crop=1);
}

.re-img-7 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/06/img_20210630_120009673.jpg?w=2000&h=1200&crop=1);
}

.re-img-8 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/03/picsart_03-10-10.49.27.jpg?w=2000&h=1200&crop=1);
}

.re-img-9 {
    background-image: url(https://vanpicachu.files.wordpress.com/2021/01/2020-12-30-12-58-24-171.jpg?w=2000&h=1200&crop=1);
}

.re-txt {
    margin: 20px 20px;

}

.re-txt h3 {
    margin: 25px auto 20px;
    font-size: 20px;
    text-align: center;
}

.re-1 a {
    text-decoration: none;
    color: #a36c3c;

}

.re-txt hr {
    margin: 10px auto;
    color: #333;
}

@media (max-width: 1023px) {
    .re {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-template-rows: 1fr 1fr;
    }

    .re3,
    .re4,
    .re5 {
        display: none;
    }

    .re-txt {
        margin: 0px 7px;
    }

}

@media (max-width: 700px) {
    .re {
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 1fr;
    }

    .re4,
    .re5,
    .re6,
    .re7,
    .re8,
    .re9 {
        display: none;
    }

    .re-txt {
        margin: 0px 7px;
    }


}


</style>