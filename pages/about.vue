<template lang="pug">
  .about-page-wrapper
    .profile-image-container
      .profile-image
        img(src='/images/avatar/avatar.jpg')
    .profile-content-container
      h2.profile-content-header Hi there
      p I'm Tanner, and this is my website! Wow, you probably already knew those things. Anyway, the only thing really here so far is my weekly <a href='/comics'>webcomic</a>. But check back periodically for new things!
      
      h3 General stuff
      p I'm a native Midwesterner—born and raised Minnesotan—but I've also lived in Madison, Wisconsin, Portland, Oregon, and Vancouver, BC, Canada. With our most recent settlement being built in Baltimore, Maryland.
    
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

    h3 {
      margin-bottom: 15px;
      margin-top: 30px;
    }

    .profile-content-header {
      font-size: 24px;

      margin-bottom: 20px;
    }
  }
}

</style>
