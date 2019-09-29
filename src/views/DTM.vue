<template lang="pug">
.dtm
    h1 あなたのお気に入りのDTMer
    h1 見つかること間違いなし！
    .main-title(v-block-reveal="") NEW ALBUM
    New/
</template>

<script>
import New from '../components/DTM/new.vue'
export default {
    components: {
        New,
    },
}
</script>

<style scoped>
.dtm {
    margin-top: 20px;
}
h1 {
    font-size: 2vw;
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