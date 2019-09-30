<template lang="pug">
.dj
	top/
	.main-title(v-block-reveal="") ABOUT
	about/
	.main-title(v-block-reveal="") GUEST DJ
	guestDJ/
	.main-title(v-block-reveal="") GUEST VJ
	guestVJ/
	.main-title(v-block-reveal="") PERFORMER
	performer/
	.main-title(v-block-reveal="") TIMETABLE
	timetable/
	.main-title(v-block-reveal="") CAUTION
	caution/
	page_footer/
</template>

<script>
import top from '../components/DJ/top.vue'
import about from '../components/DJ/about.vue'
import guestDJ from '../components/DJ/guestDJ.vue'
import guestVJ from '../components/DJ/guestVJ.vue'
import performer from '../components/DJ/performer.vue'
import timetable from '../components/DJ/timetable.vue'
import caution from '../components/DJ/caution.vue'
import page_footer from '@/components/footer.vue'

export default {
	components: {
		top,
		about,
		guestDJ,
		guestVJ,
		performer,
		timetable,
		caution,
		page_footer,
	},
};
</script>

<style>
.main-title {
	font-size: 50px;
	margin: 30px 0 10px 0;
	padding: 5px 0;
	color: #9b003f;
}

@media screen and (max-width: 480px) {
.main-title {
	font-size: 35px;
}
}
</style>
