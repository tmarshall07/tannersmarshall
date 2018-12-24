<template lang="pug">
  .panel-modal-container
    .panel-modal-background
    .panel-image
      img(v-bind:src="`/images/comics/${post.imageId}/1.jpg`")
</template>

<script>
export default {
  components: {
    
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {

    }
  },
}

</script>

<style lang="scss" scoped>

.panel-image {
  position: absolute;
  left: 0;
  top: 0;
  
  img {
    width: 100%;
    max-height: 100vh;
  }
}

</style>
