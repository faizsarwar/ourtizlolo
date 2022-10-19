<template>
    <!-- Best seller slides -->
    <section class="pt-5 pb-5" style="background-color: white;">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <!-- <p>CUSTOMER FAVORITES</p> -->
            <h3 class="mb-3 ">Ourtiozlo | <b class="ml-2" style="color: black;">INSIGHTS</b></h3>
          </div>
          <div class="col-6 text-right">
            <a href="/blogs">
              SEE ALL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </div>
  
          <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
  
              <div class="carousel-inner seller-Card">
                <div class="carousel-item active">
                  <div class="row seller-Card">
  
                    <div class="col-md-4 mb-3" v-for="item in this.AllProducts[0]" :key="item.id">
                      <a :href="'/Blogs/' + blog.id " >
                        <div class="card " style="border-radius: 25px; ">
                        <img :src= item.get_image  class="card-img-top " alt="..."  style="height:400px">
                          <div class="card-body p-2">
                                <p class="card-title" style="text-align:center; color:#466D1D;"><strong> {{item.tittle}}</strong></p>
                                <p class="" style="text-align:center; color:black; font-weight: normal;font-size: large; ">{{item.description}}</p>
                          </div>
                        </div>
                      </a>
                    </div>
  
                  </div>
                </div>
  
                <!--  -->
                <div class="carousel-item" v-for="products in this.AllProducts.slice(1,)" v-bind:key="products.id">
                  <div class="row seller-Card">
  
                    <div class="col-md-4 mb-3 seller-Card" v-for="item in products" v-bind:key="item.id">
                      <div class="card seller-Card">
                      <img :src= item.get_image  class="card-img-top" alt="..."  style="height:400px">
                        <div class="card-body">
                          <!-- <div class="row" style="color:#466D1D;"> -->
                            <!-- <div class="row"> -->
                              <p class="card-title seller-Card" style="text-align:center; color:#466D1D;"><strong> {{item.name}}</strong></p>
                            <!-- </div> -->
                            <!-- <div class="row" > -->
                              <p class="card-text" style="text-align:center; color:#466D1D;">{{item.priceRange}}</p>
                            <!-- </div> -->
                          <!-- </div> -->
                            <a :href="'/products/' + item.id " class="btn btn btn-success">Quick view</a>
  
                        </div>
  
                      </div>
                    </div>
  
                  </div>
                </div>
           
                
              </div>
  
  
  
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  </template>
  
  <script>
  // import blogs from '../components/blogs.vue'
  // import testemonials from '../components/testemonials.vue'
  // import best_seller_slides from '../components/best-seller-slides.vue'
  // import Faqs from '../components/Faqs.vue'
  import axios from 'axios'
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  // import HelloWorld from '@/components/blogs.vue'
  export default {
    name: 'best_seller_slides',
    data(){
        return {
            allProducts:[],
            AllProducts:[]
        }
    },
    components: {
   
    },
    mounted(){
      this.getAllProducts(),
      this.updateProducts()
      
    },
    methods: {
        getAllProducts() {
            axios.get('/api/v1/Blogs/')
            .then(response=>{
              this.allProducts=response.data
              while(this.allProducts.length > 0){
              let chunk = this.allProducts.splice(0,3)
              this.AllProducts.push(chunk)
                }
              console.log(this.AllProducts)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        updateProducts(){
          // while(this.allProducts.length > 0){
          //   chunk = this.allProducts.splice(0,3)
          //   console.log(chunk)
          // }
        }
    }
  }
  </script>