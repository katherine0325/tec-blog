import ArticleLine from '@/components/ArticleLine'
import { getArticleList } from '@/api'
import { Loading } from '@/lib/loading'

export default {
  name: 'Home',
  components: {
    ArticleLine
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      Loading.show(this)
      const list = await getArticleList()
      this.list = list
      Loading.hide()
    }
  }
}
