<template>
  <b-card text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle">
    <img class="card-img img-fluid" :src="require(`../../../img/${img.name}.jpg`)"/>
  </b-card>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['img']
}
</script>

<style scoped>

</style>
