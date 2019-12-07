<template lang="pug">
.Footer
    .columns.is-centered
        .column.is-3
            a(target="_blank" href="https://twitter.com/hashtag/un_8th")
                img(src="../assets/img/hashtag.png" alt="hashtag" width="200")
            h1.is-size-5
                | follow us 
                a.button.is-info.is-rounded.is-small(target="_blank" type="is-info" href="https://twitter.com/OyNCT_onken") @OyNCT_onken

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

@media screen and (max-width: 1024px) {
    .Footer {
        margin-bottom: 60px;
    }
}
</style>