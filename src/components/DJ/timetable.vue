<template lang="pug">
    .columns.is-centered
        .column.is-4
            h1 11.03 ANISON side
            table
                tbody
                    tr(v-for="anison in anisons" :key="anison.id")
                        th(align="center") {{ anison.time}}
                        td {{ anison.name}}
            
        .column.is-4
            h1 11.04 DANCE side
            table
                tbody
                    tr(v-for="dance in dances" :key="dance.id")
                        th(align="center") {{ dance.time}}
                        td {{ dance.name}}
                    
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
        dances: [
            {
                time: "10:00",
                name: "マイシパ95",
            },
            {
                time: "10:00",
                name: "TNB",
            },
            {
                time: "10:00",
                name: "たい焼き揉みたい",
            },
            {
                time: "10:00",
                name: "kuma",
            },
            {
                time: "10:00",
                name: "だっしー",
            },
            {
                time: "10:00",
                name: "Shine",
            },
            {
                time: "10:00",
                name: "二浪",
            },
            {
                time: "10:00",
                name: "smith",
            },
            {
                time: "10:00",
                name: "2g06",
            },
            {
                time: "10:00",
                name: "Massu",
            },
            {
                time: "10:00",
                name: "saboten",
            },
        ]
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 30px;
}

table {
    width: 90%;
    border-collapse: collapse;
    border-spacing:  5px;
    margin-left: auto;
    margin-right: auto;
}

th, td {
    padding: 10px 10px;
    font-size: 25px;
}

th {
    width: 30%;
    background: #9b003f;
    color: #fff;
    position: relative;
    z-index: 0;
    font-weight: normal;
    border-radius: 10px 0 0 10px;
}

td {
    background: #b5b5b5;
    padding-left: 25px;
    font-weight: bold;
    border-radius: 0 10px 10px 0;
}

th::after {
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    background: #9b003f;
    transform: rotate(45deg);
    top: 14px;
    right: -10px;
    z-index: -1;
}

tr {
    border-bottom: solid 5px #fff;
}
</style>