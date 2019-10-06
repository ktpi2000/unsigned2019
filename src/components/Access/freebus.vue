<template lang="pug">
div
  .modal-card(style="width: 600")
    header.modal-card-head
      p.modal-card-title 無料シャトルバス
    section.modal-card-body
      table
        tbody
            tr(v-for="freebus in freebuss" :key="freebus.id")
                th(align="center") {{ freebus.hour}}
                td {{ freebus.min}}

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
</template>

<script>
export default {
    data: function() {
        return {
            freebuss: [
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