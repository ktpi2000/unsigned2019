<template lang="pug">
    .columns.is-centered
        .column.is-3
            h1 会場
            p 小山工業高等専門学校
            p 専攻科棟4F 多目的ホール
            br
            h1 住所
            p 栃木県小山市中久喜771
            br
            a.button.is-info(target="_blank" href="https://www.google.com/maps/place/%E5%9B%BD%E7%AB%8B%E5%B0%8F%E5%B1%B1%E5%B7%A5%E6%A5%AD%E9%AB%98%E7%AD%89%E5%B0%82%E9%96%80%E5%AD%A6%E6%A0%A1/@36.3186853,139.8399723,17z/data=!3m1!4b1!4m5!3m4!1s0x601f4e17aa8ac303:0xffd4bb31378636da!8m2!3d36.318681!4d139.842161") Google map
        .column.is-5
            h2 電車でお越しの方
            img(src="@/assets/img/traffic-map.jpg" alt="traffic-map")
            h2 バスのご案内
            p.platform 乗り場: 小山駅東口バスのりば
            .content
                ol
                    li 
                        | 無料シャトルバス
                        
                    br
                    li 小山市コミュニティバス おーバス
                    p.fare 運賃:200円 IC利用不可
                    ul
                        li 
                            | 高岳線 小山高専入り口で下車 
                            a.button.is-info.is-small(href="https://www.city.oyama.tochigi.jp/uploaded/attachment/1817.pdf" target="_blank") 時刻表
                        br
                        li 
                            | 城東中久喜線 高専正門で下車 
                            a.button.is-info.is-small(href="https://www.city.oyama.tochigi.jp/uploaded/attachment/1818.pdf" target="_blank") 時刻表
            h2 お車でお越しの方
            img(src="@/assets/img/parking.jpg" alt="parking-map")
            .content
                ul   
                    li なるべく公共交通機関のご利用をお願いいたします。
                    li すぎの木クリニックの駐車場は11/4のみご利用できます。
                    li ご不明な点は、工陵祭の役員にお尋ね下さい。
</template>

<style scoped>
h2 {
    text-align: left;
}
li,.fare,.platform {
    text-align: left;
}
</style>