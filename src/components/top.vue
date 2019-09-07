<template lang="pug">
#app
  transition(name="fade" mode="out-in")
    img.slideshow(:src="images[index]" :key="images[index]")


</template>

<script>
export default {
    el: "app",
  data: function() {
      return {
        index: 0,
        images: [
            require('@/assets/img/img1.jpg'),
            require('@/assets/img/img2.jpg')
        ]
      }
    },
    mounted: function() {
        setInterval(() => {
        this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 5000);
  },
}
</script>

<style scoped>
img {
  /* これで横のはみ出しは出来た */
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>