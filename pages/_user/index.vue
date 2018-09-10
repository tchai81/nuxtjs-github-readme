<template>
  <section >
    <top-nav :title="title" :backAction="backAction" />
    <main role="main" class="pl-5 container">
      <h4 class="pt-3 pb-4">Projects</h4>
      <div class="pb-4">
        <error :error="error" v-if="error"/>
        <ul v-else-if="repos" class="shadow list-group">
          <li @click="navigate(user, repo.name)" class="text-center border-0 p-4 list-group-item" :key="repo.name" v-for="repo in repos">
            <span>{{repo.name}}</span>
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import TopNav from '~/components/nav'
import Error from '~/components/error'
export default {
  components: {
    TopNav,
    Error
  },
  data() {
    return {
      backAction: {
        enabled: true,
        url: {
          path: '/'
        }
      }
    }
  },
  mounted() {
    this.fetchReposByUser(this.user)
  },
  methods: {
    ...mapActions({
      fetchReposByUser: 'github/fetchReposByUser'
    }),
    navigate(user, repoName) {
      this.$router.replace({ name: 'user-repo', params: { user: user, repo: repoName } })
    }
  },
  computed: {
    title() {
      return `${this.user}'s projects`
    },
    user() {
      return this.$route.params.user
    },
    repos() {
      return this.$store.state.github.repos.data
    },
    error() {
      return this.$store.state.github.repos.error
    }
  }
}
</script>

<style scoped lang="less">
ul {
  li {
    &:hover {
      background-color: #60d18c;
      span {
        color: #fff;
      }
    }
    span {
      font-size: 18px;
      font-weight: 500;
      color: #000;
      text-decoration: none;
    }
    background-color: #f5f9fc;
    cursor: pointer;
  }
}
</style>
