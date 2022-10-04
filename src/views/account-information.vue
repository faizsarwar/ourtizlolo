<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Tell us more about yourself </b></h1>
            
            <form class="m-5" @submit.prevent="submitForm">
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="FirstName" >First Name </label>
                    <input type="text" class="form-control" v-model="first_name" placeholder="First name" required>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="LastName">Last Name</label>
                    <input type="text" class="form-control" v-model="last_name" placeholder="Last name" required>
                  </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="phone">Phone Number </label>
                    <input type="text" class="form-control" v-model="phone_number" placeholder="Phone number" required>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" v-model="email" id="inputEmail4" placeholder="Email">
                  </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="inputPassword1">Password</label>
                  <input type="password" class="form-control" id="inputPassword1" v-model="password" placeholder="Password">
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPassword2">Repeat Your Password</label>
                  <input type="password" class="form-control" id="inputPassword2"  v-model="password2" placeholder="Repeat Password">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label >Date Of Birth </label >
                  <Datepicker v-model="date"></Datepicker>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPassword2">Username</label>
                  <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Useraname"
                  v-model="username" />
                </div>
              </div>
              <h1>
                Residence Address
              </h1>
              <div class="row">
                    <div class="form-group col-6">
                      <label for="Address1" >Address Line 1</label>
                      <input type="text" class="form-control" v-model="adress_line1" placeholder="Address">
                    </div>
              </div>
              <div class="row">
                <div class="form-group col-6">
                  <label for="Address2">Address Line 2</label>
                  <input type="text" class="form-control" v-model="adress_line2" placeholder="Address">
                </div>
             </div>

            <!-- warning -->
            <div class="notification is-danger" v-if="errors.length">
              <p v-for="error in errors" class="m-2 p-2" style="color:black !important" v-bind:key="error">{{ error }}</p>
            </div>

             <div class="mt-5 mb-4">
              <button type="submit" class="btn btn-primary" style="width: 20%;">Next</button>
            </div>

            <hr />


            </form>

        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import axios from "axios";
    // import { toast } from 'bulma-toast'
    import Swal from 'sweetalert2'

    export default defineComponent({
      name: 'account-info',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            allProducts:[],
            date: null,
            username:'',
            first_name:"",
            last_name:"",
            phone_number:"",
            password: "",
            password2: "",
            adress_line1: "",
            adress_line2: "",
            email:"",
            errors: [],
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
      },
      methods: {
    submitForm() {
      this.errors = [];
      if (this.username === "") {
        this.errors.push("The username is missing");
      }
      if (this.password === "") {
        this.errors.push("The password is too short");
      }
      if (!this.email) {
        this.errors.push("Email is Required");
      }
      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
      }
      if (!this.errors.length) {
        const formData = {
          first_name: this.first_name,
          last_name: this.last_name,
          date_of_birth: this.date,
          username: this.username,
          phone_number: this.phone_number,
          adress_line1: this.adress_line1,
          adress_line2: this.adress_line2,
          password: this.password,
          email: this.email,
          account_type: "accredited investor",
          // approved : approved
        };
        axios
          .post("/api/v1/CustomUser/", formData)
          .then((response) => {
            console.log(response.data)
            Swal.fire({
              icon: 'success',
              title: 'Account Successfully Created',
              showConfirmButton: false,
              timer: 1500
            })
            this.$router.push("/investor-form");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
    },
    })
  
  </script>
  
  <style lang="scss" scoped>
  

  </style>