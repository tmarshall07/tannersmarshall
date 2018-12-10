<template lang="pug">
  section.container
    div
      logo
      h1.title
        | tanners-website
      h2.subtitle
        | My bedazzling Nuxt.js project
      .links
        a.button--green(href='https://nuxtjs.org/', target='_blank') Documentation
        a.button--grey(href='https://github.com/nuxt/nuxt.js', target='_blank') GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
