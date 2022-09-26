<template>
    <div class="p-5 text-left">
        <div class="m-5 p-5">
            <h1 class="ml-5" ><b style="color: black;"> Sign-In </b></h1>

            <form class="m-5">
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                        <a href="/forgot-password">
                            <p class="mt-3" style="color: #0087e2;">Forgot Your Password?</p>
                        </a>
                      </div>
                </div>
                <div class="mt-5 mb-4">
                    <button type="submit" class="btn btn-primary" style="width: 20%;">Log In</button>
                </div>
                <h5>new to Ourtizolo ? <a href="/sign-up"> <b class="ml-3" style="color: #0087e2;"> Create An Account</b> </a></h5>
              </form>

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