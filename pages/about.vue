<template lang="pug">
  .about-page-wrapper
    .profile-image-container
      .profile-image
        img(src='/images/avatar/avatar.jpg')
    .profile-content-container
      .profile-content-header Hi there
      .profile-content-body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      
    
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
    width: 300px;

    img {
      width: 100%;
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
