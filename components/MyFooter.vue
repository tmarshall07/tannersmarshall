<template lang="pug">
  .footer-content
    .footer-container
      span.footer-name Tanner M.
      span.footer-date {{ date }}
</template>

<script>

export default {
  components: {

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

.footer-date {
	margin-left: 5px;
}

</style>
