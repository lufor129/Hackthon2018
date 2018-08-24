<template>
	<div class="container my-3">
		<div class="input-group mb-3" v-if="isInput==false">
			<div class="input-group-prepend">
				<span class="input-group-text" id="basic-addon1">旅遊待辦</span>
			</div>
			<input type="text" class="form-control" placeholder="準備要做的任務" @click="isInput=true">
			<div class="input-group-append">
				<button class="btn btn-primary" type="button">新增</button>
			</div>
		</div>
		<div class="mb-4 card border-secondary" v-if="isInput!=false">
			<div class="card-item active">
				<div class="card-header">
					<div class="card-title">
						<input type="text" autofocus placeholder="準備要做的事" class="form-control" v-model="newtodo.Name">
					</div>
				</div>
				<div class="card-body bg-light">
					<div class="card-content">
						<div class="card-row">
							<div class="card-icon">
								<i class="far fa-calendar-alt"></i>
							</div>
							<div>
								<label for="">Time</label>
								<div class="form-inline card-form-control">
									<input type="date" class="form-control" v-model="newtodo.date">
									<span style="width:1rem"></span>
									<input type="time" class="form-control border-0" v-model="newtodo.time">
								</div>
							</div>
						</div>
						<div class="card-row">
							<div class="card-icon">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<div>
								<label for="">locate</label>
								<div class="form-inline card-form-control">
									<div class="btn-group">
										<input type="text" class="form-control border-0" name="" id="" v-model="newtodo.Add">
										<button type="button" v-if="choosable.length>0" class="btn btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span class="sr-only">Toggle Dropdown</span>
										</button>
										<div class="dropdown-menu">
											<a class="dropdown-item" href="#" @click.prevent="newtodo.Add=item.Name" v-for="(item,i) in choosable" :key="i">{{item.Name}}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-row">
							<div class="card-icon">
								<i class="far fa-comment-dots"></i>
							</div>
							<div class="card-form-control">
								<label for="">Comment</label>
								<div>
									<textarea name="" class="form-control w-100 border-0" v-model="newtodo.message"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="card-btn-group d-flex" style="margin-top:1rem">
						<button class="btn text-danger w-50 btn-lg" @click="isInput=false">
							<i class="fas fa-times"></i> Cancel
						</button>
						<button class="btn btn-primary w-50 btn-lg" @click="addTodo">
							<i class="fas fa-plus"></i> 新增 Task
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="card text-center">
			<div class="card-header">
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a class="nav-link" :class="{active:isActive=='all'}" href="#" @click.prevent="isActive='all'">全部</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" :class="{active:isActive=='process'}"  @click.prevent="isActive='process'">進行中</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" :class="{active:isActive=='done'}" @click.prevent="isActive='done'">已完成</a>
					</li>
				</ul>
			</div>
			<ul class="list-group list-group-flush text-left">
				<div class="accordion" id="accordionExample">
					<div class="card" v-if="isActive=='all'">
						<div class="card-header" id="headingOne">
							<h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<label class="" style="margin-left:1rem;color:black">
										入境流程
									</label>
								</button>
							</h5>
						</div>
						<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
							<div class="card-deck-wrapper container-fluid ">
								<div class="card-deck container-fluid p-2">
									<div class="card">
									<img class="card-img-top" src="https://www.immd.gov.hk/publications/a_report_2013/images/chapter2/C01.jpg" alt="Card image cap">
									<div class="card-block">
										<h5 class="card-title">Step 1 邊境管制</h5>
										<p style="font-family:微軟正黑體" class="card-text">拿著隨身行李下飛機後，依照指示前往邊境管制區讓海關查驗證照。各國的邊境管制幾乎都會分成本國人和外國人區，如果你不是該國國民，請往外國人邊境管制排隊。</p>
									</div>
									</div>
									<div class="card">
									<img class="card-img-top" src="http://m1.aboluowang.com/uploadfile/2015/0513/20150513062543427.jpeg" alt="Card image cap">
									<div class="card-block">
										<h5 class="card-title">Step 2 過海關</h5>
										<p style="font-family:微軟正黑體" class="card-text">請出示證件給海關，海關可能會詢問一些問題，如生日、預計停留時間等。過海關須備妥證件 : 護照、簽證、填寫完整的入境卡、來回機票購票證明、其他旅遊文件(保險證明、財力證明、學校文件、行程表、飯店訂房紀錄等)。</p>
									</div>
									</div>
									<div class="card">
									<img class="card-img-top" src="http://img.chinatimes.com/newsphoto/2018-01-31/656/20180131004774.jpg" alt="Card image cap">
									<div class="card-block">
										<h5 class="card-title">Step 3 領取行李</h5>
										<p style="font-family:微軟正黑體" class="card-text">通過邊境管制區後，依照指標前往行李轉盤領取行李，行李領取區(Baggage Claim)有銀幕可看航班和行李轉盤資訊，拿行李時，即使行李箱看起來是自己的，也務必確認行李吊牌上的資訊正確，再把行李拿走。</p>
									</div>
									</div>
									<div class="card">
									<img class="card-img-top" src="http://imgs.ntdtv.com/pic/2017/5-1/p8157021a136039129.jpg" alt="Card image cap">
									<div class="card-block">
										<h5 class="card-title">Step 4 申報或非申報</h5>
										<p style="font-family:微軟正黑體" class="card-text">若攜帶任何須申報的物品，請務必照實申報。如果沒攜帶須申報的物品，請直接走免申報通道。通過海關通道後，恭喜你！你已順利通關入境該國了！</p>
									</div>
									</div>
								</div>
								</div>
						</div>
					</div>
					<div class="card" v-if="isActive=='all'">
						<div class="card-header" id="headingTwo">
							<h5 class="mb-0 completed">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
									<label class="" style="margin-left:1rem;color:black">
										立刻住宿
									</label>
								</button>
							</h5>
						</div>
						<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
							<div style="font-family:微軟正黑體" class="card-body">
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 1</button> 點選旅程規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 2</button> 點選加入住宿</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 3</button> 將理想住處加入旅遊規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 4</button> 將行程拖曳至今日主要行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 5</button> 點選儲存行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-danger">Step 6</button> 查看地圖確定目的地</div>
							</div>
						</div>
					</div>
					<div class="card" v-if="isActive=='all'">
						<div class="card-header" id="headingThree">
							<h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
									<label class="" style="margin-left:1rem;color:black">
										尋找好吃
									</label>
								</button>
							</h5>
						</div>
						<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div style="font-family:微軟正黑體" class="card-body">
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 1</button> 點選旅程規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 2</button> 點選加入餐廳</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 3</button> 將理想餐廳加入旅遊規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 4</button> 將行程拖曳至今日主要行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 5</button> 點選儲存行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-success">Step 6</button> 查看地圖確定目的地</div>
							</div>
						</div>
					</div>
					<div class="card" v-if="isActive=='all'">
						<div class="card-header" id="headingThree">
							<h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
									<label class="" style="margin-left:1rem;color:black">
										探訪景點
									</label>
								</button>
							</h5>
						</div>
						<div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div style="font-family:微軟正黑體" class="card-body">
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 1</button> 點選旅程規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 2</button> 點選加入景點</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 3</button> 將理想景點加入旅遊規劃</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 4</button> 將行程拖曳至今日主要行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 5</button> 點選儲存行程</div>
								<div><button type="button" style="margin-bottom:10px" class="btn btn-primary">Step 6</button> 查看地圖確定目的地</div>
							</div>
						</div>
					</div>
					<div class="card" v-for="(todo,i) in filterTask" :key="i">
						<div class="card-header" id="headingTwo">
							<h5 class="mb-0">
								<div class="form-check" >
									<input type="checkbox" v-model="todo.isCompleted" class="form-check-input" style="margin-top:0.8rem" >
								</div>
								<button class="btn btn-link" type="button" data-toggle="collapse" :data-target="`#collapse${i}`" aria-expanded="true" aria-controls="collapseOne">
									<label :class="{completed:todo.isCompleted}" style="margin-left:1rem;color:black">
										{{todo.Name}}
									</label>
								</button>
								<button type="button" class="close ml-auto" @click="deleteTodo(todo)" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</h5>
						</div>
						<div :id="`collapse${i}`" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
							<div class="card-body">
								<h4 class="card-title font-weight-bold" v-if="todo.Add!=undefined" >Locate : {{todo.Add}}</h4>
								<p class="card-text" v-if="todo.message!=undefined">Message : {{todo.message}}</p>
								<footer class="blockquote-footer" v-if="todo.date!=undefined || todo.time!=undefined"> 時間 : {{todo.date}} {{todo.time}}</footer>
							</div>
						</div>
					</div>
				</div>
			</ul>
			<div class="card-footer d-flex justify-content-between">
				<span>還有 {{undoneTask}} 筆任務未完成</span>
				<a href="#" @click="todos=[]">清除所有任務</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: "todolist",
	props:["todos","hotels","foods","attractions"],
	data(){
		return{
			newtodo:{
				Add:""
			},
			isInput:false,
			isActive:"all",
			idcode:0,
			choosable:[]
		}
	},
	methods:{
		addTodo:function(){
			if(this.newtodo.Name!=undefined){
				this.newtodo.icon="fas fa-check-circle text-info"
				this.todos.push(this.newtodo);
			}
			this.newtodo={};
			this.isInput=false;
		},
		deleteTodo:function(item){
			const vm=this;
			let num=vm.todos.findIndex((todo,i)=>{
				return todo.Name==item.Name
			})
			vm.todos.splice(num,1);
		}
	},
	computed:{
		undoneTask:function(){
			let number=0;
			this.todos.forEach((item)=>{
				if(item.isCompleted===false || item.isCompleted==undefined){
					number++;
				}
			})
			return number
		},
		filterTask:function(){
			const vm=this;
			let tempTodos=[]
			if(vm.isActive=='process'){
				vm.todos.forEach((item)=>{
					if(item.isCompleted==false || item.isCompleted==undefined){
						tempTodos.push(item);
					}
				})
			}else if(vm.isActive=='done'){
				vm.todos.forEach((item)=>{
					if(item.isCompleted==true){
						tempTodos.push(item);
					}
				})
			}else{
				tempTodos=this.todos;
			}
			return tempTodos
		}
	},
	created(){
		this.choosable=[...this.hotels,...this.foods,...this.attractions];
	}
}
</script>

<style>
.completed {
	text-decoration: line-through
}
</style>
