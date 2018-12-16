<template lang="pug">
  .comic-strip-container
    .comic-strip
      .comic-strip-panel
        img(v-bind:src="`/images/comics/${post.imageId}/1.jpg`")
      .comic-strip-panel
        img(v-bind:src="`/images/comics/${post.imageId}/2.jpg`")
      .comic-strip-panel
        img(v-bind:src="`/images/comics/${post.imageId}/3.jpg`")
</template>

<script>

export default {
  components: {

  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {

    }
  },
}

</script>

<style lang="scss" scoped>

  .comic-strip-container {
    width: 100%;
    overflow: scroll;

    // position: absolute;

    @media only screen and (min-width: $desktop) {
      display: flex;
      justify-content: center;
    }

    .comic-strip {
      display: flex;
      max-width: 1200px;
      min-width: 900px;

      .comic-strip-panel {
        
        img {
          width: 100%;
        }
      }
    }
  }

</style>
