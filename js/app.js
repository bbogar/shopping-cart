//////  Custom Functions  //////

function addItem() {
	if ($("input").val() == "") {
		alert("Please enter an item");
		preventDefault();
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
	$(".input").focus();
//gets the value when 'enter' is pressed
	$(".input").on("keydown", function(event){
		if(event.keyCode == 13) { 
			event.preventDefault();
		   addItem();
		   console.log("enter was pressed");
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
		if ($(this).prev().attr("contenteditable"))
				$(this).prev().removeAttr("contenteditable");
		else $(this).prev().attr("contenteditable", "true");
		//$(this).prev().attr("contenteditable", "true");
		$(this).prev().focus();
		console.log("Edit was clicked");
	});

	$(document).on("click", ".item", function(){
		if ($(this).attr("contenteditable"))
				$(this).removeAttr("contenteditable");
		else $(this).attr("contenteditable", "true");
		//$(this).prev().attr("contenteditable", "true");
		$(this).focus();
	});

	
//adds strikethrough and fades list item 
	$(document).on("dblclick", ".item", function(){
		$(this).toggleClass("strike");
		console.log("item was clicked");
	});

//adds highlight to item being hovered over
	$(document).on("hover", ".item", function(){
		$(this).toggleClass("hover");
	});


});

