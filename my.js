document.addEventListener('DOMContentLoaded', function(){ 
  $( function() {
    $( "#shops-list" ).sortable({
      revert: true
    });
    $( "#shops-list, .shops-list__teaser" ).disableSelection();
  } );
	    
});