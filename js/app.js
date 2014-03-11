$(document).ready(function(){

//gets the value from the input
//should go inside event listner when 'enter' or button is clicked
	$("#button").on("click", function(){
		var item=$("input[name=checkListItem]").val();
		$(".list-items").append("<div class='item'>" + item + "</div>");
		$("form")[0].reset();	
	});

	$(document).on("click", ".item", function(){
		$(this).addClass("strike");
	});

	// $("input").val("");
	// $("form")[0].reset();
});