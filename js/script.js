
$(function()
{
	setTimeout(function(){
			var x = $(window).width();
	var y = $(window).height();
	var xOut = $(window).outerWidth();
	var xIn = $(window).innerWidth();
	var yOut = $(window).outerHeight();
	var yIn = $(window).innerHeight();
	$('header').text('width-'+x+' height-'+y+' outerWidth-'+xOut+' innerWidth-'+xIn+' outerHeight-'+yOut+' innerHeight-'+yIn);
	
	},1000);

	var _prlxTop = $('.paralax').offset().top,
		_prlxHt = $('.paralax').height(),
		winHt = $(window).height(),
		winScrl = 0,
		_scrlIndx = 0,
		_scrlCount,
		_prlxY = $('.paralax').css('background-position').split(" ") ;

		//var _prlxY = 
	$(document).scroll(function()
		{
			winScrl = $(document).scrollTop();
			if(( (winScrl + winHt) >= _prlxTop ) && (( _prlxTop + _prlxHt ) > winScrl ))	// within parallax condition
			{
				// console.log(_prlxY[1]);
				// ptop + w
				_scrlCount = ( _prlxTop > winHt ) ? (_prlxTop - winHt) : 0 ;
				_scrlIndx = (( winScrl - _scrlCount ) * 0.2 ) + parseInt(_prlxY[1]) ;
				console.log(_scrlIndx);
				$('.paralax').css('background-position','50% '+_scrlIndx+'px');
				
			}
		})
});
