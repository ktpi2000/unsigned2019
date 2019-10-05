<template lang="pug">
.tt
    .main-title(v-block-reveal="") TIME TABLE
    anison_tt/
    dance_tt/
</template>

<script>
import anison_tt from '../../src/components/DJ/anison_tt.vue'
import dance_tt from '../../src/components/DJ/dance_tt.vue'
export default {
    components: {
        anison_tt,
        dance_tt,
    }
}
</script>

<style scoped>
@import url("../assets/style/timetable.css");
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
    color: #9b003f;
}
.tt {
    margin-bottom: 60px;
}
</style>