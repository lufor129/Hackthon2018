<template>
	<div>
		<div class="position-relative overflow-hidden p-1 p-md-3 m-md-2 text-center bg-light">
      <div class="col-md-7 p-lg-4 mx-auto my-5">
        <h1 class="display-3 font-weight-normal">Quick Translation</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="quickT" @keyup.enter="qu" placeholder="What things you want to translate?">
          <div class="input-group-prepend">
            <select class="form-control" v-model="toLanguage">
              <option value="en">English</option>
              <option value="zh_TW">中文</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>
        </div>
        <button class="btn btn-outline-secondary" href="#" @click.prevent="quickTranslate" >Let's translate!</button>
        <div class="form-group mt-3 ">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :value="quickR"></textarea>
        </div>
        <button v-if="quickR!=''&&toLanguage=='en'&&audiotext==''" class="btn btn-outline-secondary" href="#" @click.prevent="sayit">唸出來</button>
        <audio preload="auto" autobuffer="autobuffer" autoplay="autoplay" v-if="audiotext!=''">
          <source :src="`data:audio/wav;base64,${audiotext}`"/>
        </audio>
      </div>
    </div>







    <!--OUTLOOK PART-->

      <!--First Line Expression-->
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden transportation">
          <div class="my-3 py-3">
            <h2 class="display-4 font-weight-bold">Transportation</h2>
            <br>
            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Common Translation</button>
          </div>
          <div class="bg-dark box-shadow mx-auto"  style="visibility:hidden; width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden hospital">
          <div class="my-3 p-3">
            <h2 class="display-4 font-weight-bold">Medical Service</h2>
            <br>
            <button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal2" >Common Translation</button>
          </div>
          <div class="bg-dark box-shadow mx-auto"  style="visibility:hidden; width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
      </div>


      <!--Second Line Expression-->
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden accommodation">
          <div class="my-3 py-3">
            <h2 class="display-4 font-weight-bold">Accommodation</h2>
            <br>
            <button class="btn btn-accommodation" data-toggle="modal" data-target="#exampleModal3">Common Translation</button>
          </div>
          <div class="bg-dark box-shadow mx-auto"  style="visibility:hidden; width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden ordermeal">
          <div class="my-3 p-3">
            <h2 class="display-4 font-weight-bold">Order Meal</h2>
            <br>
            <button class="btn btn-warning" data-toggle="modal" data-target="#exampleModal4">Common Translation</button>
          </div>
          <div class="bg-dark box-shadow mx-auto"  style="visibility:hidden; width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
      </div>








    <!--BUTTON MODEL PART-->

      <!--Transportation Model-->
      <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle" >Transportation</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <button class="btn btn-color1" style = "margin-bottom:10px" data-toggle="modal" data-target="#trans1" >Where can I find the nearby transportation facilities?</button><br>
              <button class="btn btn-color2" style = "margin-bottom:10px" data-toggle="modal" data-target="#trans2" >How much money should I pay in this traveling?</button><br>
              <button class="btn btn-color3" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#trans3" >How can I reach to the (destination)?</button><br>
              <button class="btn btn-color4" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#trans4" >Is there an airport bus to the city center?</button><br>
              <button class="btn btn-color5" style = "margin-bottom:10px" data-toggle="modal" data-target="#trans5" >Does anyone speak (language) here?</button><br>
              <button class="btn btn-color6" style = "margin-bottom:10px" data-toggle="modal" data-target="#trans6" >Where can I buy metro/train ticket?</button><br>
              <button class="btn btn-color7" style = "margin-bottom:10px" data-toggle="modal" data-target="#trans7" >Where can I take texi nearby?</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      <!--Medical Service Model-->
      <div class="modal fade " id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Medical Service</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <button class="btn btn-color1" style = "margin-bottom:10px" data-toggle="modal" data-target="#medi1" >I need an ambulance for emergency situation.</button><br>
              <button class="btn btn-color2" style = "margin-bottom:10px" data-toggle="modal" data-target="#medi2" >First aid kit is required now.</button><br>
              <button class="btn btn-color3" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#medi3" >The patient there needs CPR.</button><br>
              <button class="btn btn-color4" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#medi4" >A person here paralyzed, give me AED please.</button><br>
              <button class="btn btn-color5" style = "margin-bottom:10px" data-toggle="modal" data-target="#medi5" >Excuse me, I have sore throat, where is the clinic?</button><br>
              <button class="btn btn-color6" style = "margin-bottom:10px" data-toggle="modal" data-target="#medi6" >I want to make an appointment with the best doctor in town.</button><br>
              <button class="btn btn-color7" style = "margin-bottom:10px" data-toggle="modal" data-target="#medi7" >I am hurt, help me!</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      <!--Accommodation Model-->
      <div class="modal fade " id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Accommodation</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <button class="btn btn-color1" style = "margin-bottom:10px" data-toggle="modal" data-target="#accomm1" >I’d like to make a reservation for one night on the (specific time).</button><br>
              <button class="btn btn-color2" style = "margin-bottom:10px" data-toggle="modal" data-target="#accomm2" >What are the room rates?</button><br>
              <button class="btn btn-color3" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#accomm3" >How much is a family room for a night?</button><br>
              <button class="btn btn-color4" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#accomm4" >Is breakfast included in the room price?</button><br>
              <button class="btn btn-color5" style = "margin-bottom:10px" data-toggle="modal" data-target="#accomm5" >Do you offer free WIFI here?</button><br>
              <button class="btn btn-color6" style = "margin-bottom:10px" data-toggle="modal" data-target="#accomm6" >I would like to have a morning call at 7:00 in the morning.</button><br>
              <button class="btn btn-color7" style = "margin-bottom:10px" data-toggle="modal" data-target="#accomm7" >I’d like to check out and finalize my bill.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      <!--OrderMeal Model-->
      <div class="modal fade " id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Order Meal</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <button class="btn btn-color1" style = "margin-bottom:10px" data-toggle="modal" data-target="#order1" >Which restaurant is good that you might recommend to me?</button><br>
              <button class="btn btn-color2" style = "margin-bottom:10px" data-toggle="modal" data-target="#order2" >Do you have a table for two right now?</button><br>
              <button class="btn btn-color3" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#order3" >May we have a table by the window, please?</button><br>
              <button class="btn btn-color4" style = "margin-bottom:10px;color:black" data-toggle="modal" data-target="#order4" >What kind of dish is most popular here?</button><br>
              <button class="btn btn-color5" style = "margin-bottom:10px" data-toggle="modal" data-target="#order5" >Excuse me. My order hasn’t arrived yet.</button><br>
              <button class="btn btn-color6" style = "margin-bottom:10px" data-toggle="modal" data-target="#order6" >What type of credit cards do you accept?</button><br>
              <button class="btn btn-color7" style = "margin-bottom:10px" data-toggle="modal" data-target="#order7" >Thank you for your service. We really enjoyed it.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!--TRANS TRANS-->
      <div class="modal fade " id="trans1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我可以在附近哪裡找到交通設施？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我在這趟旅途中應該要花多少錢呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我要如何到達(我的目的地)呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問有前往市中心的機場接送巴士嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問這裡有人說(某語言)嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我可以在哪裡買到捷運/火車票呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="trans7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我可以在附近的哪裡搭計程車呢？
          </div>
        </div>
      </div>


      <!--MEDI TRANS-->
      <div class="modal fade " id="medi1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            目前有緊急情況，我需要一台救護車
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            現在需要急救箱
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            這位病人需要CPR
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            有人癱倒了，請給我AED給予救急
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            不好意思，我喉嚨痛，請問診所在哪裡呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            我想要預約城裡最好的醫生
          </div>
        </div>
      </div>

      <div class="modal fade " id="medi7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            我受傷了，請幫助我！
          </div>
        </div>
      </div>


      <!--ACCOMM TRANS-->
      <div class="modal fade " id="accomm1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            我想要在今天(某個時刻)預約入住一晚
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問房價是多少呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問住四人房一晚是多少錢呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問早餐有包含在住宿費中嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問有提供免費的WIFI嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            我想要在早上七點有個morning call。
          </div>
        </div>
      </div>

      <div class="modal fade " id="accomm7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            您好，我想要退房以及付清我的帳單了。
          </div>
        </div>
      </div>


      <!--ORDER TRANS-->
      <div class="modal fade " id="order1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問哪間餐廳你會願意推薦給我呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="order2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問現在有兩人的位置嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="order3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問我們可以坐靠窗邊的位置嗎？
          </div>
        </div>
      </div>

      <div class="modal fade " id="order4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問這裡最受歡迎的餐點是哪道呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="order5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            不好意思，我的餐點尚未抵達
          </div>
        </div>
      </div>

      <div class="modal fade " id="order6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            請問接受哪種信用卡付費呢？
          </div>
        </div>
      </div>

      <div class="modal fade " id="order7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            感謝您的招待，非常開心在這裡享用餐點
          </div>
        </div>
      </div>


	</div>
