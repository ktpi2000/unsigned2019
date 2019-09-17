<template lang="pug">
div
	top/
	h1 ABOUT
	about/
	h1 GUEST DJ
	guestDJ/
	h1 GUEST VJ
	guestVJ/
	h1 MEMBER
	member/
	h1 timetable
	timetable/
	h1 DTM
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

</style>
