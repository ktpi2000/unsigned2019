<template lang="pug">
.Footer
    .columns.is-centered
        .column.is-3
            img(src="../assets/img/hashtag.png" alt="hashtag" width="200")
            h1.is-size-5
                | follow us 
                b-button(type="is-info" size="is-small" rounded) @OyNCT_onken

        .column.is-3.un
            img(src="../assets/img/member/un_8th_icon.png" width="50px" alt="logo")
            h1.is-size-3 Unsigned2019
        
    small &copy; Unsigned2019
</template>

<style scoped>
.Footer {
    margin-top: 150px;
    background: black;
    color: white;
}
.un {
    display: inline-block;
    vertical-align:top;
}
</style>