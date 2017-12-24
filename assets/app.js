// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCYWVZBBlcCTjQsGcEyLoe_gayyZXoS2Fg',
    authDomain: 'rpb-smu.firebaseapp.com',
    databaseURL: 'https://rpb-smu.firebaseio.com',
    projectId: 'rpb-smu',
    storageBucket: 'rpb-smu.appspot.com',
    messagingSenderId: '597172240588',
}
firebase.initializeApp(config)
var database = firebase.database()

var p1Selected, p2Selected
$(document).on("click", ".answer-choice", function() {
    var rps = $(this).attr("alt")
    rps = rps.charAt(0).toUpperCase() + rps.slice(1)
    if ($(this).attr("player") == "1") {
        $("#player-one-selected-choice").html("<h5>" + rps + "</h5>")
	return p1Selected = true
    } else {
        $("#player-two-selected-choice").html("<h5>" + rps + "</h5>")
	return p2selected = true
    }
})
function compare(p1Choice, p2Choice) {
	//TODO: make switch case for answers
}
//TODO: Add Firebase database calls, Add check for 2 players
