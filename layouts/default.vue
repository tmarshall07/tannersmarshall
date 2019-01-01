<template>
  <div>
    <navbar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import MyFooter from '~/components/MyFooter.vue';

export default {
  components: {
    Navbar,
    MyFooter,
  },
  data () {
    return {
      
    }
  },
}

</script>

<style>

</style>
