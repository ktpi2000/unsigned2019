<template lang="pug">
div
  .modal-card(style="width: auto")
    header.modal-card-head
      p.modal-card-title {{member.name}}
    section.modal-card-body
      img.member-image(v-bind:src="member.image" alt="member img")
      p {{member.comment}}
      p {{member.category}}
        
    footer.modal-card-foot
      button.button(type="button" @click="$parent.close()") close
</template>

<script>
export default {
    props: {
        member: Object
    },
}
</script>

<style scoped>

</style>