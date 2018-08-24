<template>
	<div class="text-center">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner cover">
        <h1 class="cover-heading font-weight-bold">年輕人功德無量大隊</h1>
        <img src="http://img5.artron.net/artist/A0000105/brt000010505845.jpg" style="width:50%;" alt="">
        <p class="lead">
				  <button class="btn btn-secondary mt-2" @click="signin">使用google進行登入</button>
        </p>
      </main>
    </div>
	</div>
</template>

<script>
var userRef=firebase.database().ref("/users/");
var provider = new firebase.auth.GoogleAuthProvider();

export default{
	name: "login",
	data(){
		return{
			user:{}
		}
	},
	methods:{
		signin:function(){
			const vm=this;
			firebase.auth().signInWithPopup(provider).then(function(result) {
				var token = result.credential.accessToken;
				var user = result.user;
				vm.$router.push("/dashboard/todolist")
			}).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
			});
		}
	}
}
</script>

<style scoped>  

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color:#fff ;
  border: .05rem solid #333;
}


/*
 * Base structure
 */

html,
body {
  height: 100%;
  background-color: #333;
}

body {
  display: -ms-flexbox;
  display: flex;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */
.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}


/*
 * Cover
 */
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}

</style>

