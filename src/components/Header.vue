<template>

    <header class="header-nav menu_style_home_one style2 home3 navbar-scrolltofixed stricky main-menu" >
		<div class="container-fluid p0">
		    <!-- Ace Responsive Menu -->
		    <nav>
		        <!-- Menu Toggle btn-->
		        <div class="menu-toggle">
		            <img class="nav_logo_img img-fluid "  style="height: auto; width: 264px;" src="images/Logo1.png" alt="Logo1.png">
		            <button type="button" id="menu-btn">
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		            </button>
		        </div>
		        <a href="#" class="navbar_brand float-left dn-smd">
		            <img class="logo1 img-fluid" style="height: auto; width: 264px;" src="images/Logo1.png" alt="Logo1.png">
		            <img class="logo2 img-fluid" style="height: auto; width: 264px;" src="images/Logo1.png" alt="Logo1.png">
		            
		        </a>
		        <!-- Responsive Menu Structure-->
		        <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) -->
		        <ul id="respMenu" class="ace-responsive-menu text-right" data-menu-style="horizontal">
		            <li>
						<a href="#"><span class="title">Home</span></a> </li>
						<!-- next menue-->
		            <li>
		                <a href="#"><span class="title">Property</span></a>
		                
	                	<ul>
		                    <li><a href="#">For Rent</a></li>
							<li><a href="#">For Sale</a></li>
							<li><a href="#">Shotlet</a></li>
							
	                	</ul>
					</li>
				<!-- next menue-->

		            <li>
		                <a href="agencies.html"><span class="title">Agencies</span></a></li>
					<!-- next menue-->


		            <li class="last">
		                <a href="page-contact.html"><span class="title">Blog</span></a>
					</li>
					<!-- next menue-->
					<li class="last">
		                <a href="page-contact.html"><span class="title">Contact</span></a>
					</li>
					
					<li class="list-inline-item list_s"><a href="#" class="btn flaticon-user" data-toggle="modal" data-target=".bd-example-modal-lg"> <span class="dn-lg text-thm3">Login/Register</span></a></li>
					
	                <li class="list-inline-item add_listing home2"><a href="#"><span class="flaticon-plus"></span><span class="dn-lg"> Create Listing</span></a></li>
		        </ul>
		    </nav>
		</div>
	</header>
    
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>

</style>