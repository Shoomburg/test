$(document).ready(function(){

	function letModal() {
		$('.modal').slideDown(1500);
		$('.overlay').fadeTo('slow', 1).css('z-index', '50');

			$('.close').on('click', function(){
				$('.modal').slideUp(1500);
				$('.overlay').fadeTo('slow', 0).css('z-index', '0');
			});
	} // end letModal()

	$('.main_btna').on('click', function(){
		letModal();
	});

	$('.main_btn').on('click', function(){
		letModal();
	});

	$('a[href="#sheldure"]').on('click', function(){
		letModal();
	});
}); // end $(document).ready