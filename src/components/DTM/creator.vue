<template lang="pug">
div

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
                    name: "AOhari",
                    image: require("@/assets/img/member/AOhari.jpg"),
                    category: "DTM",
                    twitter: "https://twitter.com/AOhari_Park",
                    comment: "聞いてて気持ちいい曲を作りたいです",
                },
                {
                    name: "雪華",
                    image: require("@/assets/img/member/eliza.jpg"),
                    category: "DTM",
                    twitter: "https://mobile.twitter.com/eliza_kisyou",
                    comment: "DTM始めたばっかりの者です。趣味は睡眠",
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

<style scoped>
@import url("../../assets/style/profile_img.css");
</style>