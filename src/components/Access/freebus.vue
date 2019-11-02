<template lang="pug">
div
  .modal-card(width="300")
    header.modal-card-head
      p.modal-card-title 無料シャトルバス
    section.modal-card-body
      b-tabs(type="is-toggle-rounded" expanded size="is-medium")
        b-tab-item(label="小山駅▷高専")
          table
            tbody
                tr(v-for="for_kosen in for_kosens" :key="for_kosen.id")
                    th(align="center") {{ for_kosen.hour}}
                    td {{ for_kosen.min}}
        b-tab-item(label="高専▷小山駅")
          table
            tbody
                tr(v-for="for_sta in for_stas" :key="for_sta.id")
                    th(align="center") {{ for_sta.hour}}
                    td {{ for_sta.min}}
      

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
</template>

<script>
export default {
    data: function() {
        return {
            for_kosens: [
                {
                    hour: "9",
                    min: "",
                },
                {
                    hour: "10",
                    min: "10　50",
                },
                {
                    hour: "11",
                    min: "00　35",
                },
                {
                    hour: "12",
                    min: "20　35",
                },
                {
                    hour: "13",
                    min: "45　50",
                },
                {
                    hour: "14",
                    min: "00　35　50",
                },
                {
                    hour: "15",
                    min: "25　40",
                },
                {
                    hour: "16",
                    min: "15　30",
                },
                {
                    hour: "17",
                    min: "25　40",
                },
                {
                    hour: "18",
                    min: "15　30",
                },
                {
                    hour: "19",
                    min: "05",
                },
            ],
            for_stas: [
                {
                    hour: "9",
                    min: "45",
                },
                {
                    hour: "10",
                    min: "35",
                },
                {
                    hour: "11",
                    min: "10　15",
                },
                {
                    hour: "12",
                    min: "00　15",
                },
                {
                    hour: "13",
                    min: "25　40",
                },
                {
                    hour: "14",
                    min: "10　25",
                },
                {
                    hour: "15",
                    min: "00　15　50",
                },
                {
                    hour: "16",
                    min: "05",
                },
                {
                    hour: "17",
                    min: "00　15　50",
                },
                {
                    hour: "18",
                    min: "05　40　55",
                },
                {
                    hour: "19",
                    min: "30",
                },
            ]
        }
    }
}
</script>

<style scoped>
@import url("../../assets/style/bus_timetable.css");
th {
    background: #3273DC;
}
</style>