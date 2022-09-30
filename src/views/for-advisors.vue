<template>
    <div >
  
      <div class="pl-5 " style="background-color: black;" id="home-hero">
        <div class="row  text-left d-flex justify-content-center">
          <div class="col-sm-3  ml-5 p-5">
            <h2 class="mt-5"><b> Partner with ourtizolo to empower your clients.</b></h2>
            <p class="mt-4">ourtizolo’s premier commercial real estate investment platform lets you offer your clients the same opportunities as some of the best-known institutional investors in the world.            </p>
            <button type="button" class="btn p-2 ml-3 pl-5 pr-5" style="border-radius:20px !important; background-color:#005091; color:white">Contact Us</button> 
        </div>
          <div class="col-lg pl-5">
            <div class="pl-5 ml-5">
                <img
                :src="require('@/assets/img/manager-calculates-about-the-company-finances-by-p-2021-09-03-12-52-30-utc-scaled-1-1024x683.jpg')"
                class="ml-5"
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
  
            <!--  -->
            <section class="bg-light" id="home-performance">
              <div class="p-5">
                <div class="pl-5 pr-5">
                  <h2><b style="color: black;"> Legacies start here.</b> <b style="color:#005091"> Grow here. </b></h2>
               
                  <p style="color: black;" class="pl-5 pr-5 mt-4 text-center">Partner with ourtizolo for instant access to premium apartment, industrial, office and hotel assets. World-class <br> real estate managers and operators. Proprietary technology that makes the whole process <br> smarter, faster, and more efficient.</p>  
               
                  <div class="row pl-5 pr-5">
  
                    <!-- card -->
                    <div class="col-sm-3 ml-5 mr-5">
                      <div class="card" style="width: 22rem;">
                        <div class=" pt-3 pb-2" style="background-color: #50b8ff; color:white">
                          <h5>ourtizolo Funds</h5>
                        </div>
                        <div class="card-body">
                          <p class="card-title pl-3 pr-3 mb-4" style="color: black;">Invest in a diversified portfolio of properties in high-growth markets across the U.S.</p>
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <button type="button" class="btn p-2 mb-3 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                          <div class="p-0 m-0">
                            <img :src="icon4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="col-sm-3 ml-5 mr-5">
                      <div class="card" style="width: 22rem;">
                        <div class=" pt-3 pb-2" style="background-color: #50b8ff; color:white">
                          <h5>Deal-By-Deal</h5>
                        </div>
                        <div class="card-body">
                          <!-- <h5 class="card-title">Card title</h5> -->
                          <p class="card-title pl-3 pr-3" style="color: black;">Select individual commercial real estate investments through ourtizolo's Deal-by-Deal platform. Become a member to see available opportunities.</p>
                          <button type="button" class="btn p-2 mb-3 pl-3 pr-3 mt-5" style="border-radius:20px !important; background-color:#005091; color:white">Learn More</button>
                          <div class="p-0 m-0">
                            <img :src="icon5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card -->
                    <div class="col-sm-3 ml-5 mr-5">
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
              <div class="p-5 mt-5">
                <div class="row p-5 mt-5 ">
                  <div class="col-lg ml-3 text-left pl-5 pr-5 mt-4">
                    <h1><b style="color: black;">Trusted by </b> <br> <b style="color:#005091">leading </b>  <b style="color: black;">institutional investors.</b></h1>
                    <p style="color: #818181;" class="mt-4">Some of the world’s most sophisticated and experienced institutions are ourtizolo <br> clients. We continue to meet their rigorous operational, financial, <br>  and governance standards in the same real estate funds and deal-by-deal offerings <br> we deliver to individuals and advisors.</p>
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
  
            <section class="p-5" id="home-best-known" style="background-color:#f5f5f5;">
                <div class="p-5">
                    <h1><b style="color: black"> What ourtizolo brings to you </b></h1>
                    <div class="row pl-5 pr-5">
                        <div class="col-lg m-5">
                            <!-- card -->
                            <div class="ml-3 mr-3">
                                <div class="card p-4" style="width: 25rem;">
                                    <h3><b style="color:black">Advisors</b></h3>
                                    <div class="card-body text-left p-4" style="height:28rem">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Experienced team of commercial real estate investment professionals
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Established network of world-class real estate operators
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Transparent due diligence on each investment opportunity
                                            </div>

                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Comprehensive performance reporting including valuations and custodial integration
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Control over presentation of information to clients
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg m-5">
                            <!-- card -->
                            <div class="ml-3 mr-3 ">
                                <div class="card p-4" style="width: 25rem;">
                                    <h3><b style="color:black">Clients</b></h3>
                                    <div class="card-body text-left p-4" style="height:28rem">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg text-left">
                                                Low fees for institutional-quality private real estate
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Attractive value opportunities on the ourtizolo Secondary Market
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Groundbreaking opportunities for liquidity
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Curated commercial real estate deals at both an individual asset and fund level
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#005091" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                                  </svg>
                                            </div>
                                            <div class="col-lg">
                                                Visibility into performance through our platform if or when desired
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="p-5" id="home-tabs" style="background-color:#005091">
                <div class="p-5">
                    <h1><b>Essential diversification and <br> effective wealth generation.</b></h1>
                    <p>Only 12% of investors who work with a registered investment advisor <br>  have discussed commercial real estate investing with their advisors. <br> ourtizolo is here to help you have that conversation.</p>
                </div>
                <div class="row pl-5 pr-5">
                    <!-- card -->
                    <div class="ml-5 mr-5 col-sm-3">
                        <div class="card" style="width: 22rem; background-color: #50b8ff; color:white">
                          <div class=" pt-5 pb-2" style="">
                            <h4><b> Why Real Estate? </b></h4>
                          </div>
                          <div class="card-body text-left">
                            <p class="card-title pl-3 pr-3 mb-4" >Investments in private real estate may provide essential portfolio diversification, stable income, superior long-term returns and unique tax benefits.</p>
                            <p class="card-title pl-3 pr-3 mb-4">Read our research on the benefits of investing in private real estate.</p>
                        </div>
                        </div>
                      </div>

                    <!-- card -->
                    <div class="ml-5 mr-5 col-sm-3">
                      <div class="card" style="width: 22rem; background-color: #50b8ff; color:white">
                        <div class=" pt-5 pb-2" style="">
                          <h4><b> Why ourtizolo? </b></h4>
                        </div>
                        <div class="card-body text-left">
                          <p class="card-title pl-3 pr-3 mb-4" >We help registered investment advisors deliver low-cost, institutional-quality private real estate investing to their clients, from core stabilized deals to ground-up development, with the unprecedented opportunity for liquidity.</p>
                        </div>
                      </div>
                    </div>

                                          <!-- card -->
                    <div class="ml-5 mr-5 col-sm-3">
                        <div class="card" style="width: 22rem; background-color: #50b8ff; color:white">
                          <div class=" pt-5 pb-2" style="">
                            <h4><b> Why Now? </b></h4>
                          </div>
                          <div class="card-body text-left">
                            <p class="card-title pl-3 pr-3 mb-4" >Commercial real estate has historically proven to be an attractive hedge against inflation. It is typically a more stable asset class than stocks or bonds, both of which are closely tied to market movements. There’s no time like the present to help your clients take charge of their long-term prosperity.</p>
                          </div>
                        </div>
                      </div>
                </div>
            </section>

  
            <section class="p-5" id="home-wealth">
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
                
                <div id="home-investors">
                  
                </div>
                <div id="home-insights"></div>
      
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
          SVG1: require('../assets/img/1.svg'),
          SVG2: require('../assets/img/2.svg'),
          SVG3: require('../assets/img/3.svg'),
          icon4: require('../assets/img/icon4.svg'),
          icon5: require('../assets/img/icon5.svg'),
          icon6: require('../assets/img/icon6.svg'),
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