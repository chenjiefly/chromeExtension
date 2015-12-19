$(function() {
    var $title = $('.title'),
        $btn = $('.btn');

    $btn.on('click', function(ev) {
        var el = $(this);

        $title.text('Good job!');
    });
});