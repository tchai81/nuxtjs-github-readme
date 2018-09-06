<template>
  <section>
    <top-nav :title="name" :backAction="backAction" />
    <main role="main" class="p-3 container">
      <template v-if="error">
          <div class="alert alert-danger">
            <strong>{{ error }}</strong>
          </div>
      </template>
      <template v-else>
        <div class="markdown-body shadow p-4 pt-3 pb-3" v-html="readme"></div>
      </template>
    </main>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import TopNav from '~/components/nav'
export default {
  components: {
    TopNav
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
  methods: {
    ...mapActions({
      fetchReadmeByRepoAndUser: 'github/fetchReadmeByRepoAndUser'
    })
  },
  mounted() {
    this.fetchReadmeByRepoAndUser({
      name: this.name,
      user: this.user
    })
  },
  computed: {
    readme() {
      return this.$store.state.github.repo.readme
    },
    error() {
      return this.$store.state.github.repo.error
    }
  }
}
</script>