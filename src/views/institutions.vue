<template>
    <div >
  
      <div class="p-5 " style="background-color: black;" id="home-hero">
        <div class="row p-5  text-left d-flex justify-content-center">
          <div class="col-sm-3  ml-5 pl-5">
            <p>INSTITUTIONAL INVESTORS</p>
            <h2><b> Custom, fee-
                efficient private
                real estate
                portfolios.</b></h2>
            <p class="mt-4">ourtizolo’s premier commercial real estate investment platform lets you offer your clients the same opportunities as some of the best-known institutional investors in the world.            </p>
            <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Contact Us</button> 
        </div>
          <div class="col-lg ">
            image here 
          </div>
        </div>
      </div>

      <div class="p-5" style="background-color: #f5f5f5;" id="home-improve">
        <div class="p-5 d-flex justify-content-center">
            <div class="p-5">
                <div>
                    <h1><b style="color: black;">Efficient access to <br> curated dealflow.</b></h1>
                </div>
                <div>
                    <p style="color: black;">ourtizolo’s investment platform is designed to deliver <br> compelling risk-adjusted returns with the potential for <br> liquidity on a quarterly basis.</p>
                </div>
            </div>
            <div class="p-5">
                img here
            </div>
        </div>
      </div>

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

      <section id="home-efficient">
        <div class="p-5 m-5 d-flex justify-content-center">
          <div class="tab">
            <button class="tablinks m-4 p-2 btn btn-dark" onclick="openCity(event, 'OPTIMIZATION')">OPTIMIZATION</button>
            <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'CUSTOMIZATION')">CUSTOMIZATION</button>
            <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Tranparency')">Tranparency</button>
          </div>              
        </div>

        <!-- Tab1 -->
        <div id="OPTIMIZATION" class="tabcontent " style="display:block">
          <div class="d-flex justify-content-center">
            <div class="m-3 ml-5">
              <img :src="mySVG3" />
              </div>
            <div class="text-left p-5 m-3 mr-5">
              <h1><b style="color: black;"> Optimize alpha through tech efficiencies.</b></h1>
                <p style="color: #818181;" class="mt-4">
                    Data science and machine learning tools fuel ourtizolo’s fee <br> efficient real estate investment solutions, from separate <br> accounts to funds. Our tech-driven platform helps <br> institutions search for alpha cost-effectively, across broad or <br> niche private real estate strategies.
                </p>

                <p class="mt-5" style="color: #818181;"> <u>Contact us</u> for customized solutions. </p>
            </div>
          </div>
        </div>
        
        <!-- Tab2  -->
        <div id="CUSTOMIZATION" class="tabcontent">
          <div class="d-flex justify-content-center">
            <div class="m-3 ml-5">
              <img :src="mySVG1" />
              </div>
            <div class="text-left m-3 mr-5">
              <h1><b style="color: black;">  Control your investment horizon. </b></h1>
                <p style="color: #818181;" class="mt-4">
                    Asset liability matching and portfolio rebalancing on <br> demand: ourtizolo’s groundbreaking pool of liquidity offers <br> institutional investors the potential to exit private real estate <br> investments on a quarterly basis.
                </p>
                <p class="mt-5" style="color: #818181;">Liquidity Not Guaranteed. Investments offered by ourtizolo are illiquid and there is <br> never any guarantee that you will be able to exit your investments on the <br>  Secondary Market or at what price an exit (if any) will be achieved.
                    ‍</p>
                <!-- <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button> -->
            </div>
          </div>
          <h4 style="color: #818181;" class="m-4">“ourtizolo accomplishes its goals with technology, which it <br> employs to provide investors with a transparent platform that <br> they can log into to learn of new investment opportunities, to <br> get data on properties and markets, and to get practical <br> information about individual portfolios.”</h4>

        </div>
        
        <div id="Tranparency" class="tabcontent">
          <div class="d-flex justify-content-center">
            <div class="m-3 ml-5">
              <img :src="mySVG2" />
              </div>  
            <div class="text-left m-3 mr-5">
              <h1><b style="color: black;">Granular insights into assets at all times.</b></h1>
                <p style="color: #818181;" class="mt-4">ourtizolo uses proprietary data science tools to compile <br> comprehensive, transparent details on each asset we offer <br> for investment. Performance reporting, updates, and <br> analytics are available 24-7 for investors on our platform.</p>
            </div>
          </div>
          <h4 style="color: #818181;" class="m-4">“ourtizolo accomplishes its goals with technology, which it <br> employs to provide investors with a transparent platform that <br> they can log into to learn of new investment opportunities, to <br> get data on properties and markets, and to get practical <br> information about individual portfolios.”</h4>

        </div>
      </section>
       
        <div>

        </div>


            <!--  -->
            <section class="bg-light" id="home-performance">
              <div class="p-5 mb-5">
                <div class="pl-5 pt-5 pr-5 mt-5 mb-5">
                  <h2><b class="mt-5"  style="color: black;"> Diversity is</b> <b style="color:#005091"> central </b> <b style="color: black;">to our mission.</b></h2>
               
                  <p style="color: black;" class="pl-5 pr-5 mt-4 text-center">ourtizolo is a minority-owned, minority-led investment manager. Our diversity, equity, and inclusion <br> (DEI) strategy is core to all we do, and includes initiatives to:
                    ‍</p>  
               
                  <div class="d-flex justify-content-center">
  
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card" style="width: 22rem;">
                        <div class="card-body p-5" style="height: 12rem;">
                          <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Allocate investment capital to back minority-owned real estate operating partners.</p>
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <!-- <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button> -->
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card" style="width: 22rem;">
                        <div class="card-body p-5" style="height: 12rem;">
                          <!-- <h5 class="card-title">Card title</h5> -->
                          <p class="card-title pl-3 pr-3" style="color: black;">Desposit corporate cash with minority-owned depository institutions.</p>
                          <!-- <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button> -->
                        </div>
                      </div>
                    </div>
  
                  </div>
               
               
                  <div class="d-flex mb-4 mt-3 justify-content-center">
  
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card" style="width: 22rem;">
                        <div class="card-body p-5" style="height: 12rem;">
                          <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Partner with minority-owned banks to participate in financing our properties.</p>
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <!-- <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button> -->
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="ml-3 mr-3">
                      <div class="card" style="width: 22rem;">
                        <div class="card-body p-5" style="height: 12rem;">
                          <!-- <h5 class="card-title">Card title</h5> -->
                          <p class="card-title pl-3 pr-3" style="color: black;">Maintain a consistent number of affordable rental units for families within our multifamily properties.</p>
                          <!-- <button type="button" class="btn p-2 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button> -->
                        </div>
                      </div>
                    </div>
  
                  </div>

                  <h4 class="mt-5">Our mission is to make commercial real estate more accessible, transparent, and affordable to a greater number of investors.</h4>
               
                </div>
              </div>
            </section>
  
  
            <section class="pt-5 pb-5" id="home-efficient">
              <div class="p-5 mt-5" id="home-best-known">
                <div class="row p-5 mt-5 ">
                  <div class="col-lg ml-3 text-left pl-5 pr-5 mt-4">
                    <h1><b style="color: black;">Trusted by </b> <br> <b style="color:#005091">leading </b>  <b style="color: black;">institutional investors.</b></h1>
                    <p style="color: #818181;" class="mt-4">Some of the world’s most sophisticated and experienced institutions are ourtizolo <br> clients. We continue to meet their rigorous operational, financial, <br>  and governance standards in the same real estate funds and deal-by-deal offerings <br> we deliver to individuals and advisors.</p>
                </div>
                  <div class="col-md-4 pl-5" id="home-tabs">
  
                    <div class="row m-4">
                      <div class="card bg-light" style="width: 22rem;">
                        <div class=" pt-3 pb-2" >
                          <h5>Icon Here</h5>
                        </div>
                      </div>
                    </div>
  
                    <div class="row m-4 ">
                      <div class="card bg-light" style="width: 22rem;">
                        <div class=" pt-3 pb-2" >
                          <h5>Icon Here</h5>
                        </div>
                      </div>
                    </div>
  
                    <div class="row m-4">
                      <div class="card bg-light" style="width: 22rem;">
                        <div class=" pt-3 pb-2" >
                          <h5>Icon Here</h5>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
  
                <p class="mt-5 text-center" id="home-wealth" style="color:#818181 !important">Are you a registered investment advisor or institution? Learn how ourtizolo can partner with you. <br>
                  Current client? Welcome back! Log in here.</p>
              </div>

              <div id="home-investors"></div>
              <div id="home-insights"></div>
            </section>
  


            <section class="p-5" style="background-color: #005091;">
                <div class="p-5 m-5">
                    <h1 class="mt-5"><b> Join our network of world-class
                        institutional investors. </b></h1>
                    <p class="mb-5">Connect with ourtizolo to invest.</p>
                    <button type="button" class="btn ml-3 mr-3 p-2 pl-3 pr-3" style="border-radius:20px !important; color:#005091; border-color: #005091; background-color:white">Contact Us</button>
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
            mySVG2: require('../assets/img/6245a14a9de15ddf987c3ab2_tranparacy-img.svg'),
            mySVG3: require('../assets/img/6245a1899de15d81b87c3b50_data-driven-graph.svg'),
            mySVG1: require('../assets/img/62df12f7dc504d31c5617d7f_my-investments-3-p-500.png'),
            SVG1: require('../assets/img/1.svg'),
            SVG2: require('../assets/img/2.svg'),
            SVG3: require('../assets/img/3.svg'),
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