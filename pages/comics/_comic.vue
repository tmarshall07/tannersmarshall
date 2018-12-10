<template lang="pug">
  .comic-page-wrapper
    
    .comic-container
      h2.comic-title {{ posts[activePost].name }}
      p.comic-date
      
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
	// validate ({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id)
	// }
	components: {
    
  },
  data () {
    return {
      activePost: 0,
      posts: [
        { id: 7, imageId: 'oh-technology', name: 'Oh, technology', date: '11/27/18' },
        { id: 6, imageId: 'hawt-sauwce', name: 'Hawt sauwce', date: '11/27/18' },
        { id: 5, imageId: 'octopus-foot', name: 'Octopus foot', date: '11/20/18' },
        { id: 4, imageId: 'you-too', name: 'You too!', date: '11/13/18' },
        { id: 3, imageId: 'guilt-trip-machine', name: 'Guilt trip machine', date: '11/06/18' },
        { id: 2, imageId: 'name-forgetter-extraordinaire', name: 'Name forgetter extraordinaire', date: '10/30/18' },
        { id: 1, imageId: 'nature-such-beauty', name: 'Nature such beauty', date: '10/23/18' },
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
	mounted () {
		// Get comic id from params if it exists and route to that comic
		const comicId = this.$route.params.comic
		if (comicId) {
			const comic = this.posts.find(post => post.id.toString() === comicId);
			if (comic) this.activePost = (comic.id - 1);
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

  margin-right: 50px;
  margin-left: 50px;

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
  align-items: center;

  .comic-date {
    margin: auto 30px;

    color: $light-grey-10;

    font-size: 16px;  
  }
}

</style>
