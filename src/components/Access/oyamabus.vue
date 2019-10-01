<template lang="pug">
div
  .modal-card(style="width: 600")
    header.modal-card-head
      p.modal-card-title hogeee
    section.modal-card-body
      p head

    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
</template>

<script>
export default {
}
</script>

<style scoped>

</style>