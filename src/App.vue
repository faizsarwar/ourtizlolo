<template>
  <div
    style="
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    "
    class="p-0 m-0"
  >
      <div style="background-color: #d3184e" class="center_elements pt-1 pb-1">
        <p class="mt-2 mb-2" >
          <a href="/" style="color:aliceblue"> Just In: Read Our Quarterly Commercial Real Estate Insights </a>
        </p>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light mt-0 mb-0 p-0" id="navbar_top" style="background-color:white; color:#0b0970">
        <a href="/">
        <img
          :src="require('@/assets/img/Logo-Color-Positive.png')"
          alt=""
          srcset=""
          style="height: 60px"
          class="m-3 header-img ml-5 mr-5"
        />
       </a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse ml-5 pl-5 " id="navbarNavDropdown" style="color:#0b0970">
<ul class="navbar-nav">
  <li class="nav-item ml-5 mr-3 dropdown" >
    <a class="nav-link dropdown-toggle" style="color:black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Products
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="/ourtizolo-funds">Direct Access Funds</a>
      <a class="dropdown-item" href="/deal-by-deal">Deal-By-Deal Investing</a>
      <!-- <a class="dropdown-item" href="/secondary-market">Secondary Market</a> -->
    </div>
  </li>
  <li class="nav-item mr-3 ml-3  dropdown" >
    <a class="nav-link dropdown-toggle" style="color:black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Investors
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="/for-advisors">For Advisors</a>
      <a class="dropdown-item" href="/institutions">For Institutions</a>
    </div>
  </li>
  <li class="nav-item mr-3 ml-3  dropdown" >
    <a class="nav-link dropdown-toggle" style="color:black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Reseacrh
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="/track-record">Track Record </a>
      <!-- <a class="dropdown-item" href="#">Insights</a> -->
    </div>
  </li>
  <li class="nav-item ml-3 mr-3 dropdown">
    <a class="nav-link dropdown-toggle" style="color:black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      About US 
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="/our-company">Our Company  </a>
      <a class="dropdown-item" href="/why-ourtizolo">Why ourtizolo</a>
      <!-- <a class="dropdown-item" href="#">Media</a> -->
      <!-- <a class="dropdown-item" href="#">FAQ</a> -->
    </div>
  </li>
</ul>

<!--button  -->
<div class="ml-auto mr-2">
  <a href="/sign-up">
    <button type="button" class="btn ml-3 mr-3 p-2 pl-3 pr-3" style="border-radius:20px !important; color:#0087e2; border-color: #0087e2; background-color:white">Sign Up</button>
  </a>
  <a href="/login">
    <button type="button" class="btn p-2 pl-3 pr-3" style="border-radius:20px !important; background-color:#0087e2; color:white">Sign In</button>
  </a>
</div>

</div>
</nav>
    <section style="overflow-x: hidden" class="body-tag" >
      <div class="side-bar" v-if="![ 'SignUp', 'login', 'forgot-password','account-information','advisor-form','investor-form','not-accredited','advisor-account-info','accreditation-status'].includes($route.name)">
        <div class="side-bar-nav">
          <a href="#home-hero" id="Button1" nav-link="section link" class="dot-link w-inline-block w--current"></a>
          <a href="#home-improve" id="Button2" nav-link="section link" class="dot-link w-inline-block "> </a>
          <a href="#home-performance" id="Button3" class="dot-link w-inline-block"></a>
          <a href="#home-efficient" id="Button4" class="dot-link w-inline-block"></a>
          <a href="#home-best-known" id="Button5" class="dot-link w-inline-block"></a>
          <a href="#home-tabs" id="Button6" class="dot-link w-inline-block"></a>
          <a href="#home-wealth" id="Button7" class="dot-link w-inline-block"></a>
          <a href="#home-investors" id="Button8" class="dot-link w-inline-block"></a
          ><a href="#home-insights" id="Button9" class="dot-link w-inline-block"></a>
        </div>
      </div>  
      
      <router-view />
    </section>

    <!-- Footer -->
    <footer
      class="font-small footer pt-5 pb-5 pl-5 pr-5"
      style="background-color: black; color: white !important"
    >
      <!-- Footer Links -->
      <div class="text-center text-md-left ">
        <!-- Grid row -->
        <div class="row mt-4 ml-4 mr-4">
          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: white"
            >
             Products
            </h5>

            <ul class="">
              <li>
                <a
                  style="color: #818181 !important"
                  href="/ourtizolo-funds"
                  >Direct Access Funds</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="/deal-by-deal"
                  >Deal-By-Deal</a
                >
              </li>

              <li>
                <a
                  style="color: #818181 !important"
                  href="/secondary-market"
                  >Secondary Market</a
                >
              </li>
              <!-- <li>
                <a
                  style="color: #818181 !important"
                  href="/visit-usvisit-us/"
                  >Visit Us</a
                >
              </li> -->
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ml-4" style="color: white">
              Investors
            </h5>

            <ul class="ml-0">
              <li>
                <a style="color: #818181 !important" href="/institutions"
                  >Institutions</a
                >
              </li>
              <li>
                <a style="color: #818181 !important" href="/for-advisors"
                  >Advisors</a
                >
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ml-4" style="color: white">
              Research
            </h5>

            <ul class="ml-0">
              <li>
                <a style="color: #818181 !important" href="/track-record"
                  >Track Record
                </a>
              </li>
              <!-- <li>
                <a
                  style="color: #818181 !important"
                  href="/"
                  >Insights</a
                >
              </li> -->
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ml-4" style="color: white">
              About Us
            </h5>

            <ul class="ml-0">
              <li>
                <a style="color: #818181 !important" href="/our-company"
                  >Our Company
                </a>
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="/why-ourtizolo"
                  >Why ourtizolo</a
                >
              </li>
              <!-- <li>
                <a
                  style="color: #818181 !important"
                  href="/"
                  >Media</a
                >
              </li>
              <li>
                <a
                  style="color: #818181 !important"
                  href="/"
                  >FAQs</a
                >
              </li> -->
            </ul>
          </div>
        

          <hr class="clearfix w-100 d-md-none" />

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4">
            <!-- Links -->
            <!-- <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: white"
            >
              Subscribe to our newsletter
            </h5>

            <form @submit.prevent="submitForm">
              <div class="row ml-4">
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
                <button type="submit" class="btn btn-danger ml-4" style="height: 40px">
                  Submit
                </button>
                <sub
                  >By subscribing you agree with our Terms of Use & Privacy Policy.</sub
                >
              </div>
            </form> -->

            <p class="mt-5 mb-4 ml-4 pr-4" style="color: #818181 !important">
              4815 Excelsior Boulevard Minneapolis, MN 55416 Email: info@growtolife.com
              <br />
              Call: (952) 405-8181 <br />
              Email: info@growtolife.com
            </p>

            <h5
              class="font-weight-bold text-uppercase mt-3 mb-3 ml-4 mt-2"
              style="color: white"
            >
              Connect With Us
            </h5>
            <div class="row pl-5 pr-5">
              <div claiss="col-sm-3">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-sm-3">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-instagram ml-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-sm-3">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="white"
                    class="bi bi-youtube ml-4 mb-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    />
                  </svg>
                </a>
              </div>
              <div claiss="col-sm-3">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-linkedin ml-4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- <hr
        style="background-color: rgb(252, 222, 222); width: 90%"
        class="ml-5"
      /> -->
      <!-- Copyright -->
      <div class="footer-copyright pl-5 pr-5 " style="color: #818181 !important">
        © ourtizolo 2022. Broker dealer services in connection with an investment are offered by Realourtizolo LLC, a broker/dealer registered with FINRA and a member of SIPC. Information on all FINRA registered broker dealers can be found on FINRA’s BrokerCheck. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. All securities involve risk and may result in partial or total loss. No conclusion of any type or kind should be drawn regarding the future performance of investments offered or managed by us based upon the information presented herein. Performance information presented does not include any reinvestment of dividends or other earnings. Performance information presented has been prepared internally (unless otherwise noted) and has not been audited or verified by a third party. Information on this page is based on information available to us as of the date of posting and we do not represent that it is accurate, complete or up to date. Banking services are provided by Synapse’s bank partners, Members FDIC.
      </div>
      <!-- Copyright -->
      <div class="inner-footer-3">

        <a href="" class="footer-link-2" style="color:white;">Terms & Services</a>

        <div class="footer-divider"></div>

        <a href="" class="footer-link-2" style="color:white;">Privacy & Cookies</a>

        <div class="footer-divider"></div>

        <a href="" class="footer-link-2" style="color:white;">Confidentiality Agreement</a>

        <div class="footer-divider"></div>

        <a href="" class="footer-link-2" style="color:white;">Form Crs</a>

        <div class="footer-divider"></div>

        <a href="" class="footer-link-2" style="color:white;">Regulation Best Intrest Disclosures</a>

      </div>

    </footer>
    <!-- Footer -->
  </div>
</template>
<script>
import axios from "axios";
// import Swal from "sweetalert2";
import $ from 'jquery'
export default {
  data() {
    return {
      showMobileMenu: false,
      email: "",
      errors: [],
      cart: {
        items: [],
      },
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted(){
    this.cart = this.$store.state.cart;
      // for button 1
    $("#Button1").click(function(){
        $("#Button1").addClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 2
    $("#Button2").click(function(){
        $("#Button2").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 3
    $("#Button3").click(function(){
        $("#Button3").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 4
    $("#Button4").click(function(){
        $("#Button4").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 5
    $("#Button5").click(function(){
        $("#Button5").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 6
    $("#Button6").click(function(){
        $("#Button6").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 7
    $("#Button7").click(function(){
        $("#Button7").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 8
    $("#Button8").click(function(){
        $("#Button8").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button9").removeClass("bg-primary");
    });

    // for button 9
    $("#Button9").click(function(){
        $("#Button9").addClass("bg-primary");
        $("#Button1").removeClass("bg-primary");
        $("#Button2").removeClass("bg-primary");
        $("#Button3").removeClass("bg-primary");
        $("#Button4").removeClass("bg-primary");
        $("#Button5").removeClass("bg-primary");
        $("#Button6").removeClass("bg-primary");
        $("#Button7").removeClass("bg-primary");
        $("#Button8").removeClass("bg-primary");
    });

    },

  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");
      this.$store.commit("removeToken");
      this.$store.commit("removeUserId");
      this.$router.push("/");
    },
    async submitForm() {
      const formData = {
        email: this.email,
      };
      await axios
        .post("/api/v1/info/", formData)
        .then((response) => {
          console.log(response);
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "Successfully Subscribed Email",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");
            console.log(JSON.stringify(error));
          }
        });
    },
  },

  computed: {
    cartTotalLength() {
      console.log("hi faiz", this.cart.items.length);
      let totalLength = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }
      return totalLength;
    },
  },
};
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
</script>

<style lang="scss">
.header {
  background: rgb(0, 178, 255);
  color: #fff;
}
#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 5px 5px;
  vertical-align: top;
  margin-left: -8px;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .product-img {
    height: 250px;
    width: 200px;
  }
}
/* max 1250 or less */
@media only screen and (max-width: 1250px) {
  // .card-text{
  //   display:none;
  // }
}
@media only screen and (max-width: 770px) {
  .product-img {
    height: 300px;
    width: 250px;
  }
}
/* max 800px or less */
@media only screen and (max-width: 800px) {
  .no-overflow {
    display: none;
  }
  .cards-heading {
    display: none;
  }
}
// header-img
/* max 1150px or less */
@media only screen and (max-width: 1250px) {
  .header-img {
    display: none;
  }
  .product-img {
    height: 400px;
    width: 350px;
  }
}
@media only screen and (min-width: 1250px) {
  .product-img {
    height: 600px;
    width: 550px;
  }
}
////
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 999px) {
  .card-img-top {
    height: 260px !important;
  }
}
.body-tag {
  overflow-x: hidden;
}
.product-img {
  overflow-y: hidden;
  overflow-x: hidden;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.heading {
  font-weight: 300;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
}
.heading:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 1px;
  bottom: 0;
  left: 25%;
  border-bottom: 3px solid black;
}
.center_elements {
  display: flex;
  justify-content: center;
  text-align: center;
}
.swal2-icon {
  overflow-y: hidden;
}
.navigation {
  position: fixed;
  width: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  bottom: 0;
  border-top: 0;
  transition: 0.3s;
}
.swal2-icon .swal2-success .swal2-icon-show {
  overflow-y: hidden;
  overflow-x: hidden;
}
li a {
  color: white;
  text-decoration: none;
}
.no-underline {
  text-decoration: none !important;
}
.categories li a {
  color: #466d1d;
  text-decoration: none;
  font-weight: bolder;
}
.card-image {
  height: 300px;
}
.cards {
  height: 280px;
}
.card {
  overflow-y: hidden;
}
.cards {
  overflow-y: hidden;
}
.card-body {
  overflow-y: hidden;
}
.no-overflow {
  overflow-y: hidden;
}
.card-fancy {
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  background-color: white;
}

.navbar strong {
  color: black;
}

.navbar p {
  color: green;
}

.col-md-4 {
  overflow-y: hidden;
}
.card-fancy:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  text-decoration: none;
}
@media (max-width: 990px) {
  .card {
    margin: 20px;
  }
}
#app {
  font-family: 'Exo 2';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none !important;
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.a-exact-active {
      color: #42b983;
    }
  }
}

// adding responsive tags
@media (max-width: 992px) {
  .section-title {
    font-size: 3rem;
  }
}
@media (max-width: 561px) {
  .section-title {
    font-size: 2rem;
  }
  .card-img-top {
    height: 200px;
  }
}
@media (max-width: 270px) {
  .flexDirectionColAt270 {
    flex-direction: column;
  }
  .card-img-top {
    height: 150px;
  }
}

html{
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}
body{
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}
.icon {
  font-size: 30px;
  margin-right: 20px;
}
@media (max-width: 1326px) {
  html {
    font-size: 100%;
  }
}
@media (max-width: 1200px) {
  html {
    font-size: 95%;
  }
}
@media (max-width: 1100px) {
  html {
    font-size: 90%;
  }
}
#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  /* height: 40px;
            background: grey; */
}
@media (max-width: 1000px) {
  html {
    font-size: 85%;
  }
  .card-img-top {
    height: 300px;
  }
}
@media (max-width: 900px) {
  html {
    font-size: 80%;
  }
  .card-img-top {
    height: 300px;
  }
}
@media (max-width: 770px) {
  html {
    font-size: 75%;
  }
  .card-img-top {
    height: 270px;
  }
}
@media (max-width: 680px) {
  html {
    font-size: 70%;
  }
  .card-img-top {
    height: 200px;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 65%;
  }
  .card-img-top {
    height: 200px;
  }
  .protocol-img {
    height: 50%;
  }
}

h1 b,
h2 b,
h3 b,
h4 b {
  color: #07ad31;
}

p,
strong,
b {
  color: #07ad31;
}

@media (max-width: 530px) {
  html {
    font-size: 60%;
  }
  .card-img-top {
    height: 180px;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 350px) {
  html {
    font-size: 55%;
  }
  .card-img-top {
    height: 150px;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 250px) {
  html {
    font-size: 50%;
  }
  .card-img-top {
    height: 150px;
  }

  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 230px) {
  html {
    font-size: 45%;
  }
  .protocol-img {
    height: 50%;
  }
}
@media (max-width: 210px) {
  html {
    font-size: 40%;
  }
  .card-img-top {
    height: 150px;
  }
  .protocol-img {
    height: 50%;
  }
}

.set-color {
  color: black;
}

@media (min-width: 768px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
  }
}
@media (max-width: 767px) {
  .dropdown:hover .dropdown-menu {
    display: none;
    margin-top: auto;
  }
}

//for searchbar
.form-inputs {
  position: relative;
}
.form-inputs .form-control {
  height: 45px;
}

.form-inputs .form-control:focus {
  box-shadow: none;
  border: 1px solid #000;
}

.form-inputs i {
  position: absolute;
  right: 10px;
  top: 15px;
}

.qty {
  font-size: 12px;
}

.faiz {
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  position: relative;
  text-decoration: none;
  font-weight: 100;
  color: black;
  transition: all 0.25s ease;
}

.navbar li {
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  position: relative;
  text-decoration: none;
  font-weight: 100;
  color: black;
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    color: black;

    &::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}

ul {
  list-style-type: none;
}

@media (max-width: 190px) {
  html {
    font-size: 35%;
  }
  .card-img-top {
    height: 100px;
  }
  .protocol-img {
    height: 50%;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 15px;
  }
  //   .card-img-top, .card-body, .seller-Card{
  //   height: 200px
  // }
}

.gradient-icon.purple {
  background-color: #4e1eaf;
  background-image: none;
}

.gradient-icon {
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
width: 38px;
height: 38px;
min-height: 38px;
min-width: 38px;
margin-right: 25px;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
border-radius: 5px;
background-image: linear-gradient(81deg,#34009b,#288bff);
}


ul li a {
  color: #818181;
}
.swal2-icon,
.swal2-success,
.swal2-icon-show,
.swal2-success-ring,
.swal2-success-fix,
.swal2-timer-progress-bar,
.swal2-timer-progress-bar-container,
.swal2-container,
.swal2-top-end,
.swal2-backdrop-show {
  overflow-x: hidden !important;
}
.swal-wide {
  overflow: hidden !important;
}

* {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 65%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 10%;
  padding: 10px;
  background: #c5e4f1;
  color: black;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}

.wrapper {
  height: 100%;
}

.dropdown-menu {
	min-width: 200px;
}
.dropdown-menu.columns-3 {
	min-width: 400px;
}
.dropdown-menu li a {
	padding: 5px 15px;
	font-weight: 300;
}
.multi-column-dropdown {
	list-style: none;
  margin: 0px;
  padding: 0px;
}
.multi-column-dropdown li a {
	display: block;
	clear: both;
	line-height: 1.428571429;
	color: #333;
	white-space: normal;
}
.multi-column-dropdown li a:hover {
	text-decoration: none;
	color: #262626;
	background-color: #999;
}
 
@media (max-width: 767px) {
	.dropdown-menu.multi-column {
		min-width: 240px !important;
		overflow-x: hidden;
	}
}

a strong {
  color:black;  
}

@import './variables.scss';
@import './mixins.scss';
@import './style.scss';

.swiper {
  @include swiper-wrapper();
}

.swiper-slide{
      height:100%;
}


div.container3 {

 position: relative }              /* 1 */
div.container3 a {
 margin: 0;
 position: absolute;               /* 2 */
 top: 40%;                         /* 3 */
 transform: translate(0, -40%) }   /* 4 */

.slide {
  @include swiper-slide();
  height:100%;
}

.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin-right: 10px;
  padding-left: 20px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.dot-link {
  width: 8px;
  height: 8px;
  margin-bottom: 16px;
  border-radius: 100%;
  background-color: #eaeaea;
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
.side-bar-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms;
  display: flex;
  height: 300px;
  margin-right: 30px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

a {
  background-color: transparent;
  color: #636363;
  text-decoration: underline;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.footer-divider {
  width: 1px;
  height: 14px;
  background-color: #fff;
}

.footer-link-2 {
  margin-top: 0;
  margin-bottom: 0;
  border-right: 1px solid #000;
  -webkit-transition: opacity .2s;
  transition: opacity .2s;
  color: #fff;
  line-height: 22px;
  text-decoration: underline;
}

.inner-footer-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 18px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.dropdown-item{
  color: black !important;
}
</style>