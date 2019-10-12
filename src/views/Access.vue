<template lang="pug">
.access
    .main-title(v-block-reveal="") ACCESS
    h1.is-size-4 会場
    p 小山工業高等専門学校
    p 専攻科棟4F 多目的ホール
    br
    b-button.is-info.is-rounded(@click="route = true") 道順
    br
    br
    br
    h1.is-size-4 住所
    p 栃木県小山市中久喜771
    br
    a.button.is-info.is-rounded(target="_blank" href="https://www.google.com/maps/place/%E5%9B%BD%E7%AB%8B%E5%B0%8F%E5%B1%B1%E5%B7%A5%E6%A5%AD%E9%AB%98%E7%AD%89%E5%B0%82%E9%96%80%E5%AD%A6%E6%A0%A1/@36.3186853,139.8399723,17z/data=!3m1!4b1!4m5!3m4!1s0x601f4e17aa8ac303:0xffd4bb31378636da!8m2!3d36.318681!4d139.842161") Google map
    br
    br
    .columns.is-centered
        .column.is-5
            h2.is-size-4 ◇電車でお越しの方
            img(src="@/assets/img/traffic-map.jpg" alt="traffic-map")
            h2.is-size-5 ◇バスのご案内
            p.platform 乗り場: 小山駅東口バスのりば
            .content
                ol
                    li 
                        | 無料シャトルバス 
                        b-button.is-info.is-rounded(@click="freebusModal = true") 時刻表
                    br
                    li 
                        | 小山市コミュニティバス おーバス 
                        b-button.is-success.is-rounded(@click="oyamabusModal = true") 時刻表
                    p.fare 運賃:200円 IC利用不可
                    ul
                        li 
                            | 高岳線 小山高専入り口で下車 
                        br
                        li 
                            | 城東中久喜線 高専正門で下車 
        .column.is-5
            h2.is-size-4 ◇お車でお越しの方
            img(src="@/assets/img/parking.jpg" alt="parking-map")
            .content
                ul   
                    li なるべく公共交通機関のご利用をお願いいたします。
                    li すぎの木クリニックの駐車場は11/4のみご利用できます。
                    li ご不明な点は、工陵祭の役員にお尋ね下さい。
    
    b-modal(:active.sync="freebusModal" has-modal-card="")
        freebusModal/

    b-modal(:active.sync="oyamabusModal" has-modal-card="")
        oyamabusModal/

    b-modal(:active.sync="route" has-modal-card="")
        route/

    page_footer/
</template>

<script>
import page_footer from '@/components/footer.vue'
import freebusModal from '@/components/Access/freebus.vue'
import oyamabusModal from '@/components/Access/oyamabus.vue'
import route from '@/components/Access/route.vue'
export default {
    data: function() {
        return {
            freebusModal: false,
            oyamabusModal: false,
            route: false,
        }
    },
    components: {
        page_footer,
        freebusModal,
        oyamabusModal,
        route,
    },
    
}
</script>

<style scoped>
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
	color: #9b003f;
}
h2 {
    text-align: left;
}
li,.fare,.platform {
    text-align: left;
}
p, li {
    font-size: 1.25rem;
}
</style>