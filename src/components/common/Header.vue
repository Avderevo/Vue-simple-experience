<template>
  <div class="header-bg">
    <div class="text-center">
      <div class="header-title-m">
        <div class="header-title">{{title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Traveler notes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-bg{
   background-image: url("../../../img/milica-3.jpg");
    min-height: 430px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .header-title-m{
    margin-top: 130px;
  }
  .header-title{
    color: #fbf9f4;
    font-size: 90px;
    font-weight: 600;
    background: #5c8492d9;
  }
</style>
