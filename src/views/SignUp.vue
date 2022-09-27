<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Which of the following best <br> describes you? </b></h1>
            <div class="ml-5 mr-5 row">
                <div class="col-md-4 p-4 ">
                  <a href="/accreditation-status">
                    <div class="card-fancy w-10 h-100 p-4 " >
                      <div class="card-body">
                      <h3 class=" card-title" ><b style="color: black;"> Individual Investor </b></h3>
                      <p class="card-text" style="color:#818181 ">I would Like to Invest on Behalf of my self , my family, or my company</p>
                      </div>
                  </div>
                  </a>
                </div>
                <div class="col-md-4 p-4 ">
                    <div class="card-fancy w-10 h-100 p-4 " >
                        <div class="card-body">
                        <h3 class=" card-title" ><b style="color: black;"> Financial Advisor </b></h3>
                        <p class="card-text" style="color:#818181 ">I would Like to Invest on Behalf of my clients</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-4">

                </div>
                <h5 class="m-4">Already have an account?  <a href="/login"> <b class="ml-3" style="color: #0087e2;"> Log In</b> </a></h5>
            </div>
           
        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
  
  
    export default defineComponent({
      name: 'login-',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            allProducts:[],
        }
    },
      components: {
      //   Swiper,
      //   SwiperSlide,
      },
      setup() {
        return {
          
        }
      }
    })
  
  </script>
  
  <style lang="scss" scoped>
  

  </style>