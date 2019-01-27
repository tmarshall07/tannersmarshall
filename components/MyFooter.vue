<template lang="pug">
  .footer-content
    .footer-container
      .footer-social
        a.footer-social-instagram.social-icon(href="https://www.instagram.com/tanner.s.marshall/" target="_blank")
          instagram
        //- .fb-share-button(data-href="https://developers.facebook.com/docs/plugins/")
        //-   a.footer-social-facebook.social-icon(href="https://tannersmarshall.com/comics/5", target="_blank")
        //-     facebook
        .footer-social-linked-in.social-icon
      .footer-info
        span.footer-name T.
        span.footer-date {{ date }}
</template>

<script>

// import Facebook from '~/components/svgs/social/Facebook';
import Instagram from '~/components/svgs/social/Instagram';

export default {
  components: {
    // Facebook,
    Instagram,
  },
  data () {
    return {
      date: new Date().getFullYear(),
    }
  },
}

</script>

<style lang="scss">

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

    opacity: .15;

    &:hover {
      opacity: 1;
    }

    path.background {
      fill: black;
    }

    stop {
      stop-color: black;
    }
  }

  &.footer-social-facebook:hover {
    svg path.background {
      fill: rgb(66,103,178);
    }
  }

  &.footer-social-instagram:hover {
    stop:nth-child(1) {
      stop-color:rgb(255,219,41);
    }

    stop:nth-child(2) {
      stop-color:rgb(253,162,28);
    }

    stop:nth-child(3) {
      stop-color:rgb(250,36,0);
    }

    stop:nth-child(4) {
      stop-color:rgb(212,44,146);
    }

    stop:nth-child(5) {
      stop-color:rgb(200,47,193);
    }
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
