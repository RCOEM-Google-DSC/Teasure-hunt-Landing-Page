window.onload = () => {

}

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy,
    dayMonth = "01/23/",
    birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
    birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("day").innerText = Math.floor(distance / (day)),
            document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("second").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {

            clearInterval(x);
        }
        //seconds
    }, 0)
