

<template>
    <!-- BLOGS -->
    <section class="bg-light mt-5">
      <div class=" m-5">
        <div class="row center_elements mt-5">
          <p class="mt-5">FROM THE BLOG</p>
        </div>

        <loading :active="isLoading"
          :can-cancel="true"
          :on-cancel="onCancel"
          :is-full-page="true"/>

        <div class="row center_elements">
          <h3 class="heading">TUNE INTO YOURSELF</h3>
        </div>

          <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
  
              <div class="carousel-inner seller-Card">
                <div class="carousel-item active">
                <!--  -->
                  <div class="row seller-Card">
  
                <div class="col-md-4 mb-3" v-for="blog in this.blogs" :key="blog.id">
                      <div class="card seller-Card">
                      <img :src= blog.get_image  class="card-img-top" alt="..."  style="height:300px">
                        <div class="card-body">
                          <!-- <div class="row" style="color:#466D1D;"> -->
                            <!-- <div class="row"> -->
                              <p class="card-title " style="text-align:center; color:#466D1D;"><strong> {{blog.tittle}}</strong></p>
                            <!-- </div> -->
                            <!-- <div class="row" > -->
                            <!-- </div> -->
                          <!-- </div> -->
                            <a :href="'/blogs/' + blog.id " class="btn btn btn-success">Read More</a>
  
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
  import axios from 'axios'
  import Loading from 'vue-loading-overlay'
  import 'vue-loading-overlay/dist/vue-loading.css'
  export default {
    name: "blogs",
    data() {
      return {
        blogs: [],
        isLoading:true
      };
    },
    components: {
          Loading
      },
    mounted() {
      this.getBlogs();
    },
    methods: {
      getBlogs() {
        axios
          .get("/api/v1/Blogs/")
          .then((response) => {
            this.blogs = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
          this.isLoading=false
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .card{
    height: 450px
  }
  </style>