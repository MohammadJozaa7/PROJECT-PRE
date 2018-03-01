var t = 9999

var arrayColor=[
"#10167f",
"#10167f",
"#10167f",
"#b21c57",
"#10167f",
"#10167f",
"#b21c57",
"#b21c57",
"#10167f",
"#b21c57",
"#10167f",
"#10167f",
"#10167f",
"#10167f",
"#b21c57",
"#b21c57"
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

var arrayNote=[
"The Guy Who Can Support Someone Or Destroy Him",
"Sing Guy",
"New Guy",
"The Princess",
"Rich Guy",
"Plat Guy",
"Who Brings The Question From Mars",
"Pure Voice",
"Our Boss",
"Our Each",
"Guy For Ask",
"Sigarit Guy",
"The Funny Guy",
"Fail in Football",
"Our Allince",
"Is That Arabic"
]

var arrayFunnyPic=[
"https://i2.wp.com/draw.k3ki.com/wp-content/uploads/2016/02/%D8%AA%D8%B9%D9%84%D9%85-%D8%B1%D8%B3%D9%85-%D8%AF%D8%A8%D8%A7%D8%A8%D8%A9.jpg",
"https://image.tmdb.org/t/p/original/lChpl17cnyyuwZYFrWqyMn30ahN.jpg",
"https://i.pinimg.com/736x/1c/46/bd/1c46bd2ee5586293d28266339bb4fad0--men-beard-beard-styles.jpg",
"https://zweberfarms.files.wordpress.com/2011/08/338892_10150435642872785_155771917784_10668908_6254296_o.jpg?w=400&h=600",
"https://i.ytimg.com/vi/bFQ_qmC8PQ0/maxresdefault.jpg",
"https://blog.playo.co/wp-content/uploads/2017/07/ultimate-frisbee-1078x450.jpg",
"https://akhbarelyom.com/images/images/large/20171225184737524.jpg",
"https://image.pbs.org/video-assets/pbs/pioneers-of-television/67212/images/Mezzanine_305.jpg",
"https://www.cookingclassy.com/wp-content/uploads/2014/07/chocolate-chip-cookie-bites16+srgb..jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg",
"http://i37.tinypic.com/23jkajn.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdsRbAa5GINUFCJGOoq5Qkbivuac4kaRTlkmqglWd2wagMusFNA",
"http://s2.dmcdn.net/OC0Zg/1280x720-3KU.jpg",
"https://cdn2.cdnme.se/cdn/7-2/2262318/images/2010/fail_kick_113459181.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLMIXSFrR3N3O406CHyEhJAajJHLb5pZEKsHmAo-TqeTcSoX2Nw",
"https://sites.google.com/site/jortbijleveld/_/rsrc/1448225634779/i-hear-you-english-version/ihearyou.png"
]

$("#GO").click(function () {
	var nameShow = $("#NAME option:selected").text();
		
if (nameShow==="Select a name please") {
	alert("Sorry you don't pick a name please pick now then press Go");
	location.reload();
}
else{
	/* here to test only */
	$(".ALL").empty();

	$('#test1').append("<h1 id='nameAfter'></h1>");
	$('#nameAfter').css('font-size' ,'300px' ).css('color', 'white').css('font-family', 'Lobster');
	$('#nameAfter').text(nameShow);
console.log(nameShow)
    var indexIneed=0
	var noteShow = function knowTheIndex(){
		for (var i = 0; i < arrayNameToIndex.length; i++) {
			if (nameShow===arrayNameToIndex[i]){
					indexIneed=i
					}
		}
	}

	$('#test1').append("<p id='noteAfter'></p>");
	$('#noteAfter').css('font-size' ,'150px').css('color', 'white');
	$('#noteAfter').text(arrayNote[indexIneed]);

console.log(nameShow,arrayNote[indexIneed],indexIneed )

	$('#test1').append('<img id= "image2After" src="https://i2.wp.com/draw.k3ki.com/wp-content/uploads/2016/02/%D8%AA%D8%B9%D9%84%D9%85-%D8%B1%D8%B3%D9%85-%D8%AF%D8%A8%D8%A7%D8%A8%D8%A9.jpg" />');
	$('#image2After').css("<h1 id='nameAfter'>name</h1>");
	
	$('#test1').append("<div id='buttonBack'></div>");
	$('#buttonBack').append('<button onclick="clickRepickAgain()" id="repickAgain" class="buttonBack" ><p class="GO2"><b> >   Back     < </b></p></button>');
	
	$("#test1").css( "text-align" ,"center");
	
	$("body").css( "background-color", "#10167f");
}

	});
// 	else {
//     //alert("You picked: \n" + x);
//     $(".ALL").empty();
// 	for (var i = 0; i < arrayNameToIndex.length; i++) {
// 		console.log(x)
// 	if (x===arrayNameToIndex[i]) {
// 		$("body").css("background-image", "C:\Users\Mohammad Jozaa\Google Drive\شركات\شركة البرمجة\PHASE 1\PROJECT\PROJECT-PRE\NEED\Loop.jpg");
// 		$( ".ALL" ).add( "div" ).add( "<p id='new'>new paragraph</p>" )
// 			break;
// 		}
// 	}
// }
      
 

function clickRepickAgain () {
			location.reload() }



// NAME  // GO