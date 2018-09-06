import MarkdownIt from 'markdown-it'
import Hljs from 'highlight.js'

const reposTransformer = repos => {
    const result = []
    repos.forEach(repo => {
        result.push({
            name: repo.name
        })
    })
    return result
}

const repoTransformer = repo => {
    const md = new MarkdownIt().disable(['image'])
    return md.render(atob(repo))
}

export { reposTransformer, repoTransformer }