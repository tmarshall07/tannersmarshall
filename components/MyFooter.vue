<template lang="pug">
  .footer-content
    .footer-container
      .footer-social
        .footer-social-instagram.social-icon
          facebook
        .footer-social-facebook.social-icon
        .footer-social-linked-in.social-icon
      .footer-info
        span.footer-name T.
        span.footer-date {{ date }}
</template>

<script>

import Facebook from '~/components/svgs/social/Facebook';

export default {
  components: {
    Facebook
  },
  data () {
    return {
      date: new Date().getFullYear(),
    }
  },
}

</script>

<style lang="scss" scoped>

.footer-container {
	display: flex;
	justify-content: center;

	margin-top: 30px;

	color: $light-grey-30;
}

.social-icon {
  svg {
    width: 30px;
  }
}

.footer-date {
	margin-left: 5px;
}

</style>
