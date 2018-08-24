<template>
	<div>
    <div style="width: 100%; height: 500px" id="map-container"></div>
  </div>
</template>

<script >

export default {
	name: "GoogleMap",
	props:["saveRoate"],
  data() {
    return {
    	center: {lng: 13.4, lat: 52.51},
			currentPlace:{}
    }
	},
	methods:{
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
		initMap:function(){
			const platform = new H.service.Platform({
				app_id: 'GOlAxWCNTEaMDIqIBTHM',
				app_code: 'T2h8496s6vK6gba0gg9HDg',
				useCIT: true,
				useHTTPS: true,
				type:'base'
			});
			const maplayer = platform.createDefaultLayers();

			map = new H.Map(
				document.getElementById('map-container'),
				maplayer.normal.map,
				{
					zoom: 14,
					center: this.center
				}
			);
			var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
			ui = H.ui.UI.createDefault(map, maplayer);
		},
		initMarkers:function(map,ui){
			if(this.saveRoate.length>0){
				this.saveRoate.forEach((item,i)=>{
					if(item.Px!=undefined && item.Py!=undefined){
						let icon=null
						switch(item.mapicon){
							case 'hotel': icon=new H.map.Icon("https://png.icons8.com/color/50/000000/5-star-hotel.png"); break;
							case "attraction": icon=new H.map.Icon("https://png.icons8.com/color/50/000000/tourist-male.png"); break;
							case "food": icon=new H.map.Icon("https://png.icons8.com/color/50/000000/food.png"); break;
						}
						let marker=new H.map.Marker({lat:parseFloat(item.Py),lng:parseFloat(item.Px)},{icon:icon});
						var center=this.center;
						marker.addEventListener("tap",function(evt){
							const bubble = new H.ui.InfoBubble({lng:parseFloat(item.Px),lat:parseFloat(item.Py)}, {
								content: 
								`<div  style="width: 18rem;">
                  <div class="card-body ">
                    <h5 class="card-title">${item.Name}</h5>
                    <p class="card-text">所在地點 : ${item.Add}</p>
										<p class="card-text">聯絡電話 : ${item.Tel}</p>
										<a class="btn btn-primary" type="button" href="https://maps.google.com.tw/?saddr=${center.lat},${center.lng}&daddr=${item.Py},${item.Px}">規劃路線</a> 
                  </div>
                </div>`
							});
							ui.addBubble(bubble);
						},false)
						map.addObject(marker);
					}
				})
			}
		},
		addRouterLine:function(platform,map,startpoint,endpoint){
			var routingParameters = {
				// The routing mode:
				'mode': 'fastest;car',
				// The start point of the route:
				'waypoint0': `geo!${startpoint.lat},${startpoint.lng}`,
				// The end point of the route:
				'waypoint1': `geo!${endpoint.lat},${endpoint.lng}`,
				// To retrieve the shape of the route we choose the route
				// representation mode 'display'
				'representation': 'display'
			};

			var onResult = function(result) {
				var route,routeShape,linestring;
				console.log(result)
				if(result.response.route) {
				// Pick the first route from the response:
				route = result.response.route[0];
				// Pick the route's shape:
				routeShape = route.shape;

				// Create a linestring to use as a point source for the route line
				linestring = new H.geo.LineString();

				// Push all the points in the shape into the linestring:
				routeShape.forEach(function(point) {
					var parts = point.split(',');
					linestring.pushLatLngAlt(parts[0], parts[1]);
				});

				// Retrieve the mapped positions of the requested waypoints:

				// Create a polyline to display the route:
				var routeLine = new H.map.Polyline(linestring, {
					style: { lineWidth: 10 },
  				arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
				});

				// Create a marker for the start point:

				// Add the route polyline and the two markers to the map:
				map.addObject(routeLine);

				// Set the map's viewport to make the whole route visible:
				map.setViewBounds(routeLine.getBounds());
				}
			};


			var router = platform.getRoutingService();
			router.calculateRoute(routingParameters, onResult,
			function(error) {
				alert(error.message);
			});
		}
	},
	created(){
		this.geolocate();
	},
	watch:{
		center:function(){
			const platform = new H.service.Platform({
				app_id: 'GOlAxWCNTEaMDIqIBTHM',
				app_code: 'T2h8496s6vK6gba0gg9HDg',
				useCIT: true,
				useHTTPS: true,
				type:'base'
			});
			const maplayer = platform.createDefaultLayers();

			var map = new H.Map(
				document.getElementById('map-container'),
				maplayer.normal.map,
				{
					zoom: 14,
					center: this.center
				}
			);
			var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
			var ui = H.ui.UI.createDefault(map, maplayer);

			let icon=new H.map.Icon("https://png.icons8.com/color/50/000000/user.png");
			let marker=new H.map.Marker(this.center,{icon:icon});
			marker.addEventListener("tap",function(evt){
				const bubble = new H.ui.InfoBubble({lat:parseFloat(marker.b.lat),lng:parseFloat(marker.b.lng)}, {
					content: '<b>現在位置</b>'
				});
				ui.addBubble(bubble);
			},false)
			map.addObject(marker,{icon:icon})
			this.initMarkers(map,ui);
			if(this.saveRoate.length>0){
				this.addRouterLine(platform,map,{lat:this.center.lat,lng:this.center.lng},{lat:this.saveRoate[0].Py,lng:this.saveRoate[0].Px});
				for(let i=0;i<this.saveRoate.length;i++){
					if(i==this.saveRoate.length-1){
						break;
					}
					this.addRouterLine(platform,map,{lat:this.saveRoate[i].Py,lng:this.saveRoate[i].Px},{lat:this.saveRoate[i+1].Py,lng:this.saveRoate[i+1].Px})
				}
			}
		}
	}
}

</script>

<style>
html,body{
	height: 100%;
}
</style>



