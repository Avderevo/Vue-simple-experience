<template>
  <div>
    <!-- As a heading -->
    <b-navbar variant="faded" class="navbar-bg">
      <div class="container">
        <b-navbar-brand :to="{name: 'Home'}" class="navbar-brand mb-0">
          <span class="write-color">write</span><span>&nbsp;&</span><span class="photo-color">&nbsp;photo </span>
        </b-navbar-brand>
        <b-navbar-nav>
          <b-button size="sm" class="my-2 my-sm-0 reg-button" type="submit" right>Reg or Login</b-button>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .navbar-bg{
    background-color: #fff;
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
  .reg-button{
    background-color: #297298;
  }
</style>
