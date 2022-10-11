<template>
    <div class=" text-left p-5" style="">
        <!--  -->
        <div class="p-5 pt-0 m-5">
            <!-- <h1>Portfolio</h1> -->
            <div class="row pl-5 pr-5">
                <div class="col-lg-6">
                    <h6>Current Cadre Balance</h6>
                    <h1><b>$0</b></h1>
                </div>
                <div class="col-sm-3">
                    <h6>Current NAV</h6>
                    <h2><b>$0</b></h2>
                </div>
                <div class="col-sm-3">
                    <h6>Cash Balance</h6>
                    <h2><b>$0</b></h2>
                </div>
            </div>



            <section id="home-best-known">
                <div class="p-5 d-flex justify-content-left">
                  <div class="tab">
                    <button class="tablinks m-4 p-2 btn btn-dark" onclick="openCity(event, 'LIQUIDITY')">Real Estate</button>
                    <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Transparency')">Cash</button>
                    <!-- <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Data')">Data</button> -->
                    <hr>
                  </div>              
                </div>


                <!-- Tab1 -->
                <div id="LIQUIDITY" class="tabcontent" style="display:block">
                    <div class="row">
                        <div class="col-xl tabcontent1 " id="value"  style="display:block">
                            value chart

                        </div>
                        <div class="col-xl tabcontent1 " id="returns" style="">
                            returns chart
                            <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
                        </div>
                        <div class="col-md-4">
                            <div class="pb-5 pl-5 pr-5 d-flex justify-content-center">
                                <div class="tab">
                                  <button class="tablinks1 m-4 p-2 btn btn-dark" onclick="openCity1(event, 'value')">Total Value</button>
                                  <button class="tablinks1 m-4 p-2 btn btn-light" onclick="openCity1(event, 'returns')">Returns</button>
                                  <!-- <button class="tablinks m-4 p-2 btn btn-light" onclick="openCity(event, 'Data')">Data</button> -->
                                  <!-- <hr> -->
                                </div>              
                            </div>
                            
                        </div>
                    </div>
                    <!--  -->
                    <section>
                        <div class="align-items-center">
                            <div class="co-md-4">
                                <h1 class="ml-3"><b> Asset Type </b></h1>
        
                                <div class="card p-5 m-3 text-center" style="background-color: rgb(245, 245, 245);">
                                    <div class=" pb-3 d-flex justify-content-center">
                                        <div style="width: 50%;  "  class=" mt-5 ">
                                            <div class="ml-5 pl-5 ">
                                                <BarChart />
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Cadre Direct Access Fund</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
        
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Hotel</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
        
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Mixed Use</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
        
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Office</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
        
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Multifamily</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
        
                                        <div class="d-flex justify-content-between">
                                            <div class="text-left m-2 mr-4">
                                                <h6>Industrial</h6>
                                            </div>
                                            <div class="text-right m-2">
                                                <h5> $0</h5>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                
                            </div>
                        </div>
                      </section>
        
                        <div class=" pt-5">
                            <h1 class="ml-3"><b> Active Investments </b></h1>
                            <hr>
        
                            <div class="card p-5 m-3 text-center" style="background-color: rgb(245, 245, 245);">
                                <div class="pt-3 pb-3">
                                    <h2 class="mb-5">No Active Investments</h2>
                                    <h6>Browse the Deal-by-Deal page to learn more about our investment opportunities.</h6>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
                <!-- Tab2  -->
                <div id="Transparency" class="tabcontent">
                    <div class=" pt-5">
                        <h1 class="ml-3"><b> Account </b></h1>
        
                        <div class="card p-5 m-3 text-center" style="background-color: rgb(245, 245, 245);">
                            <div class="pt-3 pb-3">
                                <h2 class="mb-5">No Accounts</h2>
                                <h6>Open a deposit account to earn rewards and fund investments</h6>
                            </div>
                        </div>
        
                    </div>
    
                </div>
                

              </section>



        </div>


    </div>
</template>
  
  <script >
//   import Chart from 'chart.js'
      import BarChart from '../components/chart.vue'




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
        BarChart
      },
      mounted() {
        this.getAccountDetails()
        // this.drawChart()
    },
      methods: {
//         drawChart(){
//             const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// console.log(myChart)
//         },
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

    
    *{
        font-family: Calibre, sans-serif;
    }
    /* Style the tab content */
    .tabcontent {
        display: none;
        padding: 6px 12px;
        border-top: none;
    }

    .tabcontent1 {
        display: none;
        padding: 6px 12px;
        border-top: none;
    }
  </style>