/*
===============
dark-light mode
===============
*/
var themeModeCheck = document.querySelector('input[name=theme]');

themeModeCheck.addEventListener('change', function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        document.cookie = "themeMode=dark";
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        document.cookie = "themeMode=light";
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


/*
===============
haburger icon
===============
*/
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("hamburger_nav_ms");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.position = "absolute";
        y.style.top = "27px";
        y.style.left = "326px";
        y.style.fontSize = "20px";
    } else {
        x.style.display = "block";
        y.style.position = "relative";
        y.style.top = "20px";
        y.style.left = "20px";
        y.style.fontSize = "30px";
    }
}


/*
===============
Scroll btn box 1
===============
*/
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body, main, div, a').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});