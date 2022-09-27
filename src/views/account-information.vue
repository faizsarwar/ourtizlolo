<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Tell us more about yourself </b></h1>
            
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
                    <label for="exampleInputEmail1">Date Of Birth </label>
                    <Datepicker v-model="date"></Datepicker>
                  </div>
              </div>
              <h1>
                Residence Address
              </h1>
              <div class="row">
                    <div class="form-group col-6">
                      <label for="exampleInputEmail1">Address Line 1</label>
                      <input type="text" class="form-control" placeholder="Address">
                    </div>
              </div>
              <div class="row">
                <div class="form-group col-6">
                  <label for="exampleInputEmail1">Address Line 2</label>
                  <input type="text" class="form-control" placeholder="Address">
                </div>
             </div>

             <div class="mt-5 mb-4">
              <button type="submit" class="btn btn-primary" style="width: 20%;">Next</button>
            </div>
            </form>

        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

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
      Datepicker,
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