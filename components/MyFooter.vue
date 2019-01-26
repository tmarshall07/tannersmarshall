<template lang="pug">
  .footer-content
    .footer-container
      .footer-social
        .footer-social-instagram.social-icon
          instagram
        .footer-social-facebook.social-icon
          facebook
        .footer-social-linked-in.social-icon
      .footer-info
        span.footer-name T.
        span.footer-date {{ date }}
</template>

<script>

import Facebook from '~/components/svgs/social/Facebook';
import Instagram from '~/components/svgs/social/Instagram';

export default {
  components: {
    Facebook,
    Instagram,
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
  align-items: center;
  flex-direction: column;

	margin-top: 30px;

	color: $light-grey-30;
}

.social-icon {
  margin: 0 5px;

  cursor: pointer;

  svg {
    width: 35px;
  }
}

.footer-social {
  display: flex;

  margin-bottom: 15px;
}

.footer-date {
	margin-left: 5px;
}

</style>
