<template>
    <div>
      <section class="p-5">
        <img :src="blog.get_image" style="width: 80% ; background-size: 'cover' ; background-repeat: 'no=repeat'; height:80%" >
      </section>    
      <h1 class="heading mt-5 mb-5">
            {{this.blog.tittle}}
      </h1>
      <section>
        <p class="m-5">
          {{this.blog.description}}
        </p>
      </section>
    </div>
</template>

<script>
// ES6 Modules or TypeScript
// import Loading from 'vue-loading-overlay'/ing.css'
import axios from 'axios'
export default {
  name: 'blog-',
  data(){
      return {
          id: this.$route.params.blogId,
          isLoading: true,
          blog:{}
      }
  },
  components: {
    // Loading
  },
  mounted(){
    this.getBlog()
    // this.setDiscount()
  },
  methods:{
      async getBlog() {
        this.$store.commit('setIsLoading', true)
        console.log(this.id)
        await axios.get('/api/v1/Blogs/' + this.id)
        .then(response=>{
          this.blog=response.data[0]
        })
        .catch(error=>{
            console.log(error)
        })
        this.$store.commit('setIsLoading', false)
        this.isLoading=false
      },
  }
}
</script>