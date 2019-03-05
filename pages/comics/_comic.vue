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

import { posts } from '~/assets/posts';

export default {
  components: {
    ComicStrip,
  },
  data () {
    return {
      postVisible: false,
      panelModalVisible: true,
      activePostId: 1,
      posts: [],
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
    this.posts = posts;
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
    border-bottom: 5px solid black;

    margin-left: 30px;
    margin-right: 30px;
    
    font-size: 32px;
    font-family: 'Nanum Pen Script';

    padding: .25em .5em;

    &:hover, &:active, &:focus {
      background: transparent;
      color: black;
    }

    &:active {
      border-bottom: 2px solid black;
      transform: translateY(2px);
    }
  }

  @media #{$desktop} {   
    .next-button, .previous-button {
      height: 50px;
    }
    
    .random-button {
      font-size: 24px;
      margin-left: 15px;
      margin-right: 15px;

      &:active {
        transform: translateY(1px);
      }
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
