import axios from 'axios'
import { reposTransformer, repoTransformer } from '~/transformers/github'

export const state = () => ({
    repos: {
        error: '',
        data: []
    },
    repo: {
        error: '',
        readme: ''
    }
})

export const mutations = {
    SET_REPOS_ERROR(state, error) {
        state.repos.error = error
    },
    SET_REPOS_DATA(state, repos) {
        state.repos.data = repos
    },
    SET_REPO_ERROR(state, error) {
        state.repo.error = error
    },
    SET_REPO_README(state, repo) {
        state.repo.readme = repo
    }
}

export const actions = {
    fetchReposByUser(state, user) {
        state.commit('SET_REPOS_ERROR', '')
        state.commit('SET_REPOS_DATA', '')
        const url = `https://api.github.com/users/${user}/repos`
        axios
            .get(url)
            .then(response => {
                if (response.data.length) {
                    state.commit('SET_REPOS_DATA', reposTransformer(response.data))
                } else {
                    state.commit('SET_REPOS_ERROR', `${user} contains no repositories.`)
                }
            })
            .catch(error => {
                state.commit('SET_REPOS_ERROR', error.response.data.message)
            })
    },
    fetchReadmeByRepoAndUser(state, repo) {
        const url = `https://api.github.com/repos/${repo.user}/${repo.name}/readme`
        state.commit('SET_REPO_ERROR', '')
        state.commit('SET_REPO_README', '')
        axios
            .get(url)
            .then(response => {
                const readme = response.data.content
                if (readme) {
                    state.commit('SET_REPO_README', repoTransformer(readme))
                } else {
                    state.commit('SET_REPO_ERROR', 'This repository contains no readme.')
                }
            })
            .catch(error => {
                state.commit('SET_REPO_ERROR', error.response.data.message)
            })
    }
}