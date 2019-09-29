<template lang="pug">
.nav
    ul
        li
            router-link(to="/") DJ
        li
            router-link(to="/tt") TT
        li
            router-link(to="/dtm") DTM
        li
            router-link(to="/access") ACCESS
</template>

<style scoped>
.nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #b6c0d1;
    z-index:999;
}
li {
    display: inline-block;
    /*padding: 0 7%;*/
    background: white;
    width: 25%;
    height: 60px;
}
</style>