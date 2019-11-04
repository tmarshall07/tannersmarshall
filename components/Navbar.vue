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
        { name: 'about', link: '/about', id: 1 },
        { name: 'comics', link: '/comics', id: 2 },
        { name: 'illustrations', link: '/illustrations', id: 3 },
        { name: 'archive', link: '/archive', id: 4 },
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
    font-family: 'Nanum Pen Script';
    font-size: 24px;

    padding: 10px 15px;
    /* border-radius: 3px; */

    text-decoration: none;

    color: black;

    margin-right: 15px;

    &:hover, &.nuxt-link-active {
      border-bottom: 2px solid black;
      /* background: none;
      background-image: url('/nav/nav-item-background.png');
      background-size: contain;
      background-repeat: no-repeat; */
      /* color: white; */
    }
  }
}

</style>
