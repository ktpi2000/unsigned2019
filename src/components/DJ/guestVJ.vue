<template lang="pug">
    div

        transition-group.members(name="members" class="columns is-multiline is-mobile")
            .member(v-if="currentFilter === member.category || currentFilter === 'ALL'" v-bind:key="member.name" v-for="member in members" class="column is-3-desktop is-11-mobile is-3-tablet")
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
                    name: "りゅーしゃ",
                    image: require("@/assets/img/member/ryusha.jpg"),
                    category: "GUEST",
                    twitter: "https://twitter.com/ryushaSW",
                    credit: "Happy harmonize-はぴ☆はも/TKBもらっていいですか/THE ANTHEM/A_mothions",
                    comment: "栃木と八王子を中心に生息しているポン出しマン。大好きなコンテンツには正直になるオタク。「届かなくていい想いなんて、ないのですよ」"
                },
                {
                    name: "素敵之宮",
                    image: require("@/assets/img/member/ryosk.jpg"),
                    category: "GUEST",
                    twitter: "https://twitter.com/RYOSK17",
                    credit: "ANIMA / ラン4ジャンプ!!",
                    comment: "2016年初頭より、栃木大田原のMusic Bar dadaでアニソン中心のDJイベント『ANIMA』の主催の一角として活動中。始めた頃こそ大田原dadaで拙いDJをしながらも、誰が居てもアニソンを流してるうちにアニメやアニソンが好きなお客さんやアニソンDJの仲間が増え、今では自身の立ち上げたANIMA大田原がdadaのレギュラーパーティーとして3ヶ月に一度開催するまでに至った。現在、自身の所属するANIMA大田原やラン4ジャンプ‼︎ではVJを主に担っている。「かわいいは正義」的な観点で女の子の日常や、ヒロインの可愛いアニメを好んで観ている。"
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
</style>