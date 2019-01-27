<template lang="pug">
  .about-page-wrapper
    .profile-image-container
      .profile-image
        img(src='/images/about/waving.png')
    .profile-content-container
      .text-section
        h1.profile-content-header Hi there
        p I'm Tanner, and this is my website! Wow, you probably already knew those things. Anyway, this is where I publish my weekly <a class="link" href="/comics">webcomics</a>.
      .text-section
        h2 General stuff
        p I'm a native Minnesotan, but I've also been in transience for the past 10-ish years, most recently settling in Baltimore, Maryland. By day, I draw cartoon organs, write code, record voiceovers, and do other odds and ends for <a class='osmosis-link link' href='http://www.osmosis.org' target='_blank'>Osmosis</a>, a medical education company trying to change the way we learn medicine!
    
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
  flex-direction: column;
  
  margin-right: 10px;
  margin-left: 10px;

  justify-content: center;
  align-items: center;

  @media #{$desktop} {
    flex-direction: row;
    margin-left: 50px;
    margin-right: 50px;
  }

  .profile-image {
    height: 400px;

    margin: auto 50px;

    img {
      height: 100%;
    }
  }

  .profile-content-container {
    max-width: 400px;
  }

  .text-section {
    margin-bottom: 20px;
  }
}

</style>
