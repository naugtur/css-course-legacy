
/* copy the lines, paste them above this comment and fill them with selectors and classnames

//change class on click
$(document).on('click','SELECTOR',function(){$(this).toggleClass('SOMENAME');});


//Change class on elements matching selector2 when clicked on selector1
$(document).on('click','SELECTOR1',function(){$('SELECTOR2').toggleClass('SOMENAME');});

//Change class on selected element after some time 
setTimeout(function(){
	$('SELECTOR').toggleClass('SOMENAME');
},1000);// Time in miliseconds. 1000 is 1sec
