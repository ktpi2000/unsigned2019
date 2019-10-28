<template lang="pug">
.subtitle.is-size-5
    .columns.is-centered
        .column.is-half
            .content
                ul
                    li(v-for="caution in cautions") {{caution}}
</template>

<script>
export default {
    data: function() {
        return {
            cautions: [
                "フロア内での飲食は自由ですが、他の方に迷惑をかけたり機材やスピーカーを壊したり汚したりしないようお願い致します。",
                "学校の文化祭内のイベントですので喫煙・飲酒はご遠慮ください。",
                "コスプレOKですが、更衣室はございません。",
                "荷物や貴重品などの管理はご自身でお願い致します。",
                "ダンス・オタ芸は、周りの人への配慮を忘れずに！マナーを守りましょう",
                "当日はフロア内が大変暑くなることが予想されます。各自水分補給をしっかりと行うことをお勧めします。",
                "タイムテーブルは予告なしに変更する場合があります。",
                "怪我だけはしないようにしましょう。"
            ]
        }
    }
}
</script>

<style scoped>
li {
    text-align: left;
}
@media screen and (max-width: 768px) {
    ul {
        margin-right: 5px;
    }
}
</style>