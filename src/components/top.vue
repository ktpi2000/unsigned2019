<template>
<main>
    <div class="top-slideshow-wrapper">
      <ul id="slideshow">

        <!-- パスを変更する必要あり -->
        <li data-src="../assets/img/img1.jpg"></li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  mounted: function() {
    window.addEventListener('load', function() {
      //処理
      const slideshow = document.getElementById('slideshow');
      const slide = slideshow.querySelectorAll('li');
      [...slide].forEach(slide => {
        slide.style.backgroundImage = `url(${slide.getAttribute('data-src')})`
        slide.removeAttribute('data-src');
      });
      const totalNum = slide.length - 1;
      const fadeTime = 2000;
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

<style>
    body {
      background-color: #777777;
    }

    main {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      max-width: none;
      width: 100%;
    }

    .top-slideshow-wrapper {
      height: calc(100vh - 225px);
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

    .top-slideshow-wrapper #slideshow {
      margin: 0;
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
      width: 100%;
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

    body.hover .top-slideshow-wrapper {
      height: calc(100vh - 135px);
    }

  </style>