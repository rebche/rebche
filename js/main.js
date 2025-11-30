// navbar pop-up
window.addEventListener('DOMContentLoaded', () => {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", fade);
    
    function fade() {
        let currentScrollPosition = window.pageYOffset;
    
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.bottom = "0";
        }
        else {
            document.getElementById("navbar").style.bottom = "-100px";
        }
    
        prevScrollPosition = currentScrollPosition;
    }
})


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