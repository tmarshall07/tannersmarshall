<template lang="pug">
  .image-container
    img(:src="imgSrc")

</template>

<script>

export default {
  components: {

  },
  props: {
    imgSrc: {
      type: String,
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

.image-container {
  max-width: 300px;
  img {
    width: 100%;
  }
}

</style>
