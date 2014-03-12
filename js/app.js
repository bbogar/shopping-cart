//////  Custom Functions  //////

function addItem() {
	if ($("input").val() == "") {
		alert("Please enter an item");
		return false;
		$(".input").focus();
	}
	var item=$("input[name=checkListItem]").val();
	$("#listItems").append("<li class='item'>" + 
							item + 
						   "<button class='edit'>EDIT</a>" + 
				  		   "<button class='delete'>DELETE</a></li>");	
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
		}
	});
	$(".input").focus();


//////  Strikethrough and Remove Items  //////

//adds strikethrough and fades list item when clicked
	$(document).on("click", ".item", function(){
		$(this).toggleClass("strike");
	});

//Deletes item when 'delete' is clicked
	$(".delete").on("click", function(){
		console.log("Delete was clicked");
	});

//Edits item when 'edit' is clicked
	$(".edit").on("click", function(){
		console.log("Edit was clicked");
	});

});

