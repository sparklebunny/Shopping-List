$(document).ready(function() {

//HELP ALERT 
    $("#help").on("click", function() {
        alert($("#help-info").text());
    });

//MODEL FROM CODECADEMY EXERCISES
	$("#button").click(function() {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append(
        	'<div class="item">' +
        		'<input type="checkbox" class="checkbox" />' +
        		'<span class="text">' + 
        			toAdd + 
        		'</span>' +
        		'<span class="delete-item"><img src="images/delete-button.png" /></span>' +
        	'</div>');
        $("#check-list-item").val("");
    });

   	$(document).on('click', '.delete-item', function() {
        $(this).parent().remove();

    });

    $(document).on('click', ".checkbox", function() {
    	if ($(this).is(':checked')) {
    		$(this).parent().find('.text').wrap("<strike>");
    	}

    	else {
    		$(this).parent().find('.text').unwrap();
    	}

    // $(document).on('click', "#help-info", function(){
    //     $("#help-info").popBox();
    // 	});
    	



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

