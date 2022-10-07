<template>
    <div class="p-5 text-left" style="background-color: rgb(245, 245, 245);">
        <div class="m-5 p-5" >
            <h1 class="ml-5" ><b style="color: black;">Welcome Muhammad </b></h1>

            <p class="ml-5 mt-4">As a Cadre Member, you can explore our investment opportunities, review our proprietary content, and set up a call with your dedicated Investor Relations Representative to talk about your investment goals. We look forward to partnering with you.</p>
        </div>

        <div class="pl-5">
            <div class="card-fancy ml-5 mr-5" style="width: 95rem;">
                <img class="card-img-top " :src="require('@/assets/img/cafe.jpg')"  style=" background-size: contain; background-repeat: no-repeat; text-align: center; width: 100%;" alt="Card image cap">
                <div class="card-body text-center">
                    <div class="row ">
                        <div class="col-sm p-3">
                            <h2>Cadre Funds</h2>
                            <p>Invest in a diversified portfolio of properties in high-growth markets across the U.S.</p>
                            <a href="/sign-up">
                                <button type="button" class="btn ml-3 mr-3 p-2 pl-3 pr-3" style="border-radius:20px !important; color:#0087e2; border-color: #0087e2; background-color:white">Learn More</button>
                            </a>
                        </div>
                        <div class="col-sm p-3">
                            <h2>Deal-By-Deal</h2>
                            <p>Select individual commercial real estate investments through Cadre's Deal-by-Deal platform. Become a member to see available opportunities.</p>
                            <a href="/sign-up">
                                <button type="button" class="btn ml-3 mr-3 p-2 pl-3 pr-3" style="border-radius:20px !important; color:#0087e2; border-color: #0087e2; background-color:white">Learn More</button>
                              </a>
                        </div>
                        <div class="col-sm p-3">
                            <h2>Secondary Market</h2>
                            <p>Purchase shares of private real estate with established business plans, potentially at an attractive price relative to NAV.</p>
                            <a href="/sign-up">
                                <button type="button" class="btn ml-3 mr-3 p-2 pl-3 pr-3" style="border-radius:20px !important; color:#0087e2; border-color: #0087e2; background-color:white">Learn More</button>
                              </a>
                        </div>
                    </div>
                    <p class="mt-3">interested in learning more about Cadre? Visit our <b> FAQ </b></p>
                </div>
            </div>
        </div>

        <div class="m-5">
            <div class="card p-4 ml-5" style="width:40%">
                <div class="row">
                    <div class="col">
                        <h2>Talk to our Investor Relations Team</h2>

                        <p class="mt-3" style="color:red">SCHEDULE A CALL
                        </p>
                    </div>
                    <div class="col ">
                        <div class="d-flex pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone  mr-3" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                              </svg>
                              (646) 494-7233
                        </div>
                        <div class="d-flex pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope mr-3" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                              </svg>
                              investments@cadre.com
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Blogs/>

        <div class="p-5">
            <div class="ml-5 mr-5">
                <h1 class="mb-4">Important Disclosures</h1>
                <p class="mt-2"><b> Performance Not Guaranteed: </b> Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections are not guaranteed and may not reflect actual future performance.</p>
                <p class="mt-2"><b> Risk of Loss:</b> All securities involve a high degree of risk and may result in partial or total loss of your investment.</p>
                <p class="mt-2"><b> Liquidity Not Guaranteed:</b> Investments offered by Cadre are illiquid and there is never any guarantee that you will be able to exit your investments on the Secondary Market or at what price an exit (if any) will be achieved.</p>
                <p class="mt-2"><b> Not a Public Exchange: </b>The Cadre Secondary Market is NOT a stock exchange or public securities exchange, there is no guarantee of liquidity and no guarantee that the Cadre Secondary Market will continue to operate or remain available to investors.</p>
                <p class="mt-2"><b> Private Securities: </b>Private Securities are high-risk and illiquid investments. No securities commission or regulatory authority has recommended or approved any investment or the accuracy or completeness of any of the information or materials provided by or through us. Please refer to the investment opportunity and memorandum for additional information, disclosures, and a more detailed explanation of expenses and risks. Interests are being offered only to persons who qualify as accredited investors under the Securities Act, and a Qualified Purchaser as defined in Section 2 (a) (51) (A) under the Company Act. Any securities offering is private and you may be required to verify your status as an "Accredited Investor" to participate.</p>
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
                    console.log(response.data,"token Invetsor Landing PAge")
                    this.$store.commit('setToken', token)
                    this.$store.commit('setUserId', userid)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token
                    localStorage.setItem("token", token)
                    localStorage.setItem("userid", userid)
                    const toPath = this.$route.query.to || '/advisor-home'
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
p , b , h1, h2, h3 ,h4{
    color: black;
}

  </style>