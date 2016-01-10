//<![CDATA[
$(window).load(function(){
$('.drag').draggable({
    revert: 'invalid',
    stop: function(){
        
        $(this).draggable('option','revert','invalid');
    }
});



$('.drop').droppable({
    drop: function(event,ui){
        var $this = $(this);
         

        if(($this.find('.drag').length >= 10) || ($this.hasClass('freezed'))){

            ui.draggable.draggable('option','revert',true);
            return;
        }

	
        ui.draggable.appendTo($this).css({
            top: '0px',
            left: '0px'
        });
        
        $('.drop').each(function(){
            var $this = $(this);
            $this.next('.info').html($this.find('.drag').length);
        });
    }
});
});//]]> 



$('a.freeze').click(function(){
	  $(this).text('Freezed !').css('color','red').css('cursor','default').css('background-image','url(freezed.png)').css('padding-left','19px');
		$(this).prev('div').addClass('freezed');		 
	  });
	  

 $('#name').click(function () {
   
 var mylist = $('#content');
var listitems = mylist.children('div.frames').get();
listitems.sort(function(a, b) {
   var compA = $(a).text().toUpperCase();
   var compB = $(b).text().toUpperCase();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

 });
 
  $('#dept').click(function () {

 var mylist = $('#content');
var listitems = mylist.children('div.frames').get();
listitems.sort(function(a, b) {
   var compA = $(a).find('.details span').text();
   var compB = $(b).find('.details span').text();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

 });
    
  var allPanels = $('#content div.drop').hide();
    allPanels.slideUp();
	$('#content div.frames:first-child .drop').show();
	$('#content div.frames:first-child h3').addClass('active');
  $('div.frames > h3').click(function() {
    
    $(this).next('.drop').slideToggle();
	$(this).toggleClass('active');
    return false;
  });

 
 
	 
