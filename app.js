var mentors = document.getElementById("mentors")

var row1 = document.getElementById("mentors").children[1].children
var row2 = document.getElementById("mentors").children[2].children

// console.log(row1[0])
console.log(row2)

var test = document.getElementsByClassName('flip-card-front')
// console.log(test[1].children[0].offsetWidth)

// row1[0].style.height = test[1].children[0].offsetWidth.toString() + "px"

window.onload = function(){
	for (var i = 0; i < row1.length; i++) {
		row1[i].style.height = test[1].children[0].offsetWidth.toString() + "px"
		console.log(row1[i].style.height)
	}
	for (var i = 0; i < row2.length; i++) {
		row2[i].style.height = test[1].children[0].offsetWidth.toString() + "px"
		console.log(row2[i].style.height)
	}
};


window.addEventListener('resize', function(event) {
	console.log(test[1].children[0].offsetWidth.toString() + "px")
	for (var i = 0; i < row1.length; i++) {
		row1[i].style.height = test[1].children[0].offsetWidth.toString() + "px"
		console.log(row1[i].style.height)
	}
	for (var i = 0; i < row2.length; i++) {
		row2[i].style.height = test[1].children[0].offsetWidth.toString() + "px"
		console.log(row2[i].style.height)
	}
}, true);