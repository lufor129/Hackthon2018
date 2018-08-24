<template>
  <div>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">台灣好吃</h1>
          <br>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <select name="" id="" class="form-control" v-model="chooseCounty">
                <option :value="item" v-for="(item,i) in county" :key="i">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="(item,i) in filterCounty[currentPage]" :key="i">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" :src="item.Picture1" alt="" v-if="item.Picture1!=null">
                <div class="card-body">
                  <h5 class="card-title">{{item.Name}}</h5>
                  <p class="card-text">{{item.Add}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="getHotel(item)">View</button>
                    </div>
                    <a href="#" class="float-right" @click.prevent="toggleHotel(item)"><i class=" fa-star" :class="{far:item.stared==false,fas:item.stared==true}" ></i></a>
                  </div>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example" style="margin:0 auto" >
              <ul class="pagination justify-content-center">
                <li class="page-item " :class="{disabled:currentPage==0}">
                  <a class="page-link" href="#" tabindex="-1" @click.prevent="currentPage--">Previous</a>
                </li>
                <li class="page-item" v-for="i in filterCounty.length" :key="i" :class="{active:currentPage===i-1}">
                  <a class="page-link" @click.prevent="currentPage=i-1" href="#">{{i}}</a>
                </li>
                <li class="page-item" :class="{disabled:currentPage==filterCounty.length-1}">
                  <a class="page-link" href="#" @click.prevent="currentPage++">Next</a>
                </li>
              </ul>
            </nav>

            <div class="modal fade" id="HotelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <img :src="catchHotel.Picture2" style="width:100%" alt="">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <h2 class="modal-title" id="exampleModalLabel" style="margin-left:1rem">{{catchHotel.Name}}</h2>
                  <div class="modal-body">
                    {{catchHotel.Description}}
                  </div>
                  <div class="modal-body">
                  <p>連絡電話 : {{catchHotel.Tel}}</p>
                  <p>提供服務 : {{catchHotel.Serviceinfo}}</p>
                  </div>
                  <div id="hotelmap">
                    <h4 class="modal-title" style="margin-left:1rem">地點:</h4>
                    <gmap-map
                      :zoom="12"
                      :center="hotelPlace"
                      style="width:100%;  height: 500px;"
                      streetViewControl:false
                    >
                    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                      <div class="card" style="width: 18rem;">
                        <img class="card-img-top" style="width:100%;" :src="`${catchHotel.Picture3}`" alt="">
                        <div class="card-body">
                          <h5 class="card-title">{{catchHotel.Name}}</h5>
                          <p class="card-text">所在地點 : {{catchHotel.Add}}</p>
                          <p class="card-text">聯絡電話 : {{catchHotel.Tel}}</p>
                          <a class="btn btn-primary" type="button" :href="`https://maps.google.com.tw/?saddr=${rotate.from}&daddr=${rotate.to}`">規劃路線</a> 
                        </div>
                      </div>
                    </gmap-info-window>
                    <gmap-marker
                      :position="hotelPlace"
                      @click="toggleInfoWindow(catchHotel,1)"
                    ></gmap-marker>
                    </gmap-map>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import $ from "jquery"
export default{
  name:"food",
  props:["foods"],
  data(){
    return {
      county:[],
      hotel:{},
      catchHotel:{},
      hotelPlace:{},
      currentPlace:{},
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      rotate:[],
      chooseCounty:'高雄市',
      currentPage:0
    }
  },
  watch:{
		chooseCounty:function(){
			this.currentPage=0;
		}
	},
  methods:{
    getHotel:function(hotel){
      const vm=this;
      vm.catchHotel=hotel;
      vm.hotelPlace={
        lat:parseFloat(vm.catchHotel.Py),
        lng:parseFloat(vm.catchHotel.Px)
      }
      vm.rotate.from=`${vm.currentPlace.lat},${vm.currentPlace.lng}`;
      vm.rotate.to=`${vm.hotelPlace.lat},${vm.hotelPlace.lng}`;
      $("#HotelModal").modal("show")
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
				};
				this.currentPlace={
					lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
				}
      });
    },
    toggleInfoWindow: function(marker,idx) {
      this.infoWindowPos = this.hotelPlace;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    closeModal:function(){
      const vm=this;
      vm.infoWindowPos=null;
      vm.infoWinOpen=false;
      vm.currentMidx=null;
      $("#HotelModal").modal("hide")
    },
    toggleHotel:function(hotel){
      const vm=this;
      let num=vm.foods.findIndex((item)=>{
        return item.Name==hotel.Name;
      })
      if(num==-1){
        hotel.stared=true;
        hotel.icon="fas fa-utensils text-success"
        hotel.mapicon="food"
        vm.foods.push(hotel);
      }else{
        hotel.stared=false;
        vm.foods.splice(num,1);
      }
      this.$forceUpdate();
    }
  },
  created(){
    const vm=this;
    const api=`./static/restaurant_C_f.json`;

    vm.$http.get(api).then((response)=>{
      console.log(response)
      let tempsave=response.data.XML_Head.Infos.Info;
      let tempcounty=new Set()
      tempsave.forEach((item,i)=>{
        var word=item.Add.substr(0,3);
        if(isNaN(word)==false){
          word=item.Add.substr(3,3);
        }
        tempcounty.add(word);
        if(vm.hotel[word]===undefined){
          vm.hotel[word]=new Array();
          this.$set(item,'stared',false);
          vm.hotel[word].push(item)
        }else{
          this.$set(item,'stared',false);
          vm.hotel[word].push(item);
        }
        vm.county=Array.from(tempcounty);
      })

    })
  },
  mounted(){
    this.geolocate();
  },
  computed:{
    filterCounty:function(){
      const vm=this;
      const newData=[]
      if(vm.hotel[`${vm.chooseCounty}`]!=undefined){
        let datas=vm.hotel[`${vm.chooseCounty}`];
        datas.forEach((item,i)=>{
          let stared=this.foods.findIndex((itemA)=>{
            return item.Name==itemA.Name;
          })
          if(stared!=-1){
            item.stared=true;
          }
          if(i%18===0){
            newData.push([])
          }
          const page=parseInt(i/18);
          newData[page].push(item)
        })
        return newData
      }else{
        setTimeout(vm.filterCounty,1000)
      }
    }
  }
}
</script>

<style scoped>
:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background: url(https://guide.easytravel.com.tw/images/city/keelung.jpg)  center;
  background-size: cover;
  height: 15rem;
}


.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 1000;
  font-size:8rem;
  color: #fff;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

@media (max-width: 768px) {
  .jumbotron-heading {
    font-weight: 500 ; 
    font-size:4rem ;

  }
}
</style>
