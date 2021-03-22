<template>
 
  <div>
     <Header/>
      <MobileNav/>
        <HeroSection v-on:listenerKeyword="listenerKeyword" v-on:listenerCategory="listenerCategory" />
          <PropertyCities/>
            <Services/>
            <h1>Welcome to Propsempire</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h4>All Listings</h4>

    <div class="form-group">
        <input @keyup="search" v-model="key" type="text" class="form-control" placeholder="search">
      </div>
      <div class="row">

          <div v-for="result in results" :key="result.id" class="col-md-4">
            <div class="card card-body">

                <h4>{{result.title}}</h4>

            </div>
          </div>

      </div>
    <div :class="searchOn"  class="norm col-md-10 mx-auto">

        <div v-if="show" class="row">
          <div v-for="listing in listings" :key="listing.id"  class="col-md-4 mx-auto">
            <div class="card card-body">
              <h4>{{listing.title}}</h4>
              <p>{{listing.description}}</p>

              <p>{{listing.images.img_path}}</p>

               <router-link :to="{name: 'about', params:{slug: listing.slug}}" >view property</router-link>


            </div>
          </div>
        </div>

        <div v-else class="h-100">

          loading...

        </div>


    </div>
              <MostSearched/>
        <!-- <FeaturedProperty/> -->

    
  </div>
  
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import MobileNav from "@/components/MobileNav.vue";
import HeroSection from "@/components/HeroSection.vue";
import PropertyCities from "@/components/PropertyCities.vue";
import Services from "@/components/Services.vue";
import MostSearched from "@/components/MostSearched.vue";
// import FeaturedProperty from "@/components/FeaturedProperty.vue";
import axios from 'axios'

export default {
  watch: {
    
  },
  
  data () {
    return {
      listings: [],
       results: [],
      show: false,
      key: '',
      searchOn: '',
      keyword:'',
      category: '',
    }
  },
  methods: {

    listenerCategory(reply){

        this.keyword = reply;

        console.log('from keyword '+this.keyword)

    },
    listenerKeyword(reply){

        this.category = reply;

        console.log('from category '+this.category)

    },
    search(){

      

      console.log(this.key)

      this.searchOn = 'd-none'

         axios.post('http://localhost:89/api/search', {
            key: this.key
          })
           .then((response)=>(
             
             this.results = response.data

            // console.log(response.data)
            
             
             
             ))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
            
          }); 

    },
    load_listings(){
      this.show = true

      axios.get('https://app.propsempire.com/all_listings', {
            params: {
              ID: 12345
            }
          })
           .then((response)=>(
             
             this.listings = response.data
               
  
             ))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
             this.show = false
          }); 

    }
  },
  props: {
  },
  created () {
    
    

    setInterval(this.load_listings, 30000)



    
    
    

  },
  name: "home",
  components: {
    HelloWorld,
    Header,
    MobileNav,
    HeroSection,
    PropertyCities,
    Services,
    MostSearched,
    // FeaturedProperty
  }
};
</script>
