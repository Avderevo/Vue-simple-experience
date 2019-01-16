<template>
  <div class="container">
    <div class="mt-4 mb-5 nav-menu">
      <b-nav justified>
        <b-nav-text><span class="nav-menu-text">Latest Articles</span></b-nav-text>
        <b-nav-item v-bind:to="{name: 'Home'}" ><span class="nav-menu-item"><span class="tomato">&#8226;</span>&nbsp;Story</span></b-nav-item>
        <b-nav-item v-bind:to="{name: 'Gallery'}" ><span class="nav-menu-item"><span class="tomato">&#8226;</span>&nbsp;&nbsp;Photo</span></b-nav-item>
        <b-nav-item><span class="nav-menu-item"><span class="tomato">&#8226;</span>&nbsp;&nbsp;Reviews</span></b-nav-item>
      </b-nav>
      <hr />
    </div>

  </div>
</template>
http://localhost:8080/#
<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
  .nav-menu{
    font-size: 1.6rem;
    font-weight: 400;
    color: #293d50;
  }
  .nav-menu-item{
    color: #293d50;
  }
  .tomato{
    color: tomato;
  }
  .nav-menu-text{
    color: #293d50;
    font-weight: 600;
  }

</style>
