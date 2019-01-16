<template>
    <div>
      <div class="news-title text-center">
        News:
      </div>
      <div class="list-news">
        <div class="mb-3">
          <b-link class="news-link" href="#foo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="news-link-arrow">&#8658;</span>
          </b-link>
        </div>
        <hr>
      </div>
      <div class="list-news">
        <div class="mb-3">
          <b-link class="news-link" href="#foo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            eos mollitia, perspicit veniam. A architecto
            deserunt, eius eos excepturi fugiat libe,
            officia. Lorem ipsum dolor sit amet, consecte.<span class="news-link-arrow">&#8658;</span>
          </b-link>
        </div>
        <hr>
      </div>
      <div class="list-news">
        <div class="mb-3">
          <b-link class="news-link" href="#foo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="news-link-arrow">&#8658;</span>
          </b-link>
        </div>
        <hr>
      </div>
      <div class="list-news">
        <div class="mb-3">
          <b-link class="news-link" href="#foo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="news-link-arrow">&#8658;</span>
          </b-link>
        </div>
        <hr>
      </div>
      <div class="list-news">
        <div class="mb-3">
          <b-link class="news-link" href="#foo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="news-link-arrow">&#8658;</span>
          </b-link>
        </div>
        <hr>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NewsList'
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
