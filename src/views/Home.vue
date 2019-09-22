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
</template>

<script>
import top from '../components/top.vue'
import about from '../components/about.vue'
import guestDJ from '../components/guestDJ.vue'
import guestVJ from '../components/guestVJ.vue'
import member from '../components/member.vue'
import timetable from '../components/timetable.vue'
import DTM from '../components/DTM.vue'

export default {
	components: {
		top,
		about,
		guestDJ,
		guestVJ,
		member,
		timetable,
		DTM
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
