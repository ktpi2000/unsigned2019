<template lang="pug">
.nav
    ul
        li.menu.is-active
            router-link(to="/" exact-active-class="active")
                img(src="@/assets/icon/compact-disc-solid.svg" alt="icon001")
                p DJ
        li.menu
            router-link(to="/tt" exact-active-class="active")
                img(src="@/assets/icon/border-all-solid.svg" alt="icon002")
                p TT
        li.menu
            router-link(to="/dtm" exact-active-class="active")
                img(src="@/assets/icon/headphones-alt-solid.svg" alt="icon003")
                p DTM
        li.menu
            router-link(to="/access" exact-active-class="active")
                img(src="@/assets/icon/map-marker-alt-solid.svg" alt="icon004")
                p ACCESS
</template>

<style scoped>
.nav {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
}
ul {
    box-shadow: 0 -5px 3px -3px #a19fa0;
}
li {
    display: inline-block;
    background: white;
    width: 25%;
    height: 60px;
}
a {
    display: block;
    padding-top: 3px;
    color: black;
}
.active {
    background: #9b003f;
    transition: all 0.2s ease-out;
    color: white;
}
img {
    width: 28px;
    height: 28px;
}

@media screen and (min-width: 1024px) {
    .nav {
        display: none;
    }
}
</style>