<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Unfortunately, our platform is currently <br> limited to accredited investors only
            </b></h1>

            <h3  class="ml-5" style="color: black;">Join the waitlist below and we will let you know when we expand our offering</h3>
            
            <form class="m-5" @submit.prevent="submitForm">
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">First Name </label>
                    <input type="text" class="form-control" v-model="first_name" placeholder="First name">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="text" class="form-control" v-model="last_name" placeholder="Last name">
                  </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">Phone Number </label>
                    <input type="text" class="form-control" v-model="phone_number" placeholder="Phone number">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="Enter email" required>
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
    import axios from "axios";
    // import { toast } from 'bulma-toast'
    import Swal from 'sweetalert2'
    
    export default defineComponent({
      name: 'account-info',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            first_name:"",
            last_name:"",
            email:"",
            phone_number:"",
        }
    },
      components: {
      },
      
      methods: {
    submitForm() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email is Required");
      }
      if (!this.errors.length) {
        const formData = {
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          email: this.email,
          account_type: "non-accredited investor",
          // approved : approved
        };
        axios
          .post("/api/v1/info/", formData)
          .then((response) => {
            console.log(response.data)
            Swal.fire({
              icon: 'success',
              title: ' Successfully Subscribed Newsletter',
              showConfirmButton: false,
              timer: 1500
            })
            this.$router.push("/");
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