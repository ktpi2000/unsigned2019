<template lang="pug">
body
  .swiper-container
    swiper(:options="swiperOption")
      swiper-slide
        img(src="@/assets/img/top001.jpg" alt="top img1")
      swiper-slide
        img(src="@/assets/img/top002.jpg" alt="top img2")
      swiper-slide
        img(src="@/assets/img/top003.jpg" alt="top img3")
      swiper-slide
        img(src="@/assets/img/top004.jpg" alt="top img4")
      swiper-slide
        img(src="@/assets/img/top005.jpg" alt="top img5")
    .title
      .un-title Unsigned2019
      .sub-text 
        span.date 11.03
        |[sun]~
        span.date 04
        |[mon]
      .sub-text @koryosai
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },

  data: function() {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 2000,
        effect: 'fade',
        loop: true,
        simulateTouch: false,
      }
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-20%);
  z-index:2;
  color: #FFFFFF !important;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.un-title { 
  font-size: 8vw;
  margin-bottom: 30px;
}

.sub-text {
  font-size: 2vw;
}

.date {
  font-size: 3vw;
}

/*swiper*/
@keyframes zoomUp {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.swiper-slide-active img,
.swiper-slide-duplicate-active img,
.swiper-slide-prev img{
  animation: zoomUp 10s linear 0s 1 normal both;  
}

@media screen and (max-width: 1024px) {
.un-title { 
font-size: 12vw;
margin-bottom: 30px;
}

.sub-text {
font-size: 3vw;
}
.date {
  font-size: 5vw;
}
}

@media screen and (max-width: 480px) {
.un-title { 
  font-size: 14vw;
  margin-bottom: 30px;
}

.sub-text {
  font-size: 5vw;
}
.date {
  font-size: 8vw;
}
}
</style>