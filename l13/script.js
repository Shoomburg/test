$(document).ready(function(){
	$('.list-item:first').hover(function(){
		$(this).toggleClass('active') // если есть toggle, то процесс обратимый
	});
	
	$('.list-item:eq(2)').on('click', function(){
		$('.image:even').fadeToggle('slow'); // even - получаем все четные картинки
	});

	$('.list-item:eq(4)').on('click', function(){
		$('.image:odd').animate({  // odd - получаем все четные картинки
			opacity: 'toggle',
			height: 'toggle',
		}, 2000);
	});
});