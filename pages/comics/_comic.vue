<template lang="pug">
  .comic-page-wrapper
    
    .comic-container
      h2.comic-title {{ activePost.name }}
      .comic-date {{ formatDate(activePost.date) }}

      transition(name="fade")
        comic-strip(v-if="!postVisible", :post="activePost")

      //- transition(name="fade")
      //-   comic-strip(v-if="postVisible", :post="posts[2]")

      //- button.button(@click="postVisible = !postVisible")

    .comic-nav
      .next-button(@click="nextPost", :class="{ hidden: isMostRecentPost }")
        img(src='/icons/arrow-left.png')
      button.button.random-button(@click="randomComicClick") random
      .previous-button(@click="previousPost", :class="{ hidden: isOldestPost }")
        img(src='/icons/arrow-right.png')
</template>

<script>

import ComicStrip from '~/components/comics/ComicStrip';
import * as moment from 'moment';

export default {
  components: {
    ComicStrip,
  },
  data () {
    return {
      postVisible: false,
      panelModalVisible: true,
      activePostId: 1,
      posts: [
        { id: 12, imageId: 'wet-hands', name: 'Air drying', date: '01/11/19', title: 'I was just in the bathroom...It\'s just water...from washing my hands. It\'s not pee.' },
        { id: 11, imageId: 'camping-creeps', name: 'Psst, you still awake?', date: '01/04/19', title: 'I\'ts all fun and games until the sun goes down.' },
        { id: 10, imageId: 'middle-seats', name: 'Middle seats', date: '12/28/18', title: 'Umm. Excuse me. You\'re elbow is in my ribcage. Thanks.' },
        { id: 9, imageId: 'all-the-flavors', name: 'All the flavors', date: '12/21/18', title: 'Oh, and also a scoop of the peanut butter chocolate swirl please.' },
        { id: 8, imageId: 'whats-for-breakfast', name: 'But what\'s for breakfast?', date: '12/13/18', title: 'The sooner we go to bed, the sooner we can eat breakfast.' },
        { id: 7, imageId: 'oh-technology', name: 'Oh, technology', date: '12/4/18', title: 'Have you seen that app that lets you turn off all your apps?' },
        { id: 6, imageId: 'hawt-sauwce', name: 'Hawt sauwce', date: '11/27/18', title: 'It\'s enjoyable, I swear!' },
        { id: 5, imageId: 'octopus-foot', name: 'Octopus foot', date: '11/20/18', title: 'Kat: "Hi, I\'m wondering if you have any bryophytes in stock?"\nPlant nursery guy: "Excuse me?"\nKat: "Like, moss?"\nPlant nursery guy:"Yes...we have moss."' },
        { id: 4, imageId: 'you-too', name: 'You too!', date: '11/13/18', title: 'Do I...give the food back to him?' },
        { id: 3, imageId: 'guilt-trip-machine', name: 'Guilt trip machine', date: '11/06/18', title: 'Don\'t judge me credit card machine.' },
        { id: 2, imageId: 'name-forgetter-extraordinaire', name: 'Name forgetter extraordinaire', date: '10/30/18', title: 'Hey...you! Good to see you again!' },
        { id: 1, imageId: 'nature-such-beauty', name: 'Nature such beauty', date: '10/23/18', title: 'You should see what happens when it\'s a moth.' },
      ],
    }
  },
  computed: {
    isMostRecentPost: function () {
      return this.activePostId === this.posts.length;
    },
    isOldestPost: function () {
      return this.activePostId === 1;
    },
    activePost: function () {
      return this.posts.find(post => post.id.toString() === this.activePostId.toString());
    },
  },
  created () {
    // Get comic id from params if it exists and route to that comic
    const post = this.posts.find(p => p.id.toString() === this.$route.params.comic);
    // If it exists, set active post as the comic, else set to most recent post
    if (post) {
      this.activePostId = post.id;
    } else {
      this.activePostId = this.getMostRecent().id;
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.nextPost();
      else if (e.key === 'ArrowRight') this.previousPost();
    });
  },
  methods: {
    // Cycle to next post
    nextPost: function () {
      if (!this.isMostRecentPost) this.changeComic(this.activePostId + 1);
    },
    // Cycle to previous post
    previousPost: function () {
      if (!this.isOldestPost) this.changeComic(this.activePostId - 1);
    },
    formatDate: function (date) {
      return moment(date, 'MM-DD-YY').format('MM.DD.YY');
    },
    changeComic: function (comicId) {
      this.activePostId = comicId;
      window.history.pushState({ id: comicId }, '', `/comics/${comicId}`);
    },
    getMostRecent: function () {
      let mostRecentPost = this.posts[0];
      let mostRecentPostDate = moment(mostRecentPost.date, 'MM-DD-YY');

      for (let i = 0; i < this.posts.length; i += 1) {
        const post = moment(this.posts[i].date, 'MM-DD-YY');
        if (post.diff(mostRecentPostDate, 'days') > 0) {
          mostRecentPost = this.posts[i];
        }
      }

      return mostRecentPost;
    },
    randomComicClick: function () {
      // Randomly select a new comicId and update
      this.changeComic(Math.floor(Math.random() * this.posts.length) + 1);
    },
  },
}
</script>

<style lang="scss" scoped>

.comic-title {
  font-family: 'Nanum Pen Script';
  margin-bottom: 0;
}

.comic-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 15px;

  @media #{$desktop} {
    margin-right: 50px;
    margin-left: 50px;
  }

  .comic-title {
    font-size: 32px;
  }
}

.comic-date {
  margin: auto 30px;
  margin-bottom: 10px;
  width: 75px;

  font-family: 'Nanum Pen Script';
  font-size: 24px;
  text-align: center;
}

.comic-nav {
  display: flex;
  justify-content: center;
  align-items: center;

  .previous-button, .next-button {
    cursor: pointer;
    height: 75px;
    padding: 10px;

    img {
      height: 100%;
    }

    &.hidden {
      visibility: hidden;
    }
  }

  .random-button {
    border: 2px solid black;

    margin-left: 30px;
    margin-right: 30px;
    
    font-size: 32px;
    font-family: 'Nanum Pen Script';

    padding: .25em .5em;
  }

  @media #{$desktop} {   
    .next-button, .previous-button {
      height: 50px;
    }
    
    .random-button {
      font-size: 24px;
      margin-left: 15px;
      margin-right: 15px;
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
