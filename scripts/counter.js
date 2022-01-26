window.onload = () => {

    document.getElementById("loader").style.display = "none"

    let second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let eventDate = "27 Jan 2022 15:58"
    let countDown = new Date(eventDate).getTime()

    setInterval(() => {

        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("day").innerText = Math.floor(distance / (day)),
            document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("second").innerText = Math.floor((distance % (minute)) / second);


        //do something later when date is reached
        if (distance < 0) {
            let cd = document.getElementById("timeLeftHeading")
            cd.innerHTML = "The hunt has begun ... !"
            cd.style.color = "red"
            cd.style.fontSize = "3rem"

            document.getElementsByClassName("countdown")[0].innerHTML = ""

            document.getElementsByClassName("btn")[0].innerText = "Log in"
            document.getElementById("btn-a").href = "https://dsc-treasure-hunt.herokuapp.com"
            clearInterval(x);
        }
        //seconds
    }, 0)


    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            // for (let j = 0; j < acc.length; j++) {
            //     if (acc[j].classList.contains("active")) {
            //         acc[j].classList.toggle("active")
            //         acc[j].nextElementSibling.style = "none"
            //     }
            // }
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