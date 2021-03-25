let checkAge = document.querySelector('.age__check');
checkAge.addEventListener('pointerdown', function () {
    let age = +prompt("Еnter your age!")
    if (age <= 18) {
        alert("You are too young, you need to learn!")
    } else if (age <= 50) {
        alert("You need to go working!")
    } else if (age <= 59) {
        alert("You will soon retire")
    } else if (age <= 150) {
        alert("You are retire")
    } else if (age = isNaN) {
        alert("This is not a numbers!")
    } else {
        alert("Something's wrong!")
    }
})


let checkTime = document.querySelector('.time__check');
checkTime.addEventListener('pointerdown', function () {
    let time = +prompt("What time is it now?")
    switch (time) {
        case 0: 
            alert("it's midnight now")
            break;
        case 1:
            alert("it's one o'clock in the morning")
            break;
        case 2:
            alert("it's two o'clock in the morning")
            break;
        case 3:
            alert("it's three o'clock in the morning")
            break;
        case 4:
            alert("it's four o'clock in the morning")
            break;
        case 5:
            alert("it's five o'clock in the morning")
            break;
        case 6:
            alert("it's six o'clock in the morning")
            break;
        case 7:
            alert("it's seven o'clock in the morning")
            break;
        case 8:
            alert("it's eight o'clock in the morning")
            break;
        case 9:
            alert("it's nine o'clock in the morning")
            break;
        case 10:
            alert("it's ten o'clock in the morning")
            break;
        case 11:
            alert("it's eleven o'clock in the morning")
            break;
        case 12:
            alert("It's noon!")
            break;
        case 13:
            alert("it's one o'clock in the afternoon")
            break;
        case 14:
            alert("it's two o'clock in the afternoon")
            break;
        case 15:
            alert("it's three o'clock in the afternoon")
            break;
        case 16:
            alert("it's four o'clock in the afternoon")
            break;
        case 17:
            alert("it's five o'clock in the afternoon")
            break;
        case 18:
            alert("it's six o'clock in the evening")
            break;
        case 19:
            alert("it's seven o'clock in the evening")
            break;
        case 20:
            alert("it's eight o'clock in the evening")
            break;
        case 21:
            alert("it's nine o'clock in the evening")
            break;
        case 22:
            alert("it's ten o'clock in the evening")
            break;
        case 23:
            alert("it's eleven o'clock in the evening")
            break;
        case isNaN:
            alert("Enter only number!")
            break;
        case (time > 23 || time < 0):
            alert("There is no such time!")
            break;
        default: alert("Something's wrong!")
            break;
    }
})

let findFactorial = document.querySelector('.find__factorial');
findFactorial.addEventListener('pointerdown', function () {
    let num = +prompt('Enter number!')
    for (let i = 1; i < num; i++) {
        
    }
})
