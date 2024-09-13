let lotteryNums = "";

for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * 100);
    lotteryNums += rand.toString() + " ";
}

let userNums = "";
for (let i = 0; i < 6; i++) {
    let num = prompt("Enter number");
    num = parseInt(num);

    if (num <= 100 && num > 0) { 
        userNums += num + " ";
    } 
    else {
        userNums += "1 dan 100 gacha tanlashingiz kerak ";
    }
}


let lottery = lotteryNums.split(" ");
let user = userNums.split(" ");
let k = 0;

for (let i = 0; i < lottery.length; i++) {
    if (user.includes(lottery(i))) k++;
}

console.log("Lottery numbers: ", lotteryNums);
console.log("Your numbers: ", userNums);

switch (k) {
    case 3:
        console.log("You won $10");
        break;
    case 4:
        console.log("You won $50");
        break;
    case 5:
        console.log("You won $1000");
        break;
    case 6:
        console.log("You won $10000");
        break;
    default:
        console.log("You lost");
}





















// let lotteryNums = " "
// let rand = Math.floor(Math.random() * 100)
// let randStr = rand.toString()

// for (let i = 0; i < 6; i++) {
//     lotteryNums.concat(" ", randStr)
// }

// const userNums = " "
// for (let i = 0; i < 6; i++) {
//     let num = prompt("Enter number")
//     userNums.concat(num)
// }

// let k = 0

// for (let i = 0; i < lotteryNums.length; i++)
//     for (let j = 0; j < userNums.length; j++) {
//         if (lotteryNums.includes(i) === userNums.includes(j)) k++
//     }

// console.log("Lotteriya raqami ", lotteryNums)
// console.log("Sizning raqamlaringiz ", userNums)

// switch (k) {
//     case 3:
//         console.log("You won $10")
//         break
//     case 4:
//         console.log("YOu won $50")
//         break
//     case 5:
//         console.log("You won $1000")
//         break
//     case 6:
//         console.log("You won $10000")
//         break
//     default:
//         console.log("You lost")
// }














































// function choose() {
//     let num1 = prompt("1-sonni kiriting")
//     let num2 = prompt("2-sonni kiriting")
//     let num3 = prompt("3-sonni kiriting")
//     let num4 = prompt("4-sonni kiriting")
//     let num5 = prompt("5-sonni kiriting")
//     let num6 = prompt("6-sonni kiriting")

//     if (num1 > 1 && num1 < 100 && num2 > 1 && num2 < 100 && num3 > 1 && num3 < 100 && num4 > 1 && num4 < 100 && num5 > 1 && num5 < 100 && num6 > 1 && num6 < 100) {
//         document.getElementById("num1").innerHTML = num1
//         document.getElementById("num2").innerHTML = num2
//         document.getElementById("num3").innerHTML = num3
//         document.getElementById("num4").innerHTML = num4
//         document.getElementById("num5").innerHTML = num5
//         document.getElementById("num6").innerHTML = num6
//     }

//     else {
//         document.getElementById("error").innerHTML = "Kiritilishi kerak bo'lgan barcha son 1 dan 100 gacha bo'lishi kerak"
//     }

// }


// function randomNum() {

//     let ticket = []

//     for (let i = 0; i < 6; i++) {
//         let randomNum = Math.floor(Math.random() * 100)

//         ticket.push(randomNum)
//     }

//     document.getElementById("random").innerHTML = ticket

// }













