<template lang="pug">
.home
	top/
	.main-title(v-block-reveal="") ABOUT
	about/
	.main-title(v-block-reveal="") GUEST DJ
	guestDJ/
	.main-title(v-block-reveal="") GUEST VJ
	guestVJ/
	.main-title(v-block-reveal="") MEMBER
	member/
	.main-title(v-block-reveal="") TIMETABLE
	timetable/
	.main-title(v-block-reveal="") DTM
	DTM/
	.main-title(v-block-reveal="") ACCESS
	access/
	.main-title(v-block-reveal="") CAUTION
	caution/
	Footer/
</template>

<script>
import top from '../components/top.vue'
import about from '../components/about.vue'
import guestDJ from '../components/guestDJ.vue'
import guestVJ from '../components/guestVJ.vue'
import member from '../components/member.vue'
import timetable from '../components/timetable.vue'
import DTM from '../components/DTM.vue'
import access from '../components/access.vue'
import caution from '../components/caution.vue'
import Footer from '../components/footer.vue'

export default {
	components: {
		top,
		about,
		guestDJ,
		guestVJ,
		member,
		timetable,
		DTM,
		access,
		caution,
		Footer,
	},
};
</script>

<style>
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
}
.home {
	overflow: hidden;
	font-family: 'Noto Sans JP',   sans-serif;
}

@media screen and (max-width: 480px) {
.main-title {
	font-size: 35px;
}
}
</style>
