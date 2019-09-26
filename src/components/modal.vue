<template lang="pug">
div
  .modal-card(style="width: 600")
    header.modal-card-head
      p.modal-card-title {{member.name}}
    section.modal-card-body
      img.member-image(v-bind:src="member.image" alt="member img")
      br
      p.is-size-6 {{member.credit}}
      b-tag.is-size-6(rounded) {{member.category}}
      br
      br
      .member-twitter
        a(:href="member.twitter" target="_blank")
          img(src="@/assets/img/Twitter_icon.png"  width="40px")
      br
      p.is-size-5 {{member.comment}}

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
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