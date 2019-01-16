<template>
<div>
  <Navbar></Navbar>
  <Header></Header>
  <Menu></Menu>
  <div>
    <BlogContent v-bind:art="{blog: now}"></BlogContent>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import Footer from '@/components/common/Footer'
import BlogContent from '@/components/BlogPage/BlogContent'

export default {
  name: 'BlogPage',
  components: {Navbar, Header, Menu, Footer, BlogContent},
  data () {
    return {
      loading: false,
      article: {},
      error: null
    }
  },
  mounted () {
    this.getArticle()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'BlogPage'
  },
  methods: {
    getArticle () {
      this.error = null
      this.loading = true
      const url = 'static/article.json'
      const requestOptions = {
        method: 'GET'
      }
      return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => (this.article = data))
        .then(this.loading = false)
        .catch(error => (this.error = error))
    }
  },
  computed: {
    now: function () {
      const id = this.$route.params.blogId
      return this.article[id]
    }
  }
}
</script>
