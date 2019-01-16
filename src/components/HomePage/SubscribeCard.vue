<template>
  <div class="subscribe-card">
    <b-form>
      <div class="subscribe-text mb-2">
        <span>Subscribe to our blog news!</span>
      </div>
      <b-input class="mb-2 mr-sm-2 mb-sm-0"  placeholder="E-mail" />
      <div class="mt-3">
        <b-button class="subscribe-btn" variant="subscribe-btn">Subscribe</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SubscribeCard'
}
</script>

<style scoped>
  .subscribe-card{
    border: 1px solid tomato;
    padding: 10px;
    margin-bottom: 1.6rem;
  }
  .subscribe-text{
    font-size: 1.3rem;
    font-weight: 500;
  }
  .subscribe-btn{
    background-color: cadetblue;
    color: white;
    padding: 3px 15px;
  }
</style>
