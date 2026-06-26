function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(10.758703022314661, 76.74097574541308), // your location
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,
		}
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(10.758703022314661, 76.74097574541308) // your location
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);