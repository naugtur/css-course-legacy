//when element matching selector '.toggler' is clicked, class 'changed' will be added or removed
$(document).on('click', '.toggler', function () {
    $(this).toggleClass('changed');
});



//Change class 'shine' on elements matching selector '.box' when clicked on '.button'
$(document).on('click', '.button', function () {
    $('.box').toggleClass('shine');
});

//Change class 'ready' on selected '.waiter' element after some time 
setTimeout(function () {
    $('.waiter').toggleClass('ready');
}, 5000); // Time in miliseconds. 1000 is 1sec