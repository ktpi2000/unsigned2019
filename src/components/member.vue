<template lang="pug">
    div
        .container
            .filters
                span.filter(v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')") ALL
                span.filter(v-bind:class="{ active: currentFilter === 'DJ' }" v-on:click="setFilter('DJ')") DJ
                span.filter(v-bind:class="{ active: currentFilter === 'DTM' }" v-on:click="setFilter('DTM')") DTM

        transition-group.members(name="members")
            .member(v-if="currentFilter === member.category || currentFilter === 'ALL'" v-bind:key="member.name" v-for="member in members")
                .member-image-wrapper
                    img.member-image(v-bind:src="member.image" alt="member img")
                .member-name
                    span.member-name {{member.name}}
                .member-category
                    p {{member.category}}
                .member-twitter
                    a(:href="member.twitter") twitter
                .member-comment
                    p {{ member.comment}}
                button(@click="openModal(member)") more

        modal(:val="postMember" v-if="showModal" @close="closeModal")
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
            showModal: false,
            postMember: '',

            members: [
                {
                    name: "Massu",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DJ',
                    twitter: 'https://twitter.com/Maspi_427',
                    comment: 'hello! good! yay!'
                },
                {
                    name: "Maaaa",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DTM'
                },
                {
                    name: "Madd",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DTM'
                },
                {
                    name: "Mae",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DTM'
                },
                {
                    name: "Mat",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DTM'
                },
                {
                    name: "Mah",
                    image: require("../assets/img/member/massu.jpg"),
                    category: 'DTM'
                },
            ]
        }
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		},
        openModal(member) {
            this.postMember = member;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
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