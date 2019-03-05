<template lang="pug">
  .archive-page-wrapper
    .posts-container
      .post-container(v-for="post in posts", @click="goToComic(post.id)")
        .post(:href="`/comics/${post.id}`")
          span.post-title {{ post.name }}
          span.post-date &nbsp;{{ post.date }}

</template>

<script>
import { posts } from '~/assets/posts';
import _ from 'underscore';

export default {
  components: {

  },
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.posts = posts;
  },
  methods: {
    goToComic(id) {
      window.location.href = `/comics/${id}`;
    },
  }
}
</script>

<style lang='scss', scoped>

  .archive-page-wrapper {
    display: flex;
    justify-content: center;
  }

  .posts-container {
    max-width: 350px;
  }

  .post-container {
    font-size: 18px;
    padding: 3px 8px;
    border-radius: 3px;

    cursor: pointer;

    .post-date {
      color: $light-grey-10;
    }

    &:hover, &:focus {
      background: black;

      color: white;

      .post-date {
        color: rgba(255, 255, 255, .6);
      }
    }
  }

  .link {
    text-decoration: none;
  }

</style>
