<template >
    <div class=" p-5" style="background-color:#F4F2F2;">
        <div  ref="myform"  style="height:100% !important;">
            <div id="wrapper" data-tf-widget="yAwoTcz5" data-tf-inline-on-mobile data-tf-medium="snippet" ></div> 
            <!-- <script src="//embed.typeform.com/next/embed.js"></script> -->

        </div>    
            <!-- <iframe class="mb-5 mt-5" width="560" height="315" src="https://www.youtube.com/embed/Xk9OjK30I8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        
        
        <div id="form" style="height:600px !important;">
        </div>
    </div>

</template>


<script>
// import VueScriptComponent from 'vue-script-component'
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
    export default {
        data () {
 return {
    }
        },
        mounted() {
        // let foo = document.createElement('script');    
        // foo.setAttribute("src","//embed.typeform.com/next/embed.js");
        // document.body.appendChild(foo);
        createWidget('yAwoTcz5', { container: document.querySelector('#form') })
        }
    }
</script>

<style scoped>*{margin:0;padding:0;} html,body,#wrapper{width:100%;height:100%;} iframe{border-radius:0 !important;} </style>