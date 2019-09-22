<template lang="pug">
    transition(name="fade")
      .modal-mask(@click="$emit('close')")
        .modal-wrapper
          .modal-container
            | {{ val.name }}
            br
            img.member-image(v-bind:src="val.image" alt="member img")
            br
            button(@click="$emit('close')")
              | OK
</template>

<script>
export default {
    props: {
        val: Object
    }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: all .5s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 50%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all 1.3s ease;
  }
</style>