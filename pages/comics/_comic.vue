<template lang="pug">
  .comic-page-wrapper
    
    .comic-container
      h2.comic-title {{ posts[activePost].name }}
      p.comic-date

      //- .comic-strip-transition-wrapper

      transition(name="fade")
        comic-strip(v-if="!postVisible", :post="posts[activePost]")

      //- transition(name="fade")
      //-   comic-strip(v-if="postVisible", :post="posts[2]")

      //- button.button(@click="postVisible = !postVisible")

    .comic-nav
      .next-button(@click.left="nextClick", :class="{ hidden: isMostRecentPost }")
        img(src='/icons/arrow-left.png')
      .comic-date {{ moment(posts[activePost].date, 'MM-DD-YY').format('MM.DD.YY') }}
      .previous-button(@click="previousClick", :class="{ hidden: isOldestPost }")
        img(src='/icons/arrow-right.png')
</template>

<script>

import ComicStrip from '~/components/comics/ComicStrip';

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
    ComicStrip,
  },
  data () {
    return {
      postVisible: false,
      activePost: 0,
      moment,
      posts: [
        { id: 8, imageId: 'whats-for-breakfast', name: 'But what\'s for breakfast?', date: '12/13/18' },
        { id: 7, imageId: 'oh-technology', name: 'Oh, technology', date: '12/4/18' },
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

@import url('https://fonts.googleapis.com/css?family=Caveat+Brush');

.comic-title {
  font-family: 'Caveat Brush';
}

.comic-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 15px;

  @media only screen and (min-width: $desktop) {
    margin-right: 50px;
    margin-left: 50px;
  }

  .comic-title {
    margin-bottom: 15px;
    font-size: 32px;
  }
}

.comic-nav {
  display: flex;
  justify-content: center;
  align-items: center;

  .comic-date {
    margin: auto 30px;
    width: 75px;

    font-family: 'Permanent Marker';
    font-size: 20px;
    text-align: center;
  }

  .previous-button, .next-button {
    cursor: pointer;
    height: 50px;
    padding: 10px;

    img {
      height: 100%;
    }

    &.hidden {
      visibility: hidden;
    }
  }
}

// Transitions
.comic-strip-transition-wrapper {
  max-width: 1200px;
  min-width: 900px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
