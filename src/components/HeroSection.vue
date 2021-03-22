<template>
    <section class="home-three bg-img3">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="home3_home_content">
						<h1>Find your Next Empire.</h1>
						<h4>find Property across the globe  </h4>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="home3_home_content">
						<a class="popup_video_btn popup-iframe popup-youtube" href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"><i class="flaticon-play"></i></a>
					</div>
				</div>

			</div>
			
			<!-- Search  -->

			<div class="row">
				<div class="col-lg-12">
					<div class="home_adv_srch_opt home3">

						<div class="homepic">
						<img class="nav_logo_img img-fluid mt20" style="height: auto; width: 500px;" src="images/background/fam.png" alt="header-logo2.png">
					     </div>

						<ul class="nav nav-pills" id="pills-tab" role="tablist">
							<li @click="filter('sale')" class="nav-item">
								<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sale</a>
							</li>
							<li @click="filter('rent')" class="nav-item">
								<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Rent</a>
							</li>
								<li @click="filter('shortlet')" class="nav-item">
								<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Shortlet</a>
							</li>
						
                            <li @click="filter('venture')" class="nav-item">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Joint Venture</a>
                            </li>
						
						</ul>
						<div class="tab-content home1_adsrchfrm" id="pills-tabContent">
							<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
								<div class="home1-advnc-search home3">
									<ul class="h1ads_1st_list mb0">
										<li class="list-inline-item">
										    <div class="form-group">
										    	<input @keypress="getKeyword()" v-model="keyword" type="text" class="form-control" id="exampleInputName1" placeholder="Enter keyword...">
										    </div>
										</li>
										<li class="list-inline-item">
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
										<li class="list-inline-item">
										    <div class="form-group">
										    	<input type="text" class="form-control" id="exampleInputEmail" placeholder="Location">
										    	<label for="exampleInputEmail"><span class="flaticon-maps-and-flags"></span></label>
										    </div>
										</li>
										<li class="list-inline-item">
											<div class="small_dropdown2 home3">
											    <div id="prncgs" class="btn dd_btn">
											    	<span>Price</span>
											    	<label for="exampleInputEmail2"><span class="fa fa-angle-down"></span></label>
											    </div>
											  	<div class="dd_content2">
												    <div class="pricing_acontent">
														<input type="text" class="amount" placeholder="₦52,239"> 
														<input type="text" class="amount2" placeholder="₦985,14">
														<div class="slider-range"></div>
												    </div>
											  	</div>
											</div>
										</li>
										
										<li class="list-inline-item">
											<div class="search_option_button">
											    <button @click="search()"  class="btn btn-thm3">Search</button>
											</div>
										</li>
									</ul>
								</div>
							  </div>


								
								
								</div>
								</div>
				</div>
			</div>
					<!-- end Search  -->
			
		</div>	
	</section>
</template>

<script>
export default {
  methods: {

      search(){
          console.log('pushed to search page')
          this.$router.push('/search')
      },
      filter(word){

          this.$store.commit('getCategory', word)

          this.category = word

           this.$emit("listenerCategory", this.category);


      },
      getKeyword(){
       
         this.$store.commit('getKeyword', this.keyword)

          this.$emit("listenerKeyword", this.keyword);

      }
  },
  created () {


  },
  
  data () {
    return {
        keyword: '',
        category: '',
    }
  },
    name: "HeroSection"
    
}
</script>