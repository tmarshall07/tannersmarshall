<template lang="pug">
  .comic-strip-container
    .comic-strip(:title="post.title")
      .comic-strip-panel
        img(:src="`${s3Url}/comics/${post.imageId}/1.jpg`")
      .comic-strip-panel
        img(:src="`${s3Url}/comics/${post.imageId}/2.jpg`")
      .comic-strip-panel
        img(:src="`${s3Url}/comics/${post.imageId}/3.jpg`")

</template>

<script>

import PanelModal from '~/components/comics/PanelModal';

export default {
  components: {
    PanelModal,
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      s3Url: 'https://tannersmarshall.s3.us-east-2.amazonaws.com',
    }
  },
}

</script>

<style lang="scss" scoped>

  .comic-strip-container {
    width: 100%;
    overflow: scroll;

    @media #{$desktop} {
      display: flex;
      justify-content: center;
    }

    .comic-strip {
      display: flex;
      min-width: 900px;

      @media #{$tablet} {
        min-width: 1500px;
      }

      @media #{$desktop} {
        min-width: unset;
      }

      .comic-strip-panel {
        
        img {
          width: 100%;
        }
      }
    }
  }

</style>
