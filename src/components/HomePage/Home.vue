<template>
   <div>
     <Navbar></Navbar>
     <Header></Header>
     <Menu></Menu>
     <HomeBody></HomeBody>
     <Footer></Footer>
   </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import HomeBody from '@/components/HomePage/HomeBody'
import Footer from '@/components/common/Footer'

export default {
  name: 'Home',
  components: {Navbar, Header, Menu, HomeBody, Footer}
}
</script>
