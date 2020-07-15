import $ from './lib/lib';


$('.active').on('click', sayHello);

$('button').on('click', function() {
    $(this).toggleClass('active');
});

function sayHello() {
    console.log('Hello');
}