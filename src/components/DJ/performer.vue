<template lang="pug">
    div
        .container
            .filters
                span.filter(v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')") ALL
                span.filter(v-bind:class="{ active: currentFilter === 'ANISON' }" v-on:click="setFilter('ANISON')") ANISON
                span.filter(v-bind:class="{ active: currentFilter === 'DANCE' }" v-on:click="setFilter('DANCE')") DANCE

        transition-group.members(name="members" class="columns is-multiline is-mobile")
            .member(v-if="currentFilter === member.category || currentFilter === 'ALL'" v-bind:key="member.name" v-for="member in members" class="column is-3-desktop is-5-mobile is-3-tablet")
                .member-image-wrapper
                    img.member-image(v-bind:src="member.image" alt="member img")
                .member-name
                    span.member-name {{member.name}}
                .button.is-danger.is-rounded(@click="openModal(member)") more

        b-modal(:active.sync="isModalActive" has-modal-card="")
            modal(v-bind="formProps")
</template>

<script>
import modal from '../modal.vue'
export default {
    components: {
        modal
    },
    data: function() {
        return {
            currentFilter: 'ALL',
            isModalActive: false,
            formProps: {
                member: ''
            },
            members: [
                {
                    name: "ココイチ",
                    image: require("@/assets/img/member/koko1.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/Yu_chan_exvs2",
                    comment: "名前の通り、好きなカレー屋はゴーゴーカレーです。2日に誕生日なので皆さん祝ってください。",
                },
                {
                    name: "マイシパ95",
                    image: require("@/assets/img/member/maishipa95.jpg"),
                    category: "DANCE",
                    comment: "Vaporwave界隈が大好きなマイシパ95（マインスイーパ95）と申します。今回DanceやDisco,80s,Futurefunkというテーマで曲を回したいと思います。バブリーでセクシーな世界感を是非感じて下さい！",
                },
                {
                    name: "CELL",
                    image: require("@/assets/img/member/cell.jpg"),
                    category: "ANISON",
                    comment: "家でDJしながら飛び跳ねるのが趣味。最近、「これ好き！」ってなる曲が多くて嬉しい。",

                },
                {
                    name: "みどり",
                    image: require("@/assets/img/member/ryder.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/ryder472",
                    comment: "95年栃木生まれのオタク。 おとぎ銃士 赤ずきんを見て田村ゆかりさんと出会いオタクとしてのキャリアをスタート。 15歳のときにUK Hardcoreと出会いDJを始める。後にUK Hardcore系のイベントで(なぜか)アニソンDJの世界と出会いアニクラに飛び込んだ。(自称)unsigned唯一の皆勤賞",
                },
                {
                    name: "サブレ",
                    image: require("@/assets/img/member/sabure.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/sacurea_sbr55",
                    comment: "4回目のUnsigned参戦で今年からOB。3年前のUnsignedにて特撮オンリーでDJデビューしてから、北関東のアニクラを中心に遊びに行きながら活動中。群馬に引っ越したけどやっぱり小山のラーメンが好き！埼玉も好き。",
                },
                {
                    name: "kuma",
                    image: require("@/assets/img/member/kuma.jpg"),
                    category: "DANCE",
                    comment: "今年初参加です。ミス等ありますがよろしくお願いします！頑張っていきますよ〜ｲｸｲｸ",
                },
                {
                    name: "Hokke",
                    image: require("@/assets/img/member/hokke.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/hokke_",
                    comment: "高専を卒業し、社会の闇に飲まれたOB",
                },
                {
                    name: "880",
                    image: require("@/assets/img/member/880.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/hayao099",
                    credit: "いしあに!!/A_motions",
                    comment: "DJサークルunsignedでDJを始める．2016年からアニソンDJを始め，RSBKosen(秋葉原MOGRA)やアニ箱(音楽喫茶Sabaco)等学生主体のイベントの主催を経て，DJみどりに栃木県のアニソンイベント，いしあに!!に誘われイベントのアニソンDJとしてキャリアを始める．青春モノアニメとほのぼのとしたアニメが好き．",
                },
                {
                    name: "yakiya",
                    image: require("@/assets/img/member/yakiya.jpg"),
                    category: "ANISON",
                    twitter: "https://twitter.com/yakiya28",
                    comment: "遊びに行った工陵祭にて「クラブイベント」と邂逅。受験前にも関わらず、音研に入る事を志す。入学当初はUK Hardcoreや音楽ゲーム曲を軸とした活動を行っていたが、先輩の勧めによりアイカツ！に魅了され、アニソンDJも意欲的に取り組む様になる。お洒落サウンドが軸なプレイを得意とし、中野heavysick ZERO「2D-iDOL-FESTiVAL!!」では二次元アイドルオンリー、栃木県下野市「いしあに!!」ではアニソンDJとして活動中。また、栃木県宇都宮市「A_motions」のメンバー。",
                },
                {
                    name: "Massu",
                    image: require("@/assets/img/member/massu.jpg"),
                    category: "DANCE",
                    twitter: "https://twitter.com/Maspi_427",
                    comment: "Unsigned2年目です。鉄旅とUKHCが好き。yay! nice! cool!なDJをしたい",
                },
                {
                    name: "たい焼き揉みたい",
                    image: require("@/assets/img/member/taiyaki.jpg"),
                    category: "DANCE",
                    comment: "頑張りたいです",
                },
                {
                    name: "Shine",
                    image: require("@/assets/img/member/shine.jpg"),
                    category: "DANCE",
                    twitter: "",
                    comment: "もうとめたくない",
                },
                {
                    name: "だっしー",
                    image: require("@/assets/img/member/dasshi.jpg"),
                    category: "DANCE",
                    twitter: "https://twitter.com/shumaonct22005",
                    comment: "まだまだ使いなれていませんが、精一杯やるのでよろしくお願いします。",
                },
            ]
        }
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		},
        openModal(member) {
            this.formProps.member = member;
            this.isModalActive = true;
        },
    }
}
</script>

<style>
.container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.member-name {
    font-size: 26px;
    margin-bottom: 5px;
    
}

.filters {
    font-size: 24px;
}

.filter {
    margin: 0px 15px;
    padding: 6px 10px;
    border: solid 2px #9b003f;
    color: black;
    border-radius: 25px;
    cursor: pointer;
    cursor: hand;
}

.active {
    background-color: #9b003f;
    color: white;
    border: none;
}

.member-image {
    width: 300px;
    border-radius: 300px;
}


.members {
    margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.member {
    margin: 0px 10px;
    margin-bottom: 50px;

	flex-direction:column;
	align-items:center;
}
</style>