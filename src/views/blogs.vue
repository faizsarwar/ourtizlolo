<template>
    <div class="about mb-3">
        <div class="row d-flex justify-content-center pl-5 pr-5 mt-5 mb-5">
            <div class="col-sm-2 ">
                <a class="btn btn-dark" href="/insights/topics/market-views" style="color: white;"> market views</a>
            </div>
            <div class="col-sm-2 ">
                <a class="btn btn-dark" href="/insights/topics/Opportunity-Zones" style="color: white;"> Opportunity Zones</a>
            </div>
            <div class="col-sm-2">
                <a class="btn btn-dark" href="/insights/topics/Secondary-market" style="color: white;"> Secondary market</a>
            </div>
            <div class="col-sm-2 ">
                <a class="btn btn-dark" href="/insights/topics/Company-News" style="color: white;"> Company News</a>
            </div>
            <div class="col-sm-2 ">
                <a class="btn btn-dark" href="/insights/topics/Product-News" style="color: white;"> Product News</a>
            </div>
        </div>

        <section class="p-4">
            <blogs/>
        </section>


    </div>
  </template>
  
  <script>
  import blogs from '../components/blog.vue'
  export default {
    name: 'blogs--',
    components: {
      // HelloWorld
      blogs,
      // testemonials,
      // best_seller_slides
    }
  }
  </script>

<style>
.btn-dark{
    border-radius: 8rem;
}
</style>