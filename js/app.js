//////  Custom Functions  //////

function addItem() {
	if ($("input").val() == "") {
		alert("Please enter an item");
		return false;
		$(".input").focus();
	}
	var item=$("input[name=checkListItem]").val();
	$("#itemsList").append("<li class='item'>" + item + "</li>");
	$(".item").parent().append("<div class='edit'>EDIT</div>" + 
				  	"<div class='delete'>DELETE</div>");	
	 $("form")[0].reset();
}

function deleteItem() {
	$(this).parent().remove();
}



$(document).ready(function(){
	$(".input").focus();
//gets the value when '+' is clicked
	$("#button").click(addItem);
//gets the value when 'enter' is pressed
	$(".input").on("keydown", function(event){
		if(event.keyCode == 13) {
		   addItem();
		   //alert("enter was pressed");
		}
	});
	$(".input").focus();

//Deletes item 
	$(document).on("click", ".delete", function(){
		$(this).prev().prev().remove();
		$(this).prev().remove();
		$(this).remove();
		console.log("Delete was clicked");
	});

//Edits item 
	$(document).on("click", ".edit", function(){
		console.log("Edit was clicked");
	});

//adds strikethrough and fades list item 
	$(document).on("click", ".item", function(){
		$(this).toggleClass("strike");
		console.log("item was clicked");
	});


});

