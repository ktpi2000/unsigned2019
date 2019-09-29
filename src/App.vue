<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <Header/>
    <transition mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
    <mobile_nav/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import mobile_nav from '@/components/mobile_nav.vue'
export default {
  components: {
    Header,
    Footer,
    mobile_nav,
  }
}
</script>

<style>
#app {
  overflow: hidden;
	font-family: 'Noto Sans JP',   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-enter-active, .v-leave-active{
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.block-revealer {
  position: relative;
}

/* The actual block that overlays */
.block-revealer__element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  pointer-events: none;
  opacity: 0;
}

@media screen and (min-width: 1024px) {
    .dtm, .tt, .access {
        margin-top: 150px;
    }
}
</style>
