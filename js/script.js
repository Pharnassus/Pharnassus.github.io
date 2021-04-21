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
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}