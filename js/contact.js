$(window).on('load', function () {
	$(".ccontainer").show();
	$(".loader").fadeOut("slow");
});

function contactSubmit() {
	try {
		var crftname = $('#crftname').val();
		var crltname = $('#crltname').val();
		var cremail = $('#cremail').val();
		var crmsg = $('#crmsg').val();
		var data = 'Name: ' + crftname + " " + crltname + " <" + cremail + "> " + "\nMESSAGE: " + crmsg;
		console.log(data)
		$(".submitwindow").show()
	} catch (error) {
		console.error(error);
	}
}