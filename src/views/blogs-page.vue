<template>
    <div class="about mb-3">
        <blogs/>
        <router-link to='/shop' class="btn btn btn-success m-5">Order Now</router-link>
    </div>
  </template>
  
  <script>
  import blogs from '../components/blogs.vue'
  export default {
    name: 'HomeView',
    components: {
      // HelloWorld
      blogs,
      // testemonials,
      // best_seller_slides
    }
  }
  </script>