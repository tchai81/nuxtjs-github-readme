<template>
  <section>
    <top-nav :title="name" :backAction="backAction" />
    <loader v-if="showLoader"/>
    <main v-if="!showLoader" role="main" class="p-3 container">
      <error :error="error" v-if="error"/>
      <div v-else class="markdown-body shadow p-4 pt-3 pb-3" v-html="readme"></div>
    </main>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import TopNav from '~/components/nav'
import Error from '~/components/error'
import Loader from '~/components/loader'
export default {
  components: {
    TopNav,
    Error,
    Loader
  },
  data() {
    return {
      user: this.$route.params.user,
      name: this.$route.params.repo,
      backAction: {
        enabled: true,
        url: {
          name: 'user',
          params: { user: this.$route.params.user }
        }
      }
    }
  },
  mounted() {
    this.fetchReadmeByRepoAndUser({
      name: this.name,
      user: this.user
    })
  },
  methods: {
    ...mapActions({
      fetchReadmeByRepoAndUser: 'github/fetchReadmeByRepoAndUser'
    })
  },
  computed: {
    readme() {
      return this.$store.state.github.repo.readme
    },
    error() {
      return this.$store.state.github.repo.error
    },
    showLoader() {
      return this.$store.state.github.showLoader
    }
  }
}
</script>