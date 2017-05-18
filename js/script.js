$('label').click(function(){
  $(this).children().trigger('click');
});
$('input').click(function(){
  var type = $(this).attr('value');
  var checked = $(this).prop('checked');
  if( !checked ){
    $('.' + type + '-card').hide(500); 
  }else{
     $('.' + type + '-card').show(500);
  }
});