<template lang="pug">
div
  .modal-card(width="300")
    header.modal-card-head
      p.modal-card-title おーバス
    section.modal-card-body
      b-tabs(type="is-toggle-rounded" expanded size="is-medium")
        b-tab-item(label="小山駅▷小山高専")
          table
            tbody
                tr(v-for="for_kosen in for_kosens" :key="for_kosen.id")
                    th(align="center") {{ for_kosen.hour}}
                    td {{ for_kosen.min}}
        b-tab-item(label="小山高専▷小山駅")
          table
            tbody
                tr(v-for="for_sta in for_stas" :key="for_sta.id")
                    th(align="center") {{ for_sta.hour}}
                    td {{ for_sta.min}}
      

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
      p 無印:城東中久喜線 / ○印:高岳線
</template>

<script>
export default {
    data: function() {
        return {
            for_kosens: [
                {
                    hour: "6",
                    min: "20",
                },
                {
                    hour: "7",
                    min: "40　　57○",
                },
                {
                    hour: "8",
                    min: "50　　50○",
                },
                {
                    hour: "9",
                    min: "40○　50",
                },
                {
                    hour: "10",
                    min: "30○　50",
                },
                {
                    hour: "11",
                    min: "30○　50",
                },
                {
                    hour: "13",
                    min: "00○　30",
                },
                {
                    hour: "14",
                    min: "00○　30",
                },
                {
                    hour: "15",
                    min: "00○　30",
                },
                {
                    hour: "16",
                    min: "00○　40",
                },
                {
                    hour: "17",
                    min: "00○　40",
                },
                {
                    hour: "18",
                    min: "00○　40",
                },
                {
                    hour: "19",
                    min: "00○　40",
                },
                {
                    hour: "20",
                    min: "00○　40",
                },
            ],
            for_stas: [
                {
                    hour: "6",
                    min: "45",
                },
                {
                    hour: "7",
                    min: "24○",
                },
                {
                    hour: "8",
                    min: "05　　24○",
                },
                {
                    hour: "9",
                    min: "14○　15",
                },
                {
                    hour: "10",
                    min: "04○　15　54○",
                },
                {
                    hour: "11",
                    min: "15　　54○",
                },
                {
                    hour: "12",
                    min: "15",
                },
                {
                    hour: "13",
                    min: "24○　55",
                },
                {
                    hour: "14",
                    min: "24○　55",
                },
                {
                    hour: "15",
                    min: "24○　55",
                },
                {
                    hour: "16",
                    min: "24○",
                },
                {
                    hour: "17",
                    min: "05　　34○",
                },
                {
                    hour: "18",
                    min: "05　　34○",
                },
                {
                    hour: "19",
                    min: "05　　34○",
                },
                {
                    hour: "20",
                    min: "05　　34○",
                },
            ]
        }
    }
}
</script>

<style scoped>
@import url("../../assets/style/bus_timetable.css");
</style>