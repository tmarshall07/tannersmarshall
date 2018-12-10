<template lang="pug">
  .navbar-container
    .navbar-list
      a.navbar-list-item(v-for="navItem in navItems", v-bind:href="navItem.link") {{ navItem.name }}
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      navItems: [
        { name: 'home', link: '/' },
        { name: 'comics', link: '/comics' },
        // { name: 'Videos', link: '/videos' },
      ],
    }
  },
}

</script>

<style lang="scss" scoped>

.navbar-list {
  display: flex;

  padding-left: 10%;
  padding-top: 15px;
  padding-bottom: 15px;

  .navbar-list-item {
    padding: 10px 15px;
    border-radius: 3px;

    text-decoration: none;

    color: black;

    &:hover {
      background: black;
      color: white;
    }
  }
}

</style>
