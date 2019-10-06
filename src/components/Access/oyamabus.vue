<template lang="pug">
div
  .modal-card(style="width: 600")
    header.modal-card-head
      p.modal-card-title おーバス
    section.modal-card-body
      table
        tbody
            tr(v-for="oyamabus in oyamabuss" :key="oyamabus.id")
                th(align="center") {{ oyamabus.hour}}
                td {{ oyamabus.min}}

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
</template>

<script>
export default {
    data: function() {
        return {
            oyamabuss: [
                {
                    hour: "11:00",
                    min: "yakiya",
                },
            ],
        }
    }
}
</script>

<style scoped>
@import url("../../assets/style/bus_timetable.css");
</style>