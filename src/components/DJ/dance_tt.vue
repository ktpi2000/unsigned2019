<template lang="pug">
div
    p Open DJ: 寒天ゼリー
    br
    table.djtt
        tbody
            tr(v-for="dance in dances" :key="dance.id")
                th(align="center") {{ dance.time}}
                td {{ dance.name}}
    br
    p VJ: LEDJ
</template>

<script>
export default {
    data: function() {
        return {
            dances: [
                {
                    time: "11:00",
                    name: "マイシパ95",
                },
                {
                    time: "11:30",
                    name: "TNB",
                },
                {
                    time: "12:00",
                    name: "焼き揉み",
                },
                {
                    time: "12:30",
                    name: "kuma",
                },
                {
                    time: "13:00",
                    name: "だっしー",
                },
                {
                    time: "13:30",
                    name: "Shine",
                },
                {
                    time: "14:00",
                    name: "二浪",
                },
                {
                    time: "14:30",
                    name: "Kushizam",
                },
                {
                    time: "15:00",
                    name: "smith",
                },
                {
                    time: "15:30",
                    name: "2g06",
                },
                {
                    time: "16:00",
                    name: "Massu",
                },
                {
                    time: "16:30",
                    name: "saboten",
                },
            ]
        }
    }
}
</script>