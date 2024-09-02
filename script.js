function choose() {
    let num1 = prompt("1-sonni kiriting")
    let num2 = prompt("2-sonni kiriting")
    let num3 = prompt("3-sonni kiriting")
    let num4 = prompt("4-sonni kiriting")
    let num5 = prompt("5-sonni kiriting")
    let num6 = prompt("6-sonni kiriting")

    if (num1 > 1 && num1 < 100) {
        document.getElementById("num1").innerHTML = num1
    }

    if (num2 > 1 && num2 < 100) {
        document.getElementById("num2").innerHTML = num2
    }

    if (num3 > 1 && num3 < 100) {
        document.getElementById("num3").innerHTML = num3
    }

    if (num4 > 1 && num4 < 100) {
        document.getElementById("num4").innerHTML = num4
    }

    if (num5 > 1 && num5 < 100) {
        document.getElementById("num5").innerHTML = num5
    }

    if (num6 > 1 && num6 < 100) {
        document.getElementById("num6").innerHTML = num6
    }

    else {
        document.getElementById("error").innerHTML = "1 dan 100 gacha bo'lgan son kiriting!"
    }
}