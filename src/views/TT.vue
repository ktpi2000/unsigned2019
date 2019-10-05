<template lang="pug">
.tt
    .main-title(v-block-reveal="") TIME TABLE
    timetable/
</template>

<script>
import timetable from '../../src/components/DJ/timetable.vue'
export default {
    components: {
        timetable,
    }
}
</script>

<style scoped>
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
    color: #9b003f;
}
</style>