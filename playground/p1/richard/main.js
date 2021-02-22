$(document).ready(function() {
    $('.scrolling-wrapper-flexbox').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 90);
    e.preventDefault();
    });
    $('.parallax__layer--back').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 60);
        e.preventDefault();
        });
    });

