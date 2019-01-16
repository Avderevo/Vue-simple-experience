<template>
  <div class="blog-content">
    <div class="container">
      <div class="story-title">
        {{art.blog.title}}
      </div>
      <div class="story-body mb-4">
        <span v-for="n in 20"  :key="n">
          {{art.blog.text}}
        </span>
      </div>
      <div v-if="art.blog.img_url">
        <img class="card-img img-fluid" :src="require(`../../../img/${art.blog.img_url}.jpg`)"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogContent',
  props: ['art']
}
</script>

<style scoped>
  .blog-content{
    margin-bottom: 5rem;
  }
  .story-title{
    text-align: center;
    font-size: 1.4rem;
    color: #293d50;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  .story-body{
    color: #293d50;
  }
</style>
