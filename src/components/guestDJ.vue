<template lang="pug">
    div

        transition-group.members(name="members" class="columns is-multiline is-mobile")
            .member(v-if="currentFilter === member.category || currentFilter === 'ALL'" v-bind:key="member.name" v-for="member in members" class="column is-3-desktop is-11-mobile is-3-tablet")
                .member-image-wrapper
                    img.member-image(v-bind:src="member.image" alt="member img")
                .member-name
                    span.member-name {{member.name}}
                .member-category
                    p {{member.category}}
                .member-twitter
                    a(:href="member.twitter") twitter
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
.container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.member-name {
    font-size: 20px;
}

.filters {
    font-size: 24px;
}

.filter {
	font-family:arial;
	padding: 6px 6px;
	cursor:pointer;
	border-radius: 6px;
	transition: all 0.35s;
    margin: 0px 15px;
}

.member-image {
    width: 200px;
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
	box-shadow:0px 2px 8px lightgrey;
	flex-direction:column;
	align-items:center;
}
</style>