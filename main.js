
window.addEventListener('load', function() {
	
	$('#wikyViewHTML').html(wiky.process($('#wikyEditor').val()));
	$('#wikyViewHTML').hide();
	
	// -- Event Listener --
	$('.buttonViewWiki').click(function(){
		$('#wikyEditor').show();
		$('#wikyViewHTML').hide();
	});
	
	$('.buttonViewHTML').click(function(){
		$('#wikyViewHTML').show();
		$('#wikyEditor').hide();
	});
	
	$('#wikyEditor').keyup(function(){
		$('#wikyViewHTML').html(wiky.process($('#wikyEditor').val()));
	});
	
	
});
