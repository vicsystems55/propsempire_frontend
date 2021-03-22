<template>
  <div class="about">
    <h1>This is an about page  {{$route.params.slug}}  </h1>
    <h4>Title: {{listing.title}}</h4>
  </div>
</template>

<script>
import axios from 'axios'

export default ({
  methods: {
    single_listing(){

      console.log('start');

       axios.post('https://app.propsempire.com/single_listing', {
         
              slug: this.$route.params.slug
            
          })
           .then((response)=>(
             
             this.listing = response.data

            
             
             ))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
            // var vm = this;
            // console.log(vm.listing);
          }); 

          
    }
  },
  data () {
    return {
      listing: [],
      show : true,
    }
  },
  props: {
    id: String
  },
  created () {
    
    this.single_listing();

    console.log(listing)


    
  },
  setup() {
    
  },
})
</script>

