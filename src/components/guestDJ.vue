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
import modal from './modal.vue'
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
                    name: "ふぉん",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'GUEST',
                    twitter: 'https://twitter.com/FonfonOKM',
                    comment: '栃木県大田原市出身、在住。オーディエンスをリスペクトしたソウルフルなプレイが信条。好きなアニメはたまこまーけっと、たまこラブストーリー。'
                },
                {
                    name: "4mくん",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'GUEST',
                    comment: '唯一無二才色兼備の僕です'
                },
                {
                    name: "ゴコメくん",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'GUEST',
                    comment: '唯一無二才色兼備の僕です'
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