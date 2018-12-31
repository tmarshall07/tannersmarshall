<template lang="pug">
  .about-page-wrapper
    .profile-image-container
      .profile-image
        img(src='/images/avatar/avatar.jpg')
    .profile-content-container
      h2.profile-content-header Hi there
      p.profile-content-body I'm Tanner, and this is my website! Wow, you probably already knew those things. Anyway, the only thing really here so far is my weekly <a href='/comics'>webcomic</a>. But check back periodically for new things!
    
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang='scss', scoped>

.about-page-wrapper {
  display: flex;
  margin-right: 10px;
  margin-left: 10px;

  justify-content: center;

  @media #{$desktop} {
    margin-left: 50px;
    margin-right: 50px;
  }

  .profile-image {
    height: 300px;
    border: 4px solid black;
    border-radius: 100%;
    overflow: hidden;

    margin: auto 50px;

    img {
      height: 100%;
    }
  }

  .profile-content-container {
    max-width: 400px;

    .profile-content-header {
      font-size: 24px;

      margin-bottom: 20px;
    }
  }
}

</style>
