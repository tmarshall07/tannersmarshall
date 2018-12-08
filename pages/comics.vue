<template lang="pug">
  .comic-container
    .comic
      img(src='/images/comics/guilt-trip.jpg')

</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {
      posts: [
        { id: 'guilt-trip', name: 'Guilt trip', date: '11/06/19' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.comic-container {
  display: flex;
  justify-content: center;
  
  .comic {
    max-width: 1200px;

    img {
      width: 100%;
    }
  }
}

</style>
