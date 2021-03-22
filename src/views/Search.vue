<template>
    <div class="s">
        <Header/>
        <section class="our-listing bgc-f7 pb30-991">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="listing_sidebar dn db-991">
                                    <div class="sidebar_content_details style3">
                                        <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
                                        <div class="sidebar_listing_list style2 mobile_sytle_sidebar mb0">
                                            <div class="sidebar_advanced_search_widget">
                                                <h4 class="mb25">Advanced Search <a class="filter_closed_btn float-right" href="#"><small>Hide Filter</small> <span class="flaticon-close"></span></a></h4>
                                                <ul class="sasw_list style2 mb0">
                                                    <li class="search_area">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="keyword">
                                                            <label for="exampleInputEmail"><span class="flaticon-magnifying-glass"></span></label>
                                                        </div>
                                                    </li>
                                                    <li class="search_area">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" id="exampleInputEmail" placeholder="Location">
                                                            <label for="exampleInputEmail"><span class="flaticon-maps-and-flags"></span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_two">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Status</option>
                                                                    <option>Apartment</option>
                                                                    <option>Bungalow</option>
                                                                    <option>Condo</option>
                                                                    <option>House</option>
                                                                    <option>Land</option>
                                                                    <option>Single Family</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_two">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Property Type</option>
                                                                    <option>Apartment</option>
                                                                    <option>Bungalow</option>
                                                                    <option>Condo</option>
                                                                    <option>House</option>
                                                                    <option>Land</option>
                                                                    <option>Single Family</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="small_dropdown2">
                                                            <div id="prncgs" class="btn dd_btn">
                                                                <span>Price</span>
                                                                <label for="exampleInputEmail2"><span class="fa fa-angle-down"></span></label>
                                                            </div>
                                                            <div class="dd_content2">
                                                                <div class="pricing_acontent">
                                                                    <input type="text" class="amount" placeholder="$52,239"> 
                                                                    <input type="text" class="amount2" placeholder="$985,14">
                                                                    <div class="slider-range"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_two">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Bathrooms</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                    <option>6</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_two">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Bedrooms</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                    <option>6</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_two">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Garages</option>
                                                                    <option>Yes</option>
                                                                    <option>No</option>
                                                                    <option>Others</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                    <li class="min_area style2 list-inline-item">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" id="exampleInputName2" placeholder="Min Area">
                                                        </div>
                                                    </li>
                                                    <li class="max_area list-inline-item">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" id="exampleInputName3" placeholder="Max Area">
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div id="accordion" class="panel-group">
                                                            <div class="panel">
                                                                <div class="panel-heading">
                                                                    <h4 class="panel-title">
                                                                        <a href="#panelBodyRating" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i class="flaticon-more"></i> Advanced features</a>
                                                                    </h4>
                                                                </div>
                                                                <div id="panelBodyRating" class="panel-collapse collapse">
                                                                    <div class="panel-body row">
                                                                        <div class="col-lg-12">
                                                                            <ul class="ui_kit_checkbox selectable-list float-left fn-400">
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                                        <label class="custom-control-label" for="customCheck1">Air Conditioning</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck4">
                                                                                        <label class="custom-control-label" for="customCheck4">Barbeque</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck10">
                                                                                        <label class="custom-control-label" for="customCheck10">Gym</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck5">
                                                                                        <label class="custom-control-label" for="customCheck5">Microwave</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck6">
                                                                                        <label class="custom-control-label" for="customCheck6">TV Cable</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                                                        <label class="custom-control-label" for="customCheck2">Lawn</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck11">
                                                                                        <label class="custom-control-label" for="customCheck11">Refrigerator</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck3">
                                                                                        <label class="custom-control-label" for="customCheck3">Swimming Pool</label>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                            <ul class="ui_kit_checkbox selectable-list float-right fn-400">
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck12">
                                                                                        <label class="custom-control-label" for="customCheck12">WiFi</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck14">
                                                                                        <label class="custom-control-label" for="customCheck14">Sauna</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck7">
                                                                                        <label class="custom-control-label" for="customCheck7">Dryer</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck9">
                                                                                        <label class="custom-control-label" for="customCheck9">Washer</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck13">
                                                                                        <label class="custom-control-label" for="customCheck13">Laundry</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck8">
                                                                                        <label class="custom-control-label" for="customCheck8">Outdoor Shower</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="customCheck15">
                                                                                        <label class="custom-control-label" for="customCheck15">Window Coverings</label>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="search_option_button">
                                                            <button type="submit" class="btn btn-block btn-thm">Search</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="breadcrumb_content style2 mb0-991">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active text-thm" aria-current="page">Search</li>
                                    </ol>
                                    <h2 class="breadcrumb_title">Sort through properties</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="listing_list_style mb20-xsd tal-991">
                                    <ul class="mb0">
                                        <li class="list-inline-item"><a href="#"><span class="fa fa-th-large"></span></a></li>
                                        <li class="list-inline-item"><a href="#"><span class="fa fa-th-list"></span></a></li>
                                    </ul>
                                </div>
                                <div class="dn db-991 mt30 mb0">
                                    <div id="main2">
                                        <span id="open2" class="flaticon-filter-results-button filter_open_btn style2"> Show Filter</span>
                                    </div>
                                </div>
                            </div>
                        </div>

           
                        <div class="row">
                            <div class="col-lg-4 col-xl-4">
                                <div class="sidebar_listing_grid1 dn-991">
                                    <SearchBox v-on:listenerKeyword="listenerKeyword"  />

                                    <FeaturedSearch/>
                                    <div class="terms_condition_widget">
                                        <h4 class="title">Categories Property</h4>
                                        <div class="widget_list">
                                            <ul class="list_details">
                                                <li><a href="#"><i class="fa fa-caret-right mr10"></i>Apartment <span class="float-right">6 properties</span></a></li>
                                                <li><a href="#"><i class="fa fa-caret-right mr10"></i>Condo <span class="float-right">12 properties</span></a></li>
                                                <li><a href="#"><i class="fa fa-caret-right mr10"></i>Family House <span class="float-right">8 properties</span></a></li>
                                                <li><a href="#"><i class="fa fa-caret-right mr10"></i>Modern Villa <span class="float-right">26 properties</span></a></li>
                                                <li><a href="#"><i class="fa fa-caret-right mr10"></i>Town House <span class="float-right">89 properties</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="sidebar_feature_listing">
                                        <h4 class="title">Recently Viewed</h4>
                                        <div class="media">
                                            <img class="align-self-start mr-3" src="images/blog/fls1.jpg" alt="fls1.jpg">
                                            <div class="media-body">
                                                <h5 class="mt-0 post_title">Nice Room With View</h5>
                                                <a href="#">$13,000/<small>/mo</small></a>
                                                <ul class="mb0">
                                                    <li class="list-inline-item">Beds: 4</li>
                                                    <li class="list-inline-item">Baths: 2</li>
                                                    <li class="list-inline-item">Sq Ft: 5280</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <img class="align-self-start mr-3" src="images/blog/fls2.jpg" alt="fls2.jpg">
                                            <div class="media-body">
                                                <h5 class="mt-0 post_title">Villa called Archangel</h5>
                                                <a href="#">$13,000<small>/mo</small></a>
                                                <ul class="mb0">
                                                    <li class="list-inline-item">Beds: 4</li>
                                                    <li class="list-inline-item">Baths: 2</li>
                                                    <li class="list-inline-item">Sq Ft: 5280</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <img class="align-self-start mr-3" src="images/blog/fls3.jpg" alt="fls3.jpg">
                                            <div class="media-body">
                                                <h5 class="mt-0 post_title">Sunset Studio</h5>
                                                <a href="#">$13,000<small>/mo</small></a>
                                                <ul class="mb0">
                                                    <li class="list-inline-item">Beds: 4</li>
                                                    <li class="list-inline-item">Baths: 2</li>
                                                    <li class="list-inline-item">Sq Ft: 5280</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-8">
                                <div class="row">
                                    <div class="grid_list_search_result">
                                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-5">
                                            <div class="left_area tac-xsd">
                                                <p> Search results</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-7">
                                            <div class="right_area text-right tac-xsd">
                                                <ul>
                                                    <li class="list-inline-item"><span class="stts">Status:</span>
                                                        <select name=""  class="selectpicker show-tick">
                                                            <option value="">All Status</option>
                                                            <option value="">Recent</option>
                                                            <option value="">Old Review</option>
                                                        </select>
                                                    </li>
                                                    <li class="list-inline-item"><span class="shrtby">Sort by:</span>
                                                        <select class="selectpicker show-tick">
                                                            <option>Featured First</option>
                                                            <option>Featured 2nd</option>
                                                            <option>Featured 3rd</option>
                                                            <option>Featured 4th</option>
                                                            <option>Featured 5th</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="searchi row">

                                

                                        <div v-for="result in results" :key="result.id" class="col-lg-12">
                                            <div class="feat_property list">
                                                <div class="thumb">

                                                
                                                    <img style="width: 230px; height: 230px;" class="img-whp" :src="getImage(result.images[1])"  alt="fp1.jpg">
                                                    <div class="thmb_cntnt">
                                                        <ul class="icon mb0">
                                                            <li class="list-inline-item"><a href="#"><span class="flaticon-transfer-1"></span></a></li>
                                                            <li class="list-inline-item"><a href="#"><span class="flaticon-heart"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="details">
                                                    <div class="tc_content">
                                                        <div class="dtls_headr">
                                                            <ul class="tag p-1">
                                                                <li class="list-inline-item"><a href="#">{{result.categories.name}}</a></li>
                                                            
                                                            </ul>
                                                            <a class="fp_price" href="#">NGN {{result.price}}</a>
                                                        </div>
                                            
                                                        <a href="">
                                                           <!-- <router-link :to={ path: }><h4>{{result.title}}</h4></router-link>  -->
                                                             <!-- <router-link to="/about">About</router-link>  -->
                                                             <router-link :to="{name: 'singleView', params:{slug: result.slug}}" ><h4>{{result.title}}</h4></router-link>

                                                        
                                                        </a>
                                                        <p><span class="flaticon-placeholder"></span>{{result.location}}</p>
                                                        <ul class="prop_details mb0">
                                                            <li class="list-inline-item"><a href="#">Beds: {{result.bedrooms}}</a></li>
                                                            <li class="list-inline-item"><a href="#">Baths: {{result.bathrooms}}</a></li>
                                                            <li class="list-inline-item"><a href="#">Total Area: {{result.total_area}}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="fp_footer">
                                                        <ul class="fp_meta float-left mb0">
                                                            <li class="list-inline-item"><a href="#"><img width="50" height="50" src="images/avatar/avatar.png" alt="pposter1.png"></a></li>
                                                            <li class="list-inline-item"><a href="#">{{result.agents.name}}</a></li>
                                                        </ul>
                                                        <div class="fp_pdate float-right">{{result.created_at}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                

                                    

                                    
                                    <div class="col-lg-12 mt20">
                                        <div class="mbp_pagination">
                                            <ul class="page_navigation">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true"> <span class="flaticon-left-arrow"></span> Prev</a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item active" aria-current="page">
                                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link" href="#">29</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#"><span class="flaticon-right-arrow"></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
	    </section>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchBox from "@/components/SearchBox.vue";
import FeaturedSearch from "@/components/FeaturedSearch.vue";

import axios from 'axios';
export default {
     data () {
    return {
        results: [],
        keyword2: '',
        address: '',
    }
  },
  created () {
      console.log('category:', this.$store.getters.category)
      console.log('keyword:', this.$store.getters.keyword)

      axios.post('https://app.propsempire.com/api/search', {

            key: this.$store.getters.keyword

          })
          .then((response)=>(
             
             this.results = response.data,

            console.log(this.results)

            //  this.results = response.data
            
             
             
             ))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
            
          }); 
  },

  mounted() {
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address.focus();
        },
 
  methods: {

      getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
            },

    

       listenerKeyword(reply){

           


        this.keyword2 = reply;

        

        console.log('from listerner box '+this.keyword2)

         axios.post('https://app.propsempire.com/api/search', {

            key: this.keyword2
          })
          .then((response)=>(
             
             this.results = response.data,

            console.log("listened : " + this.results)
            
             
             
             ))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
            
          }); 

           

    },

      getImage(imgUrl){

         

         return "https://app.propsempire.com/listing_images/" +imgUrl.img_path;


      },

       search(){

      

      console.log(this.key)

      this.searchOn = 'd-none'

         axios.post('https://app.propsempire.com/api/search', {
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

  },

  
    name: "Search",
        components:{
            Header,
            SearchBox,
            FeaturedSearch,
           
        }
}
</script>