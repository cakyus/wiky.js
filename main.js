
window.addEventListener('load', function() {
	$('#preview').html(wiky.process($('#textarea').val()));
});
