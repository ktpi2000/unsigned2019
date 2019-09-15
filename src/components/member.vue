<template lang="pug">
    div
        .container
            .filters
                span.filter(v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')") ALL
                span.filter(v-bind:class="{ active: currentFilter === 'DJ' }" v-on:click="setFilter('DJ')") DJ
                span.filter(v-bind:class="{ active: currentFilter === 'DTM' }" v-on:click="setFilter('DTM')") DTM

        section.members(name="members")
            .member(v-if="currentFilter === member.category || currentFilter === 'ALL'" v-bind:key="member.name" v-for="member in members")
                .member-image-wrapper(@click="isCardModalActive = true")
                    img.member-image(v-bind:src="member.image")
                .member-name
                    span.member-name {{member.name}}
                .member-category
                    p {{member.category}}
                .member-twitter
                    a(:href="member.twitter") twitter

            // modal
            b-modal(:active.sync="isCardModalActive" :width="640" scroll="keep")
                .card
                    .card-image
                    figure.image.is-4by3
                        img(src="/static/img/placeholder-1280x960.png" alt="Image")
                    .card-content
                    .media
                        .media-left
                        figure.image.is-48x48
                            img(src="/static/img/placeholder-1280x960.png" alt="Image")
                        .media-content
                        p.title.is-4 John Smith
                        p.subtitle.is-6 @johnsmith
                    .content
                        p ${member.name(index)}
</template>

<script>
export default {
    data: function() {
        return {
            currentFilter: 'ALL',
            
            //modal
            isImageModalActive: false,
            isCardModalActive: false,

            members: [
                {name: "Massu", image: require("../assets/img/member/massu.jpg"), category: 'DJ', twitter: 'https://twitter.com/Maspi_427'},
                {name: "Ma", image: require("../assets/img/member/massu.jpg"), category: 'DTM'},
                {name: "Mas", image: require("../assets/img/member/massu.jpg"), category: 'DJ'},
                {name: "Mass", image: require("../assets/img/member/massu.jpg"), category: 'DJ'},
                {name: "Msu", image: require("../assets/img/member/massu.jpg"), category: 'DTM'},
                {name: "Mu", image: require("../assets/img/member/massu.jpg"), category: 'DJ'},
                {name: "M", image: require("../assets/img/member/massu.jpg"), category: 'DJ'},
            ]
        }
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
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