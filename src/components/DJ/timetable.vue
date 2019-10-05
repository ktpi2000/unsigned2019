<template lang="pug">
.columns.is-centered
    .column.is-4
        .tt_name 11.03 ANISON side
        anison_tt/
        
    .column.is-4
        .tt_name 11.04 DANCE side
        dance_tt/
                    
</template>

<script>
import anison_tt from './anison_tt.vue'
import dance_tt from './dance_tt.vue'
export default {
    components: {
        anison_tt,
        dance_tt,
    }
}
</script>

<style scoped>
@import url("../../assets/style/timetable.css");
.tt_name {
    font-size: 30px;
}
</style>