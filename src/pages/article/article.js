import marked from 'marked'
import { getArticle } from '@/api'
import { Loading } from '@/lib/loading'

export default {
  name: 'Article',
  data () {
    return {
      title: '',
      labels: [],
      articleHtml: '<div></div>'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      Loading.show(this)
      const result = await getArticle(this.$route.query.article_number)
      this.articleHtml = marked(result.body)
      this.title = result.title
      this.labels = result.labels
      Loading.hide()
    }
  }
}
