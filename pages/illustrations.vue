<template lang="pug">
  .illustrations-page-wrapper
    .illustration-container(v-for="image in images" :key='image.prompt')
      illustration(:imgSrc="`${s3Url}${image.src}`")
</template>

<script>

import Illustration from '~/components/illustrations/Illustration';

export default {
  components: {
    Illustration,
  },
  data () {
    return {
      s3Url: 'https://tannersmarshall.s3.us-east-2.amazonaws.com/illustrations/inktober2019/',
      images: [
        { prompt: 'ring', src: '1.jpg' },
        { prompt: 'mindless', src: '2.jpg' },
        { prompt: 'bait', src: '3.jpg' },
        { prompt: 'freeze', src: '4.jpg' },
        { prompt: 'build', src: '5.jpg' },
        { prompt: 'husky', src: '6.jpg' },
        { prompt: 'enchanted', src: '7.jpg' },
        { prompt: 'frail', src: '8.jpg' },
        { prompt: 'swing', src: '9.jpg' },
        { prompt: 'pattern', src: '10.jpg' },
        { prompt: 'snow', src: '11.jpg' },
        { prompt: 'dragon + ash', src: '12.jpg' },
        { prompt: 'overgrown', src: '14.jpg' },
        { prompt: 'legend', src: '15.jpg' },
        { prompt: 'wild', src: '16.jpg' },
        { prompt: 'ornament', src: '17.jpg' },
        { prompt: 'misfit', src: '18.jpg' },
        { prompt: 'sling', src: '19.jpg' },
        { prompt: 'tread', src: '20.jpg' },
        { prompt: 'treasure', src: '21.jpg' },
        { prompt: 'ghost', src: '22.jpg' },
        { prompt: 'ancient', src: '23.jpg' },
        { prompt: 'dizzy', src: '24.jpg' },
        { prompt: 'tasty + dark', src: '25.jpg' },
        { prompt: 'coat', src: '27.jpg'},
        { prompt: 'ride', src: '28.jpg' },
        { prompt: 'injured', src: '29.jpg' },
        { prompt: 'catch', src: '30.jpg' },
        { prompt: 'ripe', src: '31.jpg' },
      ],
    }
  },
}

</script>

<style lang="scss" scoped>

.illustrations-page-wrapper {
  display: flex;
  flex-wrap: wrap;
  
  margin-right: 10px;
  margin-left: 10px;

  justify-content: center;
  align-items: center;
}

.illustration-container {
  display: flex;
}

</style>
