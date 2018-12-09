<template lang="pug">
  .comic-page-wrapper
    
    .comic-container
      h2.comic-title {{ posts[activePost].name }}
      
      .comic-strip
        .comic-strip-panel
          img(v-bind:src="`/images/comics/${posts[activePost].imageId}/1.jpg`")
        .comic-strip-panel
          img(v-bind:src="`/images/comics/${posts[activePost].imageId}/2.jpg`")
        .comic-strip-panel
          img(v-bind:src="`/images/comics/${posts[activePost].imageId}/3.jpg`")

    .comic-nav
      button.button.next-button(v-on:click="nextClick", :disabled="isMostRecentPost")
        | next
        i.fal.fa-arrow-right-alt
      .comic-date {{ posts[activePost].date}}
      button.button.previous-button(v-on:click="previousClick", :disabled="isOldestPost")
        | prev.
        i.fal.fa-arrow-left-alt
</template>

<script>

// Find and return most recent post
function getMostRecent (posts) {
  let mostRecentPost = posts[0];
  let mostRecentPostDate = moment(mostRecentPost.date);

  for (let i = 0; i < posts.length; i += 1) {
    const post = moment(posts[i].date);
    if (post.diff(mostRecentPostDate, 'days') > 0) {
      mostRecentPost = posts[i];
    }
  }

  return mostRecentPost;
}

export default {
  components: {
    
  },
  data () {
    return {
      activePost: 0,
      posts: [
        { imageId: 'guilt-trip-machine', name: 'Guilt trip machine', date: '11/06/18' },
        { imageId: 'nature-such-beauty', name: 'Nature such beauty', date: '10/23/18' },
      ],
    }
  },
  computed: {
    isMostRecentPost: function () {
      return this.activePost - 1 < 0;
    },
    isOldestPost: function () {
      return this.activePost + 1 >= this.posts.length;
    }
  },
  methods: {
    nextClick: function (event) {
      this.activePost -= 1;
    },
    previousClick: function (event) {
      this.activePost += 1;
    },
  },
}
</script>

<style lang="scss" scoped>

.comic-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .comic-strip {
    display: flex;
    max-width: 1200px;

    .comic-strip-panel {
      
      img {
        width: 100%;
      }
    }
  }
}

.comic-nav {
  display: flex;
  justify-content: center;
}

</style>
