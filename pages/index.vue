<template lang="pug">
</template>

<script>

export default {
  components: {

  },
  // Redirect to /comics
  asyncData ({ redirect }) {
    return redirect('/comics')
  },
}
</script>

<style>

</style>
