
window.addEventListener('load', function() {
	
	$('#preview').html(wiky.process($('#textarea').val()));
	
	// -- Event Listener --
	$('input[name="buttonViewWiki"]').click(function(){
		alert('buttonViewWiki');
	});
	$('input[name="buttonViewHTML"]').click(function(){
		alert('buttonViewHTML');
	});
});
