<template lang="pug">
body
  main
    .top-slideshow-wrapper
      ul#slideshow
        li
          img.topimg(src="../assets/img/top001.jpg" alt="top img1")
        li
          img.topimg(src="../assets/img/top002.jpg" alt="top img2")
        li
          img.topimg(src="../assets/img/top003.jpg" alt="top img3")
        li
          img.topimg(src="../assets/img/top005.jpg" alt="top img5")
  figcaption.title
    .main-title Unsiged2019
    .sub-text 
      | 2019.
      span.date 11.03
      |[sun]~
      span.date 04
      |[mon]
    .sub-text @koryosai
</template>

<script scoped>
export default {
  mounted: function() {
    window.addEventListener('load', function() {
      const slideshow = document.getElementById('slideshow');
      const slide = slideshow.querySelectorAll('li');
      [...slide].forEach(slide => {
        slide.style.backgroundImage = `url(${slide.getAttribute('src')})`
        slide.removeAttribute('src');
      });
      const totalNum = slide.length - 1;
      const fadeTime = 3000;
      const intarvalTime = 5000;
      let actNum = 0;
      let nowSlide;
      let nextSlide;

      slide[0].classList.add('show', 'zoom');

      setInterval(() => {
        nowSlide = slide[actNum];
        nextSlide = actNum < totalNum ? slide[++actNum] : slide[actNum = 0];

        nowSlide.classList.remove('show');
        nextSlide.classList.add('show', 'zoom');
        setTimeout(() => {
          nowSlide.classList.remove('zoom');
        }, fadeTime);

      }, intarvalTime);
    }
    )},
}

</script>

<style scoped>
main {
  margin: 0;
  max-width: none;
  width: 100%;
  background-color: #2f2f2f;
}

.top-slideshow-wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.top-slideshow-wrapper .top-logo {
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  margin: auto;
  max-width: 430px;
  right: 0;
  top: 65px;
  width: 83%;
}


.top-slideshow-wrapper #slideshow li {
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  display: block;
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  -webkit-transition: opacity 2s linear, -webkit-transform 7.5s linear;
  transition: opacity 2s linear, -webkit-transform 7.5s linear;
  -o-transition: opacity 2s linear, transform 7.5s linear;
  transition: opacity 2s linear, transform 7.5s linear;
  transition: opacity 2s linear, transform 7.5s linear, -webkit-transform 7.5s linear;
  will-change: opacity, transform;
}

.top-slideshow-wrapper #slideshow li.show {
  opacity: 0.25;
}

.top-slideshow-wrapper #slideshow li.zoom {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.topimg {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.title {
position: absolute;
top: 30%;
width: 100%;
color: #FFFFFF !important; 
}

.main-title { 
  font-size: 8vw;
  margin-bottom: 30px;
}

.sub-text {
  font-size: 2vw;
}

.date {
  font-size: 3vw;
}

@media screen and (max-width: 1024px) {
.main-title { 
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
.main-title { 
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