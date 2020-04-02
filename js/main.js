//existing reservations toggle
$("#reserved").on("click", function(e) { 
	e.preventDefault(); // page will not reload
	$(".table").slideToggle(300); //table will toggle
});

//google map api
function initMap() {
	var cafe = {lat: 40.8054491, lng: -73.9654415} //cafe location 
        var map = new google.maps.Map(document.getElementById('map'), {  //create map
          center: cafe,
          zoom: 9
        });
        var marker = new google.maps.Marker({position: cafe, map: map}); //marker on exact cafe location
}