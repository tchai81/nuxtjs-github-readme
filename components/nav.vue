<template>
  <div class="shadow navbar-dark d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
    <section class="container">
      <h5 class="text-left navbar-brand header my-0 mr-md-auto font-weight-normal">
        <nuxt-link :to="backAction.url" v-if="backAction.enabled">
          <back-button class="back"/>
        </nuxt-link>
        <span class="ml-3">{{ title }}</span>
      </h5>
    </section>
  </div>
</template>

<script>
import BackButton from '~/assets/icon/backButton.svg'
export default {
  props: ['title', 'backAction'],
  components: {
    BackButton
  }
}
</script>

<style scoped lang="less">
.navbar-dark {
  background-color: #474849;
}
.back {
  width: 20px;
  height: 20px;
}
</style>