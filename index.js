var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].nextElementSibling.style.height = 'auto';
    acc[i].nextElementSibling.style.padding = '2vh';

    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (!panel.style.height) {
            panel.style.height = 'auto';
            panel.style.padding = '2vh';
        } else {
            panel.style.height = null;
            panel.style.padding = null;
        }
    });
}

window.addEventListener('load', () => {
    document.body.classList.add('is-loaded');
});
