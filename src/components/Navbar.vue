<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<h3 class="navbar-brand font-weight-bold">年輕人功德無量大隊</h3>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link to="/dashboard/todolist" class="nav-link">必做事項</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/dashboard/roate"  class="nav-link">旅程規劃</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							景點
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<router-link to="/dashboard/attraction" class="dropdown-item">知名景點</router-link>
							<router-link to="/dashboard/hotel" class="dropdown-item">好住旅館</router-link>
							<router-link to="/dashboard/food" class="dropdown-item">好吃美食</router-link>
						</div>
					</li>
					<li class="nav-item">
						<router-link to="/dashboard/Map"  class="nav-link">查看地圖</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/dashboard/advise"  class="nav-link">常用翻譯</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" @click.prevent="signout">登出</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
					<a class="btn btn-outline-success my-2 my-sm-0" :href="`https://www.google.com.tw/search?q=${search}`" >快速搜查</a>
				</form>
			</div>
		</nav>
	</div>
</template>

<script>
export default{
	name:"navbar",
	data(){
		return{
			search:''
		}
	},
	methods:{
		signout:function(){
			const vm=this;
			firebase.auth().signOut().then(function(){
				vm.$router.push("/login")
			}).catch(function(error){
				console.log(error.message)
			})
		},
	}
}
</script>

<style>

</style>

