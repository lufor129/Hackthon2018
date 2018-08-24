<template>
	<div class="clearfix">
		<main role="main" class="container-fluid" >
			<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
				<img class="mr-3" src="https://getbootstrap.com/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">
				<div class="lh-100">
					<h1 class="mb-0 text-white text-xl-center lh-100 ">行程規劃</h1>
				</div>
			</div>
		</main>
		<div class="drag">
			<main class="container w-50 float-left " >
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<h3 class="border-bottom border-gray p-3 mb-2 bg-warning text-white rounded">今日主要行程</h3>
					<draggable class="dragArea" v-model="todayRoate" :options="{group:'people'}" >
					<div class="media text-muted pt-3" v-for="(element, index) in todayRoate"  :key="index">
						<i class="mt-1 mr-2 big " style="font-size:1.5rem" :class="element.icon"></i>
						<div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
							<div class="d-flex justify-content-between align-items-center w-100">
								<strong class="text-gray-dark" style="font-size:1.2rem">{{element.Name}}</strong>
								<div class="float-right" v-if="element.message!=undefined">{{element.message}}</div>
							</div>
							<span class="d-block">{{element.Add}}   
								<span class="ml-3">{{element.date}} {{element.time}}</span>
							</span>  
						</div>
					</div>
					<big slot="footer" class="d-block text-center mt-3" v-if="todayRoate.length==0">
						目前還沒有行程喔!!
					</big>
					<big slot="footer" class="d-block text-center mt-3" v-if="todayRoate.length!=0">
						<button class="btn btn btn-outline-warning mr-2" @click="$emit('savingRoate',todayRoate)">儲存行程</button>
					</big>
					</draggable>
				</div>
			</main>
			<main class="container w-50 float-right" >
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<h3 class="border-bottom border-gray p-3 mb-2 bg-info text-white rounded">必做事項</h3>
					<draggable class="dragArea" v-model="tempTodos" :options="{group:'people'}">
					<div class="media text-muted pt-3" v-for="(element, index) in tempTodos" :key="index">
						<i class="text-danger mt-1 mr-2 big" style="font-size:1.5rem"></i>
						<div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
							<div class="d-flex justify-content-between align-items-center w-100">
								<strong class="text-gray-dark" style="font-size:1.2rem">{{element.Name}}</strong>
								<div class="float-right" v-if="element.message!=undefined">{{element.message}}</div>
							</div>
							<span class="d-block">{{element.Add}}   
								<span class="ml-3">{{element.date}} {{element.time}}</span>
							</span>  
						</div>
					</div>
					<big slot="footer" class="d-block text-center mt-3"  v-if="tempTodos.length==0">
						目前還沒有行程喔!! 
						<router-link class="btn btn btn-outline-info ml-2" to="/dashboard/todolist" >加入事情</router-link>
					</big>
					</draggable>
				</div>
			</main>
			<main class="container w-50 float-right" >
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<h3 class="border-bottom border-gray p-3 mb-2 bg-success text-white rounded">餐廳</h3>
					<draggable class="dragArea" v-model="tempfood" :options="{group:'people'}">
					<div class="media text-muted pt-3" v-for="(element, index) in tempfood" :key="index">
						<i class="text-danger mt-1 mr-2 big" style="font-size:1.5rem"></i>
						<div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
							<div class="d-flex justify-content-between align-items-center w-100">
								<strong class="text-gray-dark" style="font-size:1.2rem">{{element.Name}}</strong>
							</div>
							<span class="d-block">{{element.Add}}</span>
						</div>
					</div>
					<big slot="footer" class="d-block text-center mt-3"  v-if="tempfood.length==0">
						目前還沒有行程喔!! 
						<router-link class="btn btn btn-outline-success ml-2" to="/dashboard/food" >加入餐廳</router-link>
					</big>
					</draggable>
				</div>
			</main>
			<main class="container w-50 float-right" >
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<h3 class="border-bottom border-gray p-3 mb-2 bg-primary text-white rounded">景點</h3>
					<draggable class="dragArea" v-model="tempattraction" :options="{group:'people'}">
					<div class="media text-muted pt-3" v-for="(element, index) in tempattraction" :key="index">
						<i class="text-danger mt-1 mr-2 big" style="font-size:1.5rem"></i>
						<div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
							<div class="d-flex justify-content-between align-items-center w-100">
								<strong class="text-gray-dark" style="font-size:1.2rem">{{element.Name}}</strong>
							</div>
							<span class="d-block">{{element.Add}}</span>
						</div>
					</div>
					<big slot="footer" class="d-block text-center mt-3"  v-if="tempattraction.length==0">
						目前還沒有行程喔!! 
						<router-link class="btn btn btn-outline-primary ml-2" to="/dashboard/attraction" >加入景點</router-link>
					</big>
					</draggable>
				</div>
			</main>
			<main class="container w-50 float-right" >
				<div class="my-3 p-3 bg-white rounded box-shadow">
					<h3 class="border-bottom border-gray p-3 mb-2 bg-danger text-white rounded">住宿</h3>
					<draggable class="dragArea" v-model="temphotel" :options="{group:'people'}">
					<div class="media text-muted pt-3" v-for="(element, index) in temphotel" :key="index">
						<i class="text-danger mt-1 mr-2 big" style="font-size:1.5rem"></i>
						<div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
							<div class="d-flex justify-content-between align-items-center w-100">
								<strong class="text-gray-dark" style="font-size:1.2rem">{{element.Name}}</strong>
							</div>
							<span class="d-block">{{element.Add}}</span>
						</div>
					</div>
					<big slot="footer" class="d-block text-center mt-3"  v-if="temphotel.length==0">
						目前還沒有行程喔!! 
						<router-link class="btn btn btn-outline-danger ml-2" to="/dashboard/hotel" >加入住宿</router-link>
					</big>
					</draggable>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import draggable from "vuedraggable"
