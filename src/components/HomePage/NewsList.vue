<template>
    <div>
      <div class="news-title text-center">
        News:
      </div>
      <span v-for="article in blog.articles" :key="article.id">
        <div class="list-news">
          <div class="mb-3">
            <b-link class="news-link" :to="{name: 'BlogPage', params:{blogId: article.id}}">
                {{article.description}}<span class="news-link-arrow"> &#8658;</span>
            </b-link>
          </div>
          <hr>
        </div>
      </span>
    </div>
</template>

<script>
export default {
  name: 'NewsList',
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
    '$route': 'NewsList'
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
  .news-title{
    font-size: 2rem;
    color: #293d50;
    font-weight: 400;
    margin-bottom: 1.4rem;
  }
  .list-news{
    position: relative;
    margin-bottom: 1rem;
  }
  .news-link{
    font-size: 1rem;
    color: cadetblue;
    font-weight: 400;
  }
  .news-link-arrow{
    color: tomato;
    font-size: 1rem;
  }
</style>
