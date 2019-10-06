<template lang="pug">
table.djtt
    tbody
        tr(v-for="dance in dances" :key="dance.id")
            th(align="center") {{ dance.time}}
            td {{ dance.name}}
</template>

<script>
export default {
    data: function() {
        return {
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