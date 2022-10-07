<template>
    <div class=" text-left" style="">
        <!--  -->
        <div class="row m-5">
            <div class="col-sm-3 p-5  text-center">
                <div class="text-left pl-5">
                    <hr style="">
                    <h6 class="ml-5 pl-5">{{this.account_details.first_name}} {{this.account_details.last_name}}</h6>
                    <!-- <h1 class="ml-5">uhuh</h1> -->
                    <hr>
                    <a href="/account-settings/account">
                        <h5 class="ml-5 pl-5"><b > Account</b></h5>
                    </a>
                    <hr>
                    <a href="/account-settings/clients">
                        <h5 class="ml-5 pl-5"><b > My Clients</b></h5>
                    </a>
                    <hr>
                    <a href="/account-settings/documents">
                        <h5 class="ml-5 pl-5"><b style="color:red"> Documents</b></h5>
                    </a>
                    <hr>
                    <a href="/account-settings/support">
                        <h5 class="ml-5 pl-5"><b> Support</b></h5>
                    </a>
                    <hr>
                    <div class="ml-5 pl-5 d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-box-arrow-right mr-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        <h5 @click="logout()">Logout</h5>
                    </div>

                </div>
            </div>
            <div class="col-lg-6 pt-5">
                <h1 class="ml-3"><b> Documents </b></h1>

                <div class="card p-5 m-3" style="background-color: rgb(245, 245, 245);">
                    <div class="pt-3 pb-3">
                        <h2 class="mb-5">No Documents yet</h2>
                    </div>

                </div>


            </div>
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
            cssProps: {
                backgroundImage: `url(${require('@/assets/img/slide2.jpg')})`
            },
            password: '',
            errors: [],
            account_details:[]
        }
    },
      components: {

      },
      mounted() {
        this.getAccountDetails()
    },
      methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$store.commit('removeUserId')
            this.$router.push('/')
        },
        getAccountDetails(){
            axios.get(`/api/v1/CustomUser/${localStorage.getItem('userid')}/`)
            .then(response=>{
                this.account_details=response.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    })
  
  </script>
  
  <style lang="scss" scoped>
    p , b , h1, h2, h3 ,h5{
        color: black;
    }

    hr{
        width:44%
    }

    *{
        font-family: Calibre, sans-serif;
    }

  </style>