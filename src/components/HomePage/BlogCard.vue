<template>
  <div>
    <b-card img-top
            tag="article"
            style="max-width: 80rem;"
            class="mb-2 blog-card">
      <div class="text-center blog-title-block">
        <div class="blog-title">{{article.data.title}}</div>
      </div>
      <div class="mb-4">
        <img class="card-img img-fluid" :src="require(`../../../img/${article.data.img_url}.jpg`)"/>
      </div>
      <p class="card-text">
        {{article.data.description}}
      </p>
      <span class="date-text">{{article.data.date}}</span>
      <b-button :to="{name: 'BlogPage', params:{blogId: article.data.id}}" class="blog-button float-right" variant="float-right">READING&nbsp;&#8658;</b-button>
    </b-card>
  </div>

</template>

<script>

export default{
  name: 'BlogCard',
  props: ['article']
}
</script>

<style scoped>
  .blog-card{
    border: 0;
    padding: 0;
    border-radius: 4px;
    margin: 0;
    background-color: #f5f6f9db;
  }
  .blog-title-block{
    margin-bottom: 1.5rem;
  }
  .blog-title{
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    margin-bottom: 5px;
  }
  .card-text{
    margin-bottom: 1.6rem;
  }
  .date-text{
    font-size: .9rem;
    font-weight: 800;
    color: #297298;
  }
  .blog-button{
    border-radius: 4px;
    border-color: tomato;
    color: tomato;
    padding: 5px 15px;
    font-size: .8rem;
  }

</style>
