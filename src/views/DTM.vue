<template lang="pug">
.dtm
    h1 あなたのお気に入りのDTMer
    h1 見つかること間違いなし！
    //.main-title(v-block-reveal="") NEW ALBUM
    //New/
    .main-title(v-block-reveal="") 9th ALBUM
    nine/
    .main-title(v-block-reveal="") CREATOR
    creator/
    .main-title(v-block-reveal="") DTM Kosen
    h1 小山高専・木更津高専・茨城高専
    h1 合同コンピレーションアルバムを製作！
    br
    a.button.is-danger.is-large.is-rounded(href="https://dtmkosen-1-1.tumblr.com/" target="_blank") > More
    page_footer/
</template>

<script>
import New from '../components/DTM/new.vue'
import nine from '../components/DTM/nine.vue'
import creator from '../components/DTM/creator.vue'
import page_footer from '@/components/footer.vue'
export default {
    components: {
        New,
        nine,
        creator,
        page_footer,
    },
}
</script>

<style scoped>
h1 {
    font-size: 2vw;
    margin-top: 10px;
}
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
    color: #9b003f;
}

@media screen and (max-width: 1024px) {
    h1 {
    font-size: 4vw;
    }
}

@media screen and (max-width: 480px) {
    h1 {
    font-size: 6vw;
    }
}
</style>