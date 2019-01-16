<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <Menu></Menu>
    <span v-for="name in Names" :key="name">
       <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="photo">
            <img class="card-img img-fluid" :src="require(`../../../img/${name}.jpg`)"/>
          </div>
        </b-col>
      </b-row>
    </b-container>
    </span>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import Footer from '@/components/common/Footer'
import PhotoCard from '@/components/GalleryPage/PhotoCard'

export default {
  name: 'Gallery',
  components: {Footer, Menu, Navbar, Header, PhotoCard},
  data () {
    return {
      Names: ['img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6', 'img-7', 'img-8', 'img-9']
    }
  }
}
</script>

<style scoped>
  .photo{
    margin:2rem;
    padding: 1rem;
  }
</style>