export default{
	name: "rotate",
	props:["todos","hotels","foods","attractions","saveRoate"],
	data(){
		return{
			tempTodos:[],
			tempfood:[],
			temphotel:[],
			tempattraction:[],
			todayRoate:[]
		}
	},
	components:{
		draggable
	},
	methods:{

	},
	created(){
		this.tempTodos=[...this.todos];
		this.tempfood=[...this.foods];
		this.temphotel=[...this.hotels];
		this.tempattraction=[...this.attractions];
		this.todayRoate=[...this.saveRoate];
		this.todayRoate.forEach((item,i)=>{
			let numA=this.tempTodos.findIndex((itemA,j)=>{
				return item.Name==itemA.Name;
			})
			if(numA!=-1){
				this.tempTodos.splice(numA,1);
			}
			let numB=this.tempfood.findIndex((itemB,j)=>{
				return item.Name==itemB.Name;
			})
			if(numB!=-1){
				this.tempfood.splice(numB,1);
			}
			let numC=this.tempattraction.findIndex((itemC,j)=>{
				return item.Name==itemC.Name;
			})
			if(numC!=-1){
				this.tempattraction.splice(numC,1);
			}
			let numD=this.temphotel.findIndex((itemD,j)=>{
				return item.Name==itemD.Name;
			})
			if(numD!=-1){
				this.temphotel.splice(numD,1);
			}
		})
	}
}
</script>

<style scoped>
html,
body {
	overflow-x: hidden; /* Prevent scroll on narrow devices */
	background-color: #F8F9FA;
}

body {
	padding-top: 56px;
}

@media (max-width: 991.98px) {
	.offcanvas-collapse {
		position: fixed;
		top: 56px; /* Height of navbar */
		bottom: 0;
		left: 100%;
		width: 100%;
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		visibility: hidden;
		background-color: #343a40;
		transition-timing-function: ease-in-out;
		transition-duration: .3s;
		transition-property: left, visibility;
	}
	.offcanvas-collapse.open {
		left: 0;
		visibility: visible;
	}
}

.nav-scroller {
	position: relative;
	z-index: 2;
	height: 2.75rem;
	overflow-y: hidden;
}

.nav-scroller .nav {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	padding-bottom: 1rem;
	margin-top: -1px;
	overflow-x: auto;
	color: rgba(255, 255, 255, .75);
	text-align: center;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
}

.nav-underline .nav-link {
	padding-top: .75rem;
	padding-bottom: .75rem;
	font-size: .875rem;
	color: #6c757d;
}

.nav-underline .nav-link:hover {
	color: #007bff;
}

.nav-underline .active {
	font-weight: 500;
	color: #343a40;
}

.text-white-50 { color: rgba(255, 255, 255, .5); }

.bg-purple { background-color: #6f42c1; }

.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.lh-100 { line-height: 1; }
.lh-125 { line-height: 1.25; }
.lh-150 { line-height: 1.5; }

@media (max-width: 768px) { 
	.container{
		width:100% !important;
	}
	.w-50{
		width: 100% !important;
	}
}
</style>
