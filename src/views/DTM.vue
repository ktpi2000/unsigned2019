<template lang="pug">
.dtm
    h1 あなたのお気に入りのDTMer
    h1 見つかること間違いなし！
    //.main-title(v-block-reveal="") NEW ALBUM
    //New/
    .main-title(v-block-reveal="") 9th ALBUM
    nine/
    page_footer/
</template>

<script>
import New from '../components/DTM/new.vue'
import nine from '../components/DTM/nine.vue'
import page_footer from '@/components/footer.vue'
export default {
    components: {
        New,
        nine,
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