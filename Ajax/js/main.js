
(function($){

	$(document).ready(function(){
		console.log("Dom js");

		$("#tinh").on("click",function(){
			console.log("Asd");

			var a1=$("input[name=a]").val();
			var b1=$("input[name=b]").val();
			var pheptinh=$("select[name=tinh]").val();

			var data = {
					a : $("input[name=a]").val(),
					b : $("input[name=b]").val() ,
					tinh : pheptinh
				};

			console.log(data);

			$.ajax({
				url: "xuly.php",
				method: "POST",
				data : data,
				success: function(anser){
					console.log(anser);
					$("#anser").text(anser)
						.fadeOut(100)
						.fadeIn(2000);
				},
				error: function(anser){
					console.log(anser);
				}
			});
		});


	});

})(jQuery);


