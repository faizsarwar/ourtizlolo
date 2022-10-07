<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Sign-In </b></h1>

            <form class="m-5" @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password" required>
                        <a href="/forgot-password">
                            <p class="mt-3" style="color: #0087e2;">Forgot Your Password?</p>
                        </a>
                      </div>
                </div>
                <div class="mt-5 mb-4">
                    <button type="submit" class="btn btn-primary" style="width: 20%;">Log In</button>
                </div>
                <h5>new to Ourtizolo ? <a href="/sign-up"> <b class="ml-3" style="color: #0087e2;"> Create An Account</b> </a></h5>

                          <!-- warning -->
                  <div class="notification is-danger" v-if="errors.length">
                    <!-- <p v-for="error in errors" v-bind:key="error">{{ error }}</p> -->
                    <p>Username or password is not valid </p>
                  </div>



              </form>

        </div>
    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
    import axios from 'axios' 
  
  
    export default defineComponent({
      name: 'login-',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            email: '',
            password: '',
            errors: []
        }
    },
      components: {
      //   Swiper,
      //   SwiperSlide,
      },
      methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            const formData = {
                email: this.email,
                password: this.password
            }
            await axios
                .post("/api/v1/CustomUser/login", formData)
                .then(response => {
                    const token = response.data.auth_token
                    const userid=response.data.id
                    console.log(userid,"token login Page")
                    this.$store.commit('setToken', token)
                    this.$store.commit('setUserId', userid)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    localStorage.setItem("userid", userid)
                    const toPath = this.$route.query.to || '/investor-landing'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
    })
  
  </script>
  
  <style lang="scss" scoped>
  

  </style>