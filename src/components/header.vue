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

<style scoped>
#header {

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
</style>