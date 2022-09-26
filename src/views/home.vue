<template>
  <div >

    <section style="background-color:black;">
      <div class="">
        <div class="row ">
          <div class="col-lg p-5" style=" text-align: left; color: black;">
            <div class="  ml-5 p-5 ">
              <h2 class="m-4"><b> Reimagine your financial future with ourtizolo.</b></h2>
              <p class="m-4">ourtizolo's revolutionary platform breaks barriers to commercial real estate investing. We use the same high-quality underwriting available for deals to individuals, advisors, and institutions.</p>
              <p class="m-4">Looking for specific properties? Diversified funds? Opportunities for liquidity? This is your all access-pass.</p>
            </div>
    
          </div>
          <div class="col-lg">
            <img
            :src="require('@/assets/img/960x0.jpg')"
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
          <!--  -->
          <section class="bg-light" id="home-performance">
            <div class="p-5">
              <div class="pl-5 pr-5">
                <h2><b style="color: black;"> Legacies start here.</b> <b style="color:#005091"> Grow here. </b></h2>
             
                <p style="color: black;" class="pl-5 pr-5 mt-4 text-center">Partner with ourtizolo for instant access to premium apartment, industrial, office and hotel assets. World-class <br> real estate managers and operators. Proprietary technology that makes the whole process <br> smarter, faster, and more efficient.</p>  
             
                <div class="d-flex justify-content-center">

                  <!-- card -->
                  <div class="ml-3 mr-3">
                    <div class="card" style="width: 22rem;">
                      <div class=" pt-3 pb-2" style="background-color: #50b8ff; color:white">
                        <h5>ourtizolo Funds</h5>
                      </div>
                      <div class="card-body">
                        <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Invest in a diversified portfolio of properties in high-growth markets across the U.S.</p>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <button type="button" class="btn p-2 pl-3 mb-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                        <div class="p-0 m-0">
                          <img :src="icon4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card -->
                  <div class="ml-3 mr-3">
                    <div class="card" style="width: 22rem;">
                      <div class=" pt-3 pb-2" style="background-color: #50b8ff; color:white">
                        <h5>Deal-By-Deal</h5>
                      </div>
                      <div class="card-body">
                        <!-- <h5 class="card-title">Card title</h5> -->
                        <p class="card-title pl-3 pr-3" style="color: black;">Select individual commercial real estate investments through ourtizolo's Deal-by-Deal platform. Become a member to see available opportunities.</p>
                        <button type="button" class="btn p-2 pl-3 mb-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                        <div class="p-0 m-0">
                          <img :src="icon5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card -->
                  <div class="ml-3 mr-3">
                    <div class="card" style="width: 22rem;">
                      <div class=" pt-3 pb-2" style="background-color: #50b8ff; color:white">
                        <h5>Secondary Market</h5>
                      </div>
                      <div class="card-body">
                        <!-- <h5 class="card-title">Card title</h5> -->
                        <p class="card-title pl-3 pr-3" style="color: black;">Purchase shares of private real estate with established business plans, potentially at an attractive price relative to NAV.</p>
                        <button type="button" class="btn p-2 pl-3 mb-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                        <div class="p-0 m-0">
                          <img :src="icon6" />
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
             
             
              </div>
            </div>
          </section>


          <section class="pt-5 pb-5" id="home-efficient">
            <div class="p-5">
              <div class="row p-5">
                <div class="col-lg ml-3 pl-5 pr-5 mt-4">
                  <h1><b style="color: black;"> Invest alongside some of the </b> <br> <b style="color:#005091"> best-known</b>  <b style="color: black;"> institutional investors in the world, including:</b></h1>
                </div>
                <div class="col-md-4 pl-5">

                  <div class="row m-4">
                    <div class="card bg-light" style="width: 22rem;">
                      <div class=" pt-3 pb-2" >
                        <img
                        :src="require('@/assets/img/logoo1.png')"
                        alt=""
                        style="
                          background-size: contain;
                          background-repeat: no-repeat;
                          text-align: center;
                          width: 50%;
                        "
                      />
                      </div>
                    </div>
                  </div>

                  <div class="row m-4 ">
                    <div class="card bg-light" style="width: 22rem;">
                      <div class=" pt-3 pb-2" >
                        <img
                        :src="require('@/assets/img/logoo2.png')"
                        alt=""
                        style="
                          background-size: contain;
                          background-repeat: no-repeat;
                          text-align: center;
                          width: 50%;
                        "
                      />
                      </div>
                    </div>
                  </div>

                  <div class="row m-4">
                    <div class="card bg-light" style="width: 22rem;">
                      <div class=" pt-3 pb-2" >
                        <img
                        :src="require('@/assets/img/logoo3.png')"
                        alt=""
                        style="
                          background-size: contain;
                          background-repeat: no-repeat;
                          text-align: center;
                          width: 50%;
                        "
                      />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <p class="mt-5 text-center" style="color:#818181 !important">Are you a registered investment advisor or institution? Learn how ourtizolo can partner with you. <br>
                Current client? Welcome back! Log in here.</p>
                
            </div>
          </section>

          <section id="home-best-known">
            <div class="p-5 m-5 d-flex justify-content-center">
              <div class="tab">
                <button class="tablinks m-4 p-2 btn btn-dark" onclick="openCity(event, 'LIQUIDITY')">LIQUIDITY</button>
                <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Transparency')">Transparency</button>
                <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Data')">Data</button>
              </div>              
            </div>

            <!-- Tab1 -->
            <div id="LIQUIDITY" class="tabcontent " style="display:block">
              <div class="d-flex justify-content-center">
                <div class="text-left m-3 mr-5">
                  <h1>Reimagine <br>
                    <b style="color: #005091;"> liquidity. </b></h1>
                    <p style="color: #818181;" class="mt-4">
                      The ourtizolo Secondary Market offers unprecedented <br> opportunities for liquidity
                    </p>
                    <p style="color: #818181;">
                      Every quarter, buyers have the chance to get in on  <br> deals that were previously closed, and sellers may <br> be able to liquidate their shares. 
                    </p>
                    <p style="color: #818181;">
                      It’s a win-win. And it’s only at ourtizolo.
                    </p>
                    <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                </div>
                <div class="m-3 ml-5">
                  <img :src="mySVG1" />
                </div>
              </div>
              <h4 style="color: #818181;" class="m-4">
                “ourtizolo built a StubHub-like secondary market that can help <br> investors exit their investment with a few mouse clicks, and has <br> handled hundreds of secondary transactions for investors.”
              </h4>
            </div>
            
            <!-- Tab2  -->
            <div id="Transparency" class="tabcontent">
              <div class="d-flex justify-content-center">
                <div class="text-left m-3 mr-5">
                  <h1>Comprehensive investment<br>
                    <b style="color: #005091;"> transparency. </b></h1>
                    <p style="color: #818181;" class="mt-4">
                      Legacy real estate funds rarely offer you a clear <br> view of the investment road ahead. ourtizolo <br> provides unprecedented asset level transparency, <br> so you can see exactly which properties you own <br> and understand how your investment is <br> performing at every turn.
                    </p>
                    <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                </div>
                <div class="m-3 ml-5">
                  <img :src="mySVG2" />
                </div>
              </div>
              <h4 style="color: #818181;" class="m-4">“ourtizolo accomplishes its goals with technology, which it <br> employs to provide investors with a transparent platform that <br> they can log into to learn of new investment opportunities, to <br> get data on properties and markets, and to get practical <br> information about individual portfolios.”</h4>

            </div>
            
            <div id="Data" class="tabcontent">
              <div class="d-flex justify-content-center">
                <div class="text-left m-3 mr-5">
                  <h1><b style="color: #005091;"> Revolutionary, data-driven. </b><br>investment approach.
                    </h1>
                    <p style="color: #818181;" class="mt-4">
                      ourtizolo built proprietary data science tools to <br> improve upon traditional real estate processes. <br> Our technology produces deeper investment <br> insights that improve investment performance,⁴ <br> while creating efficiencies that allow us to reduce <br> costs for our investors. </p>
                    <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                </div>
                <div class="m-3 ml-5">
                  <img :src="mySVG3" />
                </div>
              </div>
              <h4 style="color: #818181;" class="m-4">“ourtizolo accomplishes its goals with technology, which it <br> employs to provide investors with a transparent platform that <br> they can log into to learn of new investment opportunities, to <br> get data on properties and markets, and to get practical <br> information about individual portfolios.”</h4>

            </div>
          </section>

          <section class="p-5" id="home-tabs">
            <div class="d-flex justify-content-center p-5">
              <div class="m-5">
                <h1 style="mb-5"><b style="color: #005091"> Hedge inflation </b>and <br>
                  <b style="color: #005091"> reduce volatility. </b></h1>

                  <img
                  :src="require('@/assets/img/f1.png')"
                  alt=""
                  style="
                    background-size: contain;
                    background-repeat: no-repeat;
                    text-align: center;
                    width: 50%;
                  "
                />
              </div>
              <div class="m-5 pt-5 text-left">
                <div class="pt-5">
                  <p style="color:#818181;">Real estate is valuable in any economic climate. In times of uncertainty it is essential.</p>
                  <p style="color:#818181;">Investments in private real estate provide essential <br> portfolio diversification, along with the ability to build <br> long-term wealth. Real estate can also deliver stable <br> income throughout the life of the investment and <br> sizable long-term returns.</p>  
                </div>
              </div>
            </div>
            <div class="text-left d-flex justify-content-center">
              <div class="m-4">
                <h4><b style="color:black;"> Why ourtizolo? </b></h4>
                <p style="color: black;">We developed innovative technology to supplement <br> our professional expertise and support <br> our superior commercial real estate deals while providing   <br> unparalleled options for liquidity. </p>
              </div>
              <div class="m-4">
                <h4><b style="color:black;"> Why Now?</b></h4>
                <p style="color: black;">Commercial real estate has historically proven to be <br> an attractive hedge against inflation. It is typically a <br> more stable asset class than stocks or bonds, both of <br> which are closely tied to market cycles.</p>
              </div>
              <div class="m-4">
                <h4><b style="color:black;"> Why You?</b></h4>
                <p style="color: black;">If you’re not investing in real estate, you may be <br> leaving money on the table. Answer just a few <br> qualifying questions to join our ourtizolo of investors <br> and you could change your financial trajectory.</p>
              </div>
            </div>
          </section>

          <section class="p-5" style="background-color: #005091;" id="home-wealth">
            <div class="p-5">
              <div class="pt-5 mt-3">
                <h1><b style="color: white;">What type of investor are you?</b></h1>
                <p class="mt-4">Learn how you can invest in ourtizolo Funds and other opportunities.</p>
              </div>
              <div class="row p-5">
                                  <!-- card -->
                  <div class="col-sm-3 ml-5 mr-3">
                    <div class="card" style="background-color: #50b8ff; color:white">
                      <div class="card-body" style="height: 16rem !important;">
                        <img :src="icon1" />
                        <h3 style="color: white;">Individuals</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:white; color:#005091">Learn More</button>
                      </div>
                    </div>
                  </div>
                                                    <!-- card -->
                  <div class="col-sm-3 ml-3 mr-3">
                    <div class="card" style="background-color: #50b8ff; color:white">
                      <div class="card-body" style="height: 16rem !important;">
                        <img :src="icon2" />
                        <h3 style="color: white;">institutions</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:white; color:#005091">Learn More</button>
                      </div>
                    </div>
                  </div>
                  <!-- card -->
                  <div class="col-sm-3 ml-3 mr-3">
                    <div class="card" style="background-color: #50b8ff; color:white">
                      <div class="card-body" style="height: 16rem !important;">
                        <img :src="icon3" />
                        <h3 style="color: white;">Investments</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:white; color:#0050912">Learn More</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          <section class="p-5" id="home-investors">
            <div class="p-5 m-5 text-left" id="home-insights">
              <h3 class="ml-4"><b style="color: black;"> Footnotes </b></h3>
              <ol>
                <li>Total transaction value represents the underwritten peak all-in cost of real estate investments included in offerings by ourtizolo since the formation of our Investment Committee (including realized investments).</li>
                <li>IRR calculation represents an equity weighted average annualized internal rate of return (IRR) for realized real estate investments of offerings by ourtizolo since the formation of our Investment Committee through to the date of calculation, after deduction of fees and expenses. Equity multiple represents the investment multiple on equity, which is calculated by dividing the aggregate realized proceeds for the applicable investment after deduction of fees and expenses. For recently realized investments, an estimate of proceeds to vehicles managed by ourtizolo may be used. The use of a different methodology may result in a materially different return metric.</li>
                <li>Gross distributions to investors refers to the sum of any income distributions, sale gains, and return of capital without deduction for any investor specific withholding or contribution interest. Distributions are not guaranteed. A portion of the gross distributions reflect a return of principal.</li>
                <li>Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections are not guaranteed and may not reflect actual future performance.</li>
              </ol>

              <h3 class="ml-4 mt-5 "><b style="color: black;">Important Disclosures</b></h3>
              <div class="ml-4">
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
          mySVG2: require('../assets/img/6245a14a9de15ddf987c3ab2_tranparacy-img.svg'),
          mySVG3: require('../assets/img/6245a1899de15d81b87c3b50_data-driven-graph.svg'),
          mySVG1: require('../assets/img/62df12f7dc504d31c5617d7f_my-investments-3-p-500.png'),
          SVG1: require('../assets/img/1.svg'),
          SVG2: require('../assets/img/2.svg'),
          SVG3: require('../assets/img/3.svg'),
          icon1: require('../assets/img/icon1.png'),
          icon2: require('../assets/img/icon2.svg'),
          icon3: require('../assets/img/icon3.svg'),
          icon4: require('../assets/img/icon4.svg'),
          icon5: require('../assets/img/icon5.svg'),
          icon6: require('../assets/img/icon6.svg'),
      }
  },
    components: {
      Swiper,
    // svg1
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