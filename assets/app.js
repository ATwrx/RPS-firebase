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

var playerOne = $('#player-one')
var playerTwo = $('#plaer-two')
var playerOneSelectedChoice = $('.player-one-selected-choice')
var playerTwoSelectedChoice = $('.player-two-selected-choice')

$('.answer').on("click", function() {
	console.log($("this").val())
	
})
