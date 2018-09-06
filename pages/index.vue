<template>
  <section>
    <top-nav :title="title" :backAction="backAction" />
    <main role="main" class="container">
      <input-user />
    </main>
  </section>
</template>

<script>
import TopNav from '~/components/nav'
import InputUser from '~/components/input'
export default {
  components: {
    TopNav,
    InputUser
  },
  data() {
    return {
      title: 'Github Demo Project',
      backAction: {
        enabled: false,
        url: null
      }
    }
  }
}
</script>



