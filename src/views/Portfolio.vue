<template>
    <div class=" text-left" style="">
        <!--  -->
        <div class="p-5 m-5">
            <h1>Portfolio</h1>
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