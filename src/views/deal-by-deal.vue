<template>
    <div >
        <section class="pl-5" id="home-hero">
            <div class="row  pl-5">
                <div class="col-lg pt-5 pl-5 text-left">
                    <p style="color: black;">DEAL-BY-DEAL</p>
                     <h1 class="mt-5"><b style="color:#005091"> Ultimate  </b> <b style="color: black;"> control</b><b style="color:#005091"> And </b> <br>   <b style="color: black;"> customization.</b></h1>
                    <p class="mt-5" style="color: black;">Build a bespoke real estate portfolio, one investment at a time, from a <br> selection of institutional-quality commercial properties.</p>
                    <!-- <p style="color: black;">Sign up in seconds to get notified when new ourtizolo Funds are open for investmen</p> -->
                    <button type="button" class="btn p-2  mt-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">View Details</button>
                </div>
                <div class="col-lg">
                    <img
                    :src="require('@/assets/img/iStock-941729686.jpg')"
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

        <div class="p-5" style="background-color: #f5f5f5;" id="home-improve">
            <div class="row p-5  text-left d-flex justify-content-center">
              <div class="col-md-4  ml-5 mr-5 pl-5">
                <h2 style="color: black;"> Performance that
                  speaks for itself.</h2>
                <b class="mt-4" style="color: black;">OUR PERFORMANCE AS OF 6/15/2022</b>
      
                <div class="p-3 pt-5 pb-5">
                  <div class="row">
                    <div class="mr-3 gradient-icon purple">
                      <img :src="SVG1"  />
                    </div>
                    <div >
                      <b style="color:black !important">$5.02B+</b>
                      <p style="color:black !important">Total Transaction Value</p>
                    </div>
                  </div>
                  <hr style="background-color:#005091">
                  <div class="row">
                    <div class="mr-3 gradient-icon purple">
                      <img :src="SVG2" />
                    </div>
                    <div >
                      <b style="color:black !important">27.5%</b>
                      <p style="color:black !important">Historical Rate of Return2</p>
                    </div>
                  </div>
                  <hr style="background-color:#005091">
                  <div class="row">
                    <div class="mr-3 gradient-icon purple">
                      <img :src="SVG3" />
                    </div>
                    <div >
                      <b style="color:black !important">$338.6M+</b>
                      <p style="color:black !important">Gross Distributions to Investors3</p>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">See Our Track Record</button>
              </div>
              <div class="col-sm-3 ">
                <Swiper/>
              </div>
            </div>
            <p class="mt-5 text-center" style="color:#818181 !important">Are you a registered investment advisor or institution? Learn how ourtizolo can partner with you.
              <br>
              Current client? Welcome back! Log in here.</p>
          </div>

          <section class="pb-5 pt-5 bg-light" id="home-performance">
            <h1><b style="color:black"> What Deal-by-Deal <br>
                brings to you.</b></h1>
            

            <div class="p-5 m-5 d-flex justify-content-center">
                <div class="tab">
                  <button class="tablinks m-4 p-2 btn btn-dark" onclick="openCity(event, 'Optimization')">Optimization</button>
                  <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'customization')">Customization</button>
                  <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Network')">Network</button>
                </div>              
              </div>
  
              <!-- Tab1 -->
              <div id="Optimization" class="tabcontent pb-5" style="display:block">
                <div class="d-flex justify-content-center">
                  <div class="m-3 mr-5">
                    <img
                    :src="require('@/assets/img/a2.jpg')"
                    alt=""
                    style="
                      background-size: contain;
                      background-repeat: no-repeat;
                      text-align: center;
                      width: 40%;
                    "
                  />
                  </div>
                  <div class="text-left m-3 mt-5 ml-5">
                    <h1>
                        Optimize your   
                      <b style="color: #005091;"> portfolio </b></h1>
                      <p style="color: #818181;" class="mt-4">
                        Select individual commercial real estate properties to match your <br> personal investment objectives. Enjoy potential alpha generation <br> and tax advantages from direct investing.
                      </p>
                  </div>
                </div>
                <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">View Details</button>

              </div>
              
              <!-- Tab2  -->
              <div id="customization" class="tabcontent pb-5">
                <div class="d-flex justify-content-center">
                    <div class="m-3 mr-5 gradient-icon purple">
                    <img :src="mySVG1" />
                    </div>
                    <div class="text-left m-3 ml-5">
                      <h1>Actively build your  <br> <b style="color: #005091;"> real estate portfolio  </b><br>
                        </h1>
                        <p style="color: #818181;" class="mt-4">
                            Stay nimble by investing in multifamily apartment, office, hotel, and <br> industrial deals selected for their potential to outperform by our <br> advanced data science team, on-the-ground operators, and <br> seasoned investment professionals.
                        </p>
                    </div>
                  </div>
                  <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">View Details</button>

              </div>
              
              <div id="Network" class="tabcontent pb-5">
                <div class="d-flex justify-content-center">
                    <div class="m-3 mr-5">
                      <img
                      :src="require('@/assets/img/a2.jpg')"
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
                      <h1>Institutional network scaled for <br> <b style="color: #005091;">individuals and advisors </b>Approach  <br>
                        </h1>
                        <p style="color: #818181;" class="mt-4">
                            Access our extensive, growing network of world-class real estate <br> operators and investments at a fraction of the cost of building <br> these capabilities from scratch.</p>
                    </div>
                  </div>
                  <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">View Details</button>

              </div>
        </section>

          

        <section class="p-5" id="home-efficient" style="background-color: #f5f5f5;">

            <div class="p-5 row">
                <div class="col-lg p-5 text-left">
                    <div class="d-flex ml-5 pl-5 align-content-center flex-wrap">
                        <h1><b style="color:black">How Deal-by-Deal <br> investing works.</b></h1>
                        <p style="color:black" class="mt-3">Members of ourtizolo are invited to invest in top-quality <br> commercial real estate alongside leading institutions on <br> our platform.</p>
                    </div>
                </div>
                <div class="col-lg p-5">
                    imag here 
                </div>
            </div>
            
        </section>

        <section id="home-best-known" class="p-5">
            <div class="p-5">
                <h1><b style="color:black" >Join our ourtizolo of investors.</b></h1>
                <p style="color:#818181 !important">Detailed information about ourtizolo Deal-by-Deal investing is available to members <br> of the ourtizolo investment platform.</p>
            
                <div class="d-flex justify-content-center mt-5">

                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card-fancy text-left p-4" style="width: 22rem;">
                        <img :src="icon1" style="background-color: purple;  border-radius:8px" class="p-2 ml-5" />
                        <div class="card-body" style="height:13rem">
                            <h3><b style="color:black"> 1. Sign up </b></h3>
                            <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Take just two minutes to answer a few  questions about your goals and create an  account with ourtizolo.</p>
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card-fancy text-left p-4" style="width: 22rem;">
                        <img :src="icon2" style="background-color: purple;  border-radius:8px " class="p-2 ml-5" />
                        <div class="card-body" style="height:13rem">
                            <h3><b style="color:black"> 2. Invest</b></h3>
                          <!-- <h5 class="card-title">Card title</h5> -->
                          <p class="card-title pl-3 pr-3" style="color: black;">Review our real estate offerings and select investments to meet your long-term goals.</p>
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card-fancy text-left p-4" style="width: 22rem;">
                        <img :src="icon3" style="background-color: purple; border-radius:8px " class="p-2 ml-5" />
                        <div class="card-body" style="height:13rem">
                            <h3><b style="color:black"> 3.Earn </b></h3>
                          <!-- <h5 class="card-title">Card title</h5> -->
                          <p class="card-title pl-3 pr-3" style="color: black;">Track the ongoing performance of your investment through accessible, detailed reports on our platform.</p>
                        </div>
                      </div>
                    </div>
  
                  </div>
                  <button type="button" class="btn p-2 mb-4  mt-5 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">View Details</button>
  
               
            </div>
        </section>

        <section id="home-tabs" class="p-5" >
            <div class="p-5 m-5 text-left" id="home-wealth">

              <h3 class="ml-4 mt-5 mb-4"><b style="color: black;">Important Disclosures</b></h3>
              <div class="ml-4 mt-4 pt-4" id="home-investors">
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

                <p id="home-insights" style="color: black;">More complete disclosures and the terms and conditions relating to an investment in a particular private placement is contained in the investment memorandum.</p>
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
            mySVG1: require('../assets/img/a1.svg'),
            SVG1: require('../assets/img/1.svg'),
            SVG2: require('../assets/img/2.svg'),
            SVG3: require('../assets/img/3.svg'),
            icon1: require('../assets/img/signup.svg'),
            icon2: require('../assets/img/invest.svg'),
            icon3: require('../assets/img/earn.svg'),
            allProducts:[],
        }
    },
      components: {
      //   SwiperSlide,
      Swiper
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