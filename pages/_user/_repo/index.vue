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
        <div class="shadow p-4 pt-3 pb-3" v-html="readme"></div>
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

<style lang="less">
// taken from highlight.js demo
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px; // 14px to 13px
  line-height: 1.42;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;

  code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }
}
</style>