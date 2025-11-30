// navbar pop-up
window.addEventListener('DOMContentLoaded', () => {
    let prevScrollPosition = window.scrollY;
    window.addEventListener("scroll", fade);
    
    function fade() {
        let currentScrollPosition = window.scrollY;
    
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.bottom = "0";
        }
        else {
            document.getElementById("navbar").style.bottom = "-100px";
        }
    
        prevScrollPosition = currentScrollPosition;
    }
})

// drop-down arrow change animation for work page

function dropdown(project, event) {
    const content = document.getElementById(project);
    const arrow = event.target;

    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        arrow.src = arrow.dataset.upArrow;
    }
    else {
        arrow.src = arrow.dataset.downArrow;
    }
}


window.onclick = function(event) {
    if (!event.target.closest(".dropdown-arrow")) {
        var dropdowns = document.getElementsByClassName("content");
        var arrows = document.querySelectorAll(".dropdown-arrow");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }

        arrows.forEach(function(arrow) {
            arrow.src = arrow.dataset.downArrow;
        });
    }
}
// snackbar pop-up
function snackbar() {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
}

// home page greeting animation + fade

var greetings = ["Hello!", "你好!", "¡Hola!"];
var counter = 0;
var currentLanguage = document.getElementById('greeting');
setInterval(changeLanguage, 3500);

function changeLanguage() {
    currentLanguage.style.opacity = '0';
    setTimeout(() => {
    currentLanguage.innerHTML = greetings[counter];
    counter++;
    if (counter >= greetings.length) {counter = 0;}   
    currentLanguage.style.opacity = '1';
    }, 500);
}

