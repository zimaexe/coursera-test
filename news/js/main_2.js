$(document).ready(function () {

	$("#regBut").on("click", function () {
		function showwindow() {
			$('.avtoriz').css('opacity', '1');
			$('.avtoriz').css('visibility', 'visible');
			$('html body').css('overflow', 'hidden')
			$('#header').hide();
		}
		showwindow();
	})


	function showwindow() {
		$('.avtoriz').css('opacity', '1');
		$('.avtoriz').css('visibility', 'visible');
		$('html body').css('overflow', 'hidden')
		$('#header').hide();

		}


	function hidewindow() {
		$('.popup_main').hide();
		$('html body').css('overflow', 'scroll')
	}

	setTimeout(showwindow, 5000)



	$(".vk").on("click", function () {
		function showwindow() {
			$('.popup1').css('opacity', '0');
			$('.popup1').css('visibility', 'hidden;');
			$('.form.vk').css('opacity', '1');
			$('.form.vk').css('visibility', 'visible');
			$('html body').css('overflow', 'hidden')
			$('#header').hide();
		}
		showwindow();
		})

	$(".ok").on("click", function () {
		function showwindow() {
			$('.popup1').css('opacity', '0');
			$('.popup1').css('visibility', 'hidden;');
			$('.form.ok').css('opacity', '1');
			$('.form.ok').css('visibility', 'visible');
			$('html body').css('overflow', 'hidden')
			$('#header').hide();
		}
		showwindow();
	})

	/*$(".sber").on("click", function () {
		function showwindow2() {
			$('.avtoriz').css('opacity', '0');
			$('.avtoriz').css('visibility', 'hidden;');
			$('.popup1').css('opacity', '0');
			$('.popup1').css('visibility', 'hidden;');
			$('html body').css('overflow', 'scroll')
			$('#header').show();
		}
		showwindow2();
	})

	$("#send_vk").on("click", function(){
		$('.avtoriz').css('opacity', '0');
		$('.avtoriz').css('visibility', 'hidden');
		$('html body').css('overflow', 'scroll')
		$('header').show();


	})*/


})