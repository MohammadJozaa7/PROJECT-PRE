var t = 9999
var array=["https://static.fjcdn.com/pictures/Tea_adcbd2_366774.jpg",
"https://image.tmdb.org/t/p/original/lChpl17cnyyuwZYFrWqyMn30ahN.jpg",
"https://i.pinimg.com/736x/1c/46/bd/1c46bd2ee5586293d28266339bb4fad0--men-beard-beard-styles.jpg",

]
var arrayNameToIndex=[
"Abdalhamed Abdalla",
"Ahmad Mostafa",
"Alik Alaqra",
"Amira Hassoun",
"Ammar Halbouni",
"Atheer Mahmood",
"Fatima",
"Hanan Al-majali",
"Hugh Bosely",
"Loop",
"Mohannad Bakkar",
"Nader Nasr",
"Qays Trad",
"Raed Bani Awwad",
"Safaa El Ouafi",
"Sara"
]

$("#GO").click(function () {
	// body...
	var x = $("#NAME option:selected").text();
	if (x==="Select a name please") {
		location.reload()
		alert("Sorry you don't pick a name please pick now then press Go");
	}
	else {
    alert("You picked: \n" + x);
    $("body").css("background-color", "black");
	$(".ALL").empty();
	$(".GO2").css("color","black");
	for (var i = 0; i < arrayNameToIndex.length; i++) {
		console.log(x)
	if (x===arrayNameToIndex[i]) {
			$("body").css("background-color", "blue");
			break;
		}
	}
}
      
 
});


// NAME  // GO