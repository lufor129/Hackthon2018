<template>
	<div>
		<navbar/>
		<div>
			<router-view :todos="todos" :hotels="hotels" :foods="foods" :attractions="attractions" :saveRoate="saveRoate" @savingRoate="savingRoate">
				
			</router-view>
		</div>
		<buttonbar></buttonbar>
	</div>
</template>

<script>
import navbar from "./Navbar";
import buttonbar from "./buttonbar"

export default{
	name:"Dashboard",
	data(){
		return{
			todos:[],
			hotels:[],
			foods:[],
			attractions:[],
			saveRoate:[]
		}
	},
	components:{
		navbar,
		buttonbar,
	},
	methods:{
		savingRoate:function(roate){
			this.saveRoate=roate;
		}
	}
}
</script>