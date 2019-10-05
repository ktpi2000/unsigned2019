<template lang="pug">
table
    tbody
        tr(v-for="anison in anisons" :key="anison.id")
            th(align="center") {{ anison.time}}
            td {{ anison.name}}
</template>

<script>
export default {
    data: function() {
        return {
            anisons: [
                {
                    time: "11:00",
                    name: "yakiya",
                },
                {
                    time: "11:30",
                    name: "4mくん",
                },
                {
                    time: "12:10",
                    name: "CELL",
                },
                {
                    time: "12:40",
                    name: "ごこめ",
                },
                {
                    time: "13:30",
                    name: "サブレ",
                },
                {
                    time: "14:00",
                    name: "880",
                },
                {
                    time: "14:30",
                    name: "Hokke",
                },
                {
                    time: "15:00",
                    name: "みどり",
                },
                {
                    time: "15:30",
                    name: "ふぉん",
                },
                {
                    time: "16:20",
                    name: "ココイチ",
                },
            ],
        }
    }
}
</script>