<template lang="pug">
div
	top/
	h1 ABOUT
	about/
	h1 GUEST DJ
	guestDJ/
	h1 MEMBER
	member/
	h1 timetable
	timetable/
</template>

<script>
import top from '../components/top.vue'
import about from '../components/about.vue'
import guestDJ from '../components/guestDJ.vue'
import member from '../components/member.vue'
import timetable from '../components/timetable.vue'

export default {
	components: {
		top,
		about,
		guestDJ,
		member,
		timetable,
	},
};
</script>

<style>

</style>
