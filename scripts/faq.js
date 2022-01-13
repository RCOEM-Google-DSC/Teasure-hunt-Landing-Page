window.onload = () => {
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            for (let j = 0; j < acc.length; j++) {
                if (acc[j].classList.contains("active")) {
                    acc[j].classList.toggle("active")
                    acc[j].nextElementSibling.style = "none"
                }
            }
            this.classList.toggle("active");

            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}