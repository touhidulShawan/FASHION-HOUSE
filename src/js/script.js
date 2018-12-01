$(document).ready(function() {
    $('#toggler-button').on('click', function() {
        $('#navId').toggleClass('active');
    });

    window.onscroll = function() { myFunction() };

    var navbar = document.getElementById("main-navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});