<template lang="pug">
  .navbar-container
    .navbar-list
      router-link.navbar-list-item(v-for="navItem in navItems", v-bind:to="navItem.link" :key='navItem.id') {{ navItem.name }}
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      navItems: [
        { name: 'comics', link: '/comics', id: 2 },
        { name: 'about', link: '/about', id: 1 },
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
    font-family: 'Permanent Marker';
    font-size: 20px;

    padding: 10px 15px;
    border-radius: 3px;

    text-decoration: none;

    color: black;

    margin-right: 15px;

    &:hover, &.nuxt-link-active {
      background: none;
      background-image: url('/nav/nav-item-background.png');
      background-size: contain;
      background-repeat: no-repeat;
      color: white;
    }
  }
}

</style>