</template>


<script>
export default{
	name: "advise",
  data(){
    return {
      key:"AIzaSyCxXK8RJyAJfRgMUfLxxU8iH1PcasxmdWM",
      toLanguage:"en",
      cacheLanguage:"en",
			quickT:"",
      quickR:"",
      audiotext:"",
    }
	},
	methods:{
		quickTranslate:function(){
			const vm=this;
			const api=`https://translation.googleapis.com/language/translate/v2/?q=${vm.quickT}&source=&target=${vm.toLanguage}&key=${vm.key}`;
			vm.$http.post(api).then((response)=>{
				vm.quickR=response.data.data.translations[0].translatedText;
      })
      this.audiotext=''
		},
    sayit:function(){
      const vm=this;
      const data={
        "audioConfig": {
          "audioEncoding": "LINEAR16",
          "pitch": "0.00",
          "speakingRate": "1.00"
        },
        "input": {
          "text": `${vm.quickR}`
        },
        "voice": {
          "languageCode": "en-US",
          "name": "en-US-Wavenet-D"
        }
      }
      const api=`https://texttospeech.googleapis.com/v1beta1/text:synthesize?fields=audioContent&key=${vm.key}`
      vm.$http.post(api,data).then((response)=>{
        vm.audiotext=response.data.audioContent;
      })
    }
  },
  watch:{
    toLanguage:function(value){
      if(value!=this.cacheLanguage){
        this.cacheLanguage=value;
        this.quickR=''
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.flex-equal > * {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }

.transportation{
  background-image: url("https://media.timeout.com/images/104721603/image.jpg");
  background-size: cover;
}
.hospital{
  background-image: url("https://www.phillypaws.org/wp-content/uploads/2012/05/ASPCA3.jpg");
  background-size: cover;
}
.accommodation{
  background-image: url("https://www.theeurope.com/files/images/new/europe-1920-1080-golfside-room--september-2012-2090904277.jpg");
  background-size: cover;
}

.ordermeal{
  background-image: url("http://jonvilma.com/images/meal-4.jpg");
  background-size: cover;
}

.btn-accommodation{
  color: #fff;
  background-color: #A57454;
  border-color: #A57454;
}

.btn-color1{
  color: #fff;
  background-color: #CD0000;
  border-color: #CD0000;
}

.btn-color2{
  color: #fff;
  background-color: #f76a18;
  border-color: #f76a18;
}

.btn-color3{
  color: #fff;
  background-color:	#FFFF00;
  border-color:	#FFFF00;
}

.btn-color4{
  color: #fff;
  background-color: #00FF00;
  border-color: #00FF00;
}

.btn-color5{
  color: #fff;
  background-color: #0000FF;
  border-color: #0000FF;
}

.btn-color6{
  color: #fff;
  background-color: #5500DD;
  border-color: #5500DD;
}

.btn-color7{
  color: #fff;
  background-color: #CC00CC;
  border-color: #CC00CC;
}
</style>
