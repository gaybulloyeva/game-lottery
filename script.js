function choose() {
    let num1 = prompt("1-sonni kiriting")
    let num2 = prompt("2-sonni kiriting")
    let num3 = prompt("3-sonni kiriting")
    let num4 = prompt("4-sonni kiriting")
    let num5 = prompt("5-sonni kiriting")
    let num6 = prompt("6-sonni kiriting")

    if (num1 > 1 && num1 < 100 && num2 > 1 && num2 < 100 && num3 > 1 && num3 < 100 && num4 > 1 && num4 < 100 && num5 > 1 && num5 < 100 && num6 > 1 && num6 < 100) {
        document.getElementById("num1").innerHTML = num1
        document.getElementById("num2").innerHTML = num2
        document.getElementById("num3").innerHTML = num3
        document.getElementById("num4").innerHTML = num4
        document.getElementById("num5").innerHTML = num5
        document.getElementById("num6").innerHTML = num6
    }

    else {
        document.getElementById("error").innerHTML = "Kiritilishi kerak bo'lgan barcha son 1 dan 100 gacha bo'lishi kerak"
    }

}


function randomNum() {

    let ticket = []

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 100)

        ticket.push(randomNum)
    }

    document.getElementById("random").innerHTML = ticket

}













