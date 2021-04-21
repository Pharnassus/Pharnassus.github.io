//Dark/Light Mode
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