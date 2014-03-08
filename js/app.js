$(document).ready(function() {
	// $("#food").keypress(function(e){
	// 	if(e.keycode == 13) {
	// 		$("#add-button").click()
	
// 	}
// }
		// $(this).(val);
	
	$(".plus").on("click", function(){
		var item = $("#food").val();
		// var item = $(this).closest('div').find('#food').val();
		console.log("item", item);
		var listItem = "<li class='list-item'>"+item+"</li>";
		$("#main-list").append(listItem);

			});
		
});