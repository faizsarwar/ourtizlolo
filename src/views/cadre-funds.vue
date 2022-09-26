<template>
    <div >
        <section id="home-hero" class="pl-5">
            <div class="row  pl-5">
                <div class="col-lg p-5 text-left">
                    <p style="color: black;">ourtizolo FUNDS</p>
                    <h1><b style="color:#005091"> Diversified portfolios </b><br> <b style="color: black;"> for</b><b style="color:#005091"> investors </b> <br>   <b style="color: black;"> who want it all.</b></h1>
                    <p class="mt-3" style="color: black;">A one-and-done portfolio of commercial real estate in top-growth <br> markets. Assets include apartment, hotel, industrial and other  <br> properties—all managed by our experienced investment professionals.</p>
                    <p style="color: black;">Sign up in seconds to get notified when new ourtizolo Funds are open for investmen</p>
                    <button type="button" class="btn p-2  mt-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Request Access</button>
                </div>
                <div class="col-lg p-0">
                  <img
                  :src="require('@/assets/img/myhc_78543.jpg')"
                  alt=""
                  style="
                    background-size: contain;
                    background-repeat: no-repeat;
                    text-align: center;
                    width: 100%;
                  "
                />
                </div>
            </div>
        </section>

        <section id="home-improve" class="p-5" style="background-color: #f5f5f5;">

            <div class="p-5 row">
                <div class="col-lg p-5 text-left">
                    <h1 class="ml-5" ><b style="color: black;"> Don't miss out on </b> <br><b style="color:#005091"> ourtizolo's next fund</b>!</h1>
                    <p  class="ml-5" style="color: black;">If you missed out on the success of our flagship ourtizolo Direct <br> Access Fund, sign up now to be notified for your next <br> opportunity to outperform with ourtizolo Funds. </p>
                    <button type="button" class="btn p-2 ml-5 mt-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">See Our Track Record</button>
                </div>
                <div class="col-sm-3 ">
                      <Swiper/>
                </div>
            </div>
            
        </section>

        <section id="home-performance" class="p-5" style="background-color: #f5f5f5;">
            <h1><b style="color: black;"> What an investment in <br>
                ourtizolo Funds offers you.</b> </h1>
            <div class="p-3 mt-4 d-flex justify-content-center">
                                  <!-- card -->
                                  <div class="ml-3 mr-3">
                                    <div class="card p-4" style="width: 25rem;">
                                      <div class=" pt-3 pb-2" >
                                        <h4><b style="color:black"> Access to Experiencen </b></h4>
                                      </div>
                                      <div class="card-body" style="height:10rem">
                                        <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Leverage ourtizolo’s decades of institutional experience and broad operator network and invest alongside leading endowments, asset managers and pension funds.</p>
                                      </div>
                                    </div>
                                  </div>
                                                    <!-- card -->
                  <div class="ml-3 mr-3">
                    <div class="card p-4" style="width: 25rem;">
                      <div class=" pt-3 pb-2">
                        <h4><b style="color:black"> Instant Diversification </b></h4>
                      </div>
                      <div class="card-body" style="height:10rem">
                        <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Invest in a diversified portfolio of private commercial real estate to build wealth more efficiently across markets and property types.</p>
                      </div>
                    </div>
                  </div>
                                    <!-- card -->
                                    <div class="ml-3 mr-3">
                                        <div class="card p-4" style="width: 25rem;">
                                          <div class=" pt-3 pb-2">
                                            <h4><b style="color:black"> Focus on Alpha Generation </b></h4>
                                          </div>
                                          <div class="card-body" style="height:10rem">
                                            <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Access a portfolio carefully constructed to outperform by seasoned real estate investment professionals and backed by data science.</p>
                                          </div>
                                        </div>
                                      </div>
            </div>
            <button type="button" class="btn p-3 ml-5 mt-3 pl-5 pr-5" style="border-radius:25px !important; background-color:#005091; color:white">Become An Investor</button>
        </section>

        <section id="home-efficient" class="pb-5">
            <div class="p-5 m-5 d-flex justify-content-center">
                <div class="tab">
                  <button class="tablinks m-4 p-2 btn btn-dark" onclick="openCity(event, 'Direct-Investments')">Direct Investments</button>
                  <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Data-Driven')">Data Driven</button>
                  <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Client-Centric')">Client-Centric</button>
                </div>              
              </div>
  
              <!-- Tab1 -->
              <div id="Direct-Investments" class="tabcontent pb-5" style="display:block">
                <div class="d-flex justify-content-center">
                  <div class="m-3 mr-5">
                    <img
                    :src="require('@/assets/img/1.jpg')"
                    alt=""
                    style="
                      background-size: contain;
                      background-repeat: no-repeat;
                      text-align: center;
                      width: 40%;
                    "
                  />
                  </div>
                  <div class="text-left m-3 ml-5">
                    <h1>
                        Simplified Access to  <br>
                      <b style="color: #005091;"> Direct Investments. </b></h1>
                      <p style="color: #818181;" class="mt-4">
                        Invest in a real estate private equity fund that reduces barriers <br> to institutional-quality assets more efficiently and with low fees.
                      </p>
                  </div>
                </div>
                <p style="color:black">Click here to learn more about our flagship fund, the ourtizolo Direct Access Fund (now closed to investors).</p>

              </div>
              
              <!-- Tab2  -->
              <div id="Data-Driven" class="tabcontent pb-5">
                <div class="d-flex justify-content-center">
                    <div class="m-3 mr-5">
                      <img
                      :src="require('@/assets/img/2.jpg')"
                      alt=""
                      style="
                        background-size: contain;
                        background-repeat: no-repeat;
                        text-align: center;
                        width: 40%;
                      "
                    />
                    </div>
                    <div class="text-left m-3 ml-5">
                      <h1><b style="color: #005091;">Data-Driven </b><br> Market Selection  <br>
                        </h1>
                        <p style="color: #818181;" class="mt-4">
                            Benefit from ourtizolo’s strategic combination of real estate investment <br> insights and predictive analytics we use to identify assets with attractive<br>  return profiles in top-growth markets.
                        </p>
                    </div>
                  </div>
                  <p style="color:black">Click here to learn more about our flagship fund, the ourtizolo Direct Access Fund (now closed to investors).</p>

              </div>
              
              <div id="Client-Centric" class="tabcontent pb-5">
                <div class="d-flex justify-content-center">
                    <div class=" mr-5">
                      <img
                      :src="require('@/assets/img/3.jpg')"
                      alt=""
                      style="
                        background-size: contain;
                        background-repeat: no-repeat;
                        text-align: center;
                        width: 40%;
                      "
                    />
                    </div>
                    <div class="text-left m-3 ml-5">
                      <h1><b style="color: #005091;">Client-Centric  </b>Approach  <br>
                        </h1>
                        <p style="color: #818181;" class="mt-4">
                            Satisfy a wide-ranging risk appetite with investments in core/core-plus to <br>
                            value-add/opportunistic strategies across multifamily, office, industrial and <br> hospitality assets.       </p>
                    </div>
                  </div>
                  <p style="color:black" class="mt-3">Click here to learn more about our flagship fund, the ourtizolo Direct Access Fund (now closed to investors).</p>

              </div>
        </section>

        <section  class="p-5" id="home-best-known">
            <div class="p-5 m-5 text-left" id="home-tabs">

              <h3 class="ml-4 mt-5 mb-4"><b style="color: black;">Important Disclosures</b></h3>
              <div class="ml-4 mt-4 pt-4" id="home-wealth">
                <h4 class=" mt-3 mb-0"><b style="color: black;">Private Securities</b></h4>
                <p style="color: black;">Investments in private offerings are speculative and involve a high degree of risk. Investments in private offerings are not bank deposits and therefore are not insured by the FDIC or guaranteed by any other party. Investors must be qualified as an accredited investor to participate in private offerings and you may be required to verify your status as an accredited investor. No securities commission or regulatory authority has recommended or approved any investment or the accuracy or completeness of any of the information or materials provided by or through us.</p>
  
                <h4 class=" mt-3 mb-0"><b style="color: black;">Not Advice</b></h4>
                <p style="color: black;">This communication is not to be construed as investment, tax, or legal advice in relation to the relevant subject matter; investors must seek their own legal or other professional advice before making any investment to determine whether an investment is suitable for them.</p>
  
                <h4 class=" mt-3 mb-0"><b style="color: black;">Performance Not Guaranteed</b></h4>
                <p style="color: black;">Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections are not guaranteed and may not reflect actual future performance.</p>  

                <h4 class=" mt-3 mb-0"><b style="color: black;">Risk of Loss</b></h4>
                <p style="color: black;">All investments involve a high degree of risk and may result in partial or total loss of your investment.</p>

                <h4 class=" mt-3 mb-0"><b style="color: black;">Liquidity Not Guaranteed</b></h4>
                <p style="color: black;">Investments offered by ourtizolo are illiquid and there is never any guarantee that you will be able to exit your investments on the Secondary Market or at what price an exit (if any) will be achieved.</p>

                <h4 class=" mt-3 mb-0"><b style="color: black;">Not a Public Exchange</b></h4>
                <p style="color: black;">The ourtizolo Secondary Market is NOT a stock exchange or public securities exchange, there is no guarantee of liquidity and no guarantee that the ourtizolo Secondary Market will continue to operate or remain available to investors.</p>

                <p style="color: black;">More complete disclosures and the terms and conditions relating to an investment in a particular private placement is contained in the investment memorandum.</p>
              </div>
              <div id="home-investors">
              </div>
              <div id="home-insights">
              </div>
            </div>
          </section>

    </div>
</template>
  
  
  <script >
    import { defineComponent } from 'vue'
    import Swiper from '../components/slider.vue'
  
  
    export default defineComponent({
      name: 'swiper-example-vertical-',
      title: 'Vertical slider',
      url: import.meta.url,
        data(){
        return {
            allProducts:[],
        }
    },
      components: {
        Swiper,
      //   SwiperSlide,
      },
      setup() {
        return {
          
        }
      }
    })
  
  </script>
  
  <style lang="scss" scoped>
  
  b, p{
    color: white;
  }
  
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    font-size: 46px;
    line-height: 110%;
    font-weight: 900;
  }
  
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
  </style>