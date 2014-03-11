$(document).ready(function() {
	

//MODEL FROM CODECADEMY EXERCISES
	$("#button").click(function() {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item"><input type="checkbox" class="checkbox" />' + toAdd + 
        	'<span class="delete-item">X</span></div>');
    });

   	$(document).on('click', '.delete-item', function() {
        $(this).parent().remove();

    });

    $(document).on('click', ".checkbox", function() {
    	if ($(this).is(':checked')) {
    		$(this).parent().wrap("<strike>");
    	}

    	else {
    		$(this).parent().unwrap("<strike>");
    	}
    	
    	
    });

    // $(document).on('click', '#item-name', function() {
    //     $(this).remove();
    // });



	// CODE FOR FIRST ATTEMPT WITH UL AND LI
	// $(".plus").on("click", function(){
	// 	var item = $("#food").val();
	// 	// var item = $(this).closest('div').find('#food').val();
	// 	console.log("item", item);
	// 	var listItem = "<li class='list-item'>"+item+"</li>";
	// 	$("#main-list").append(listItem);
	// 	});
		
///////////////////////////////////////////////////////////



});

