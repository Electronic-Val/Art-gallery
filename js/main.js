// Code to see a pic in detail
function goThere (n) {
    window.location.href = "biggal.php?s="+n;
}
// This one sends the user to the likes file
function like (n) {
    window.location.href = "includes/likes.inc.php?a="+n;
}

//Google Map Api
window.onload = function () {
    var target = document.getElementById ('mapp');
    
    //define your coordinates
    var coords = new google.maps.LatLng (9.0, 8.6);
    
    //define map options 
    var options = {
        center: coords,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //call map method
    var  map = new google.maps.Map (target, options);
};