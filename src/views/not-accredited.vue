<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Unfortunately, our platform is currently <br> limited to accredited investors only
            </b></h1>

            <h3  class="ml-5" style="color: black;">Join the waitlist below and we will let you know when we expand our offering</h3>
            
            <form class="m-5">
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">First Name </label>
                    <input type="text" class="form-control" placeholder="First name">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name">
                  </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">Phone Number </label>
                    <input type="text" class="form-control" placeholder="Phone number">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
              </div>
             <div class="mt-5 mb-4">
              <button type="submit" class="btn btn-primary" style="width: 20%;">Join Our Waitlist</button>
            </div>
            </form>

        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'

    export default defineComponent({
      name: 'account-info',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            allProducts:[],
            date: null,
            vuePhone: {
                phone: "",
                props: {
                clearable: true,
                fetchCountry: true,
                preferredCountries: ["US", "GB"],
                noExample: false,
                translations: {
                    countrySelectorLabel: "Country code",
                    countrySelectorError: "Error",
                    phoneNumberLabel: "Enter your phone",
                    example: "Example:"
                }
                }
            }
        }
    },
      components: {
      //   Swiper,
      //   SwiperSlide,
      // VuePhoneNumberInput
    //   Datepicker,
      // DatePick
      },
      setup() {
        return {
          
        }
      }
    })
  
  </script>
  
  <style lang="scss" scoped>
  

  </style>