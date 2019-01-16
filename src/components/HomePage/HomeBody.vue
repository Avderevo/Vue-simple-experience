<template>
  <div>
    <b-container class="bv-example-row mb-5">
      <b-row>
        <b-col md="9"  sm="12">
           <span v-for="b in blog.articles" :key="b.id">
              <BlogCard v-bind:article="{data:b}"></BlogCard>
           </span>
          <div class="mt-5">
            <b-pagination align="center" size="sm" :total-rows="5"  :per-page="2"></b-pagination>
          </div>
        </b-col>
        <b-col cols="3">
          <SubscribeCard></SubscribeCard>
          <NewsList></NewsList>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BlogCard from '@/components/HomePage/BlogCard'
import SubscribeCard from '@/components/HomePage/SubscribeCard'
import NewsList from '@/components/HomePage/NewsList'

export default {
  name: 'HomeBody',
  components: {BlogCard, SubscribeCard, NewsList},
  data () {
    return {
      loading: false,
      blog: [],
      error: null
    }
  },
  mounted () {
    this.getArticles()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    getArticles () {
      this.error = this.blog = null
      this.loading = true
      const url = 'static/articles.json'
      const requestOptions = {
        method: 'GET'
      }
      return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => (this.blog = data))
        .then(this.loading = false)
        .catch(error => (this.error = error))
    }
  }
}

</script>

<style scoped>

</style>
