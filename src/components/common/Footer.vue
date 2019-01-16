<template>
    <div class="footer">
      <div class="container text-center">
        <div class="navbar-brand"><span class="write-color">write&nbsp;</span><span>&</span><span class="photo-color">&nbsp;photo </span></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer{
    padding: 20px;
    background-color: slategrey;
    color: white;
    margin-bottom: 0;
  }
  .navbar-brand{
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .write-color{
    color: #297298;
  }
  .photo-color{
    color: tomato;
  }

</style>
