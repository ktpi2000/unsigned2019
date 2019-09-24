<template lang="pug">
.home
	top/
	h1(v-block-reveal="") ABOUT
	about/
	h1(v-block-reveal="") GUEST DJ
	guestDJ/
	h1(v-block-reveal="") GUEST VJ
	guestVJ/
	h1(v-block-reveal="") MEMBER
	member/
	h1(v-block-reveal="") TIMETABLE
	timetable/
	h1(v-block-reveal="") DTM
	DTM/
	h1(v-block-reveal="") ACCESS
	access/
	h1(v-block-reveal="") CAUTION
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
h1 {
	font-size: 3vw;
}
.home {
	overflow: hidden;
}
</style>
