<template lang="pug">
.nav
    ul
        li.menu.is-active
            router-link(to="/")
                img(src="@/assets/icon/compact-disc-solid.svg" width="20px")
                p DJ
        li.menu
            router-link(to="/tt")
                img(src="@/assets/icon/border-all-solid.svg" width="18px")
                p TT
        li.menu
            router-link(to="/dtm")
                img(src="@/assets/icon/headphones-alt-solid.svg" width="20px")
                p DTM
        li.menu
            router-link(to="/access")
                img(src="@/assets/icon/map-marker-alt-solid.svg" width="15px")
                p ACCESS
</template>

<script>
export default {
    mounted: function() {
        document.addEventListener('DOMContentLoaded', function(){
            // タブに対してクリックイベントを適用
            const menus = document.getElementsByClassName('menu');
                for(let i = 0; i < menus.length; i++) {
                    menus[i].addEventListener('click', colorSwitch, false);
                }

            function colorSwitch(){
                document.getElementsByClassName('is-active')[0].classList.remove('is-active');
                this.classList.add('is-active');
            }
        });
    }
}
</script>

<style scoped>
.nav {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    z-index:999;
}
li {
    display: inline-block;
    /*padding: 0 7%;*/
    background: white;
    width: 25%;
    height: 60px;
}
a {
    display: block;
    padding-top: 3px;
    color: black;
}
.is-active {
    background: #9b003f;
    transition: all 0.2s ease-out;
}

@media screen and (min-width: 1024px) {
    .nav {
        display: none;
    }
}
</style>