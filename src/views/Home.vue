<template lang="pug">
div
	top/
	h1 ABOUT
	about/
	h1 GUEST
	guest/
	h1 MEMBER
	member/
	h1 timetable
	timetable/
</template>

<script>
import top from '../components/top.vue'
import about from '../components/about.vue'
import guest from '../components/guest.vue'
import member from '../components/member.vue'
import timetable from '../components/timetable.vue'

export default {
	components: {
		top,
		about,
		guest,
		member,
		timetable,
	},
};
</script>

<style>

</style>
