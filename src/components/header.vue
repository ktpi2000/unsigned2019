<template lang="pug">
#header
    .columns.is-centered
        .column.is-3
            h1.bar Unsigned2019
        .column.is-3
            .menu.bar
                ul
                    li DJ
                    li DTM
                    li ACCESS
</template>

<script>
export default {
    mounted: function() {
        const target     = document.getElementById( 'header' ),
            height     = 56;
        let offset       = 0,
            lastPosition = 0,
            ticking      = false;
        
        function onScroll() {
            if( lastPosition > height ) {
                if( lastPosition > offset ) {
                    target.classList.add('head-animation');
                } else {
                    target.classList.remove('head-animation');
                }
                offset = lastPosition;
            }
        }
        
        window.addEventListener('scroll', function() {
            lastPosition = window.scrollY;
            
            if( !ticking ) {
                window.requestAnimationFrame( function() {
                    onScroll( lastPosition );
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}
</script>

<style scoped>
#header {
     transition: .3s cubic-bezier(.4, 0, .2, 1);
    z-index:30;
    position:fixed;
    top: 30px;
    color: white;
    width: 100%;
    text-align: center;
}
ul li {
    display: inline;
    
}
li {
    margin: 0 1.25vw;
}
.menu {
    border-radius: 0 50px 50px 0;
}
.bar {
    background: red;
    text-align: center;
    padding: 15px 0;
}
h1 {
    border-radius: 50px 0 0 50px;
    
}
.column {
    padding: 0;
    
}
.head-animation {
  transform: translateY(-300%);
}
</style>