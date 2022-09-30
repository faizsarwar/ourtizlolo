<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5 mt-5" ><b style="color: black;"> Are you an accredited investor? </b></h1>
                
            <p class="ml-5" style="color: black;">As a regulated investment platform, we are required to learn more about you before creating your account.</p>

            <p class="ml-5" style="color: black;">Generally, you are an accredited investor if any of the following are true:</p>

            <ol class="ml-5">
                <li>
                    Annual income greater than $200k (for the last 2 years)
                </li>
                <li>
                    Joint household income greater than $300k (for the last 2 years)
                </li>
                <li>
                    Net worth greater than $1M (excluding your primary residence)
                </li>
            </ol>

            <div class="ml-5">
                <a href="/account-information">
                    <button type="submit" class="btn btn m-2" style="width: 10%;">Yes</button>      
                </a>
                <a href="/not-accredited">
                    <button type="submit" class="btn btn m-2" style="width: 10%;">No</button>  
                </a>
            </div>

            <div class="mt-5 ml-5 mb-4">
                <button type="submit" class="btn btn-primary" style="width: 20%;">Next</button>
            </div>

           
        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
  
  
    export default defineComponent({
      name: 'accreditation-status',
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