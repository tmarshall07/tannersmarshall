<template lang="pug">
  .navbar-container
    .navbar-list
      .navbar-list-item(v-for="navItem in navItems") {{ navItem.name }}
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      navItems: [
        { name: 'Home' },
        { name: 'Comics' },
        { name: 'Videos' },
      ],
    }
  },
}

</script>

<style lang="scss" scoped>

.navbar-list {
  display: flex;

  .navbar-list-item {
    padding: 10px 15px;
  }
}

</style>
