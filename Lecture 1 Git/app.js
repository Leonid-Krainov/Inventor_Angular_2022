// task 1

function calculate(str) {
    let arrayFromStr = str.split(" ")
    let dotAmount = 0;
    switch (arrayFromStr[1]) {
        case "+" :
            dotAmount = arrayFromStr[0].length + arrayFromStr[2].length;
            break;
        case "*" :
            dotAmount = arrayFromStr[0].length * arrayFromStr[2].length;
            break;
        case "-" :
            dotAmount = arrayFromStr[0].length - arrayFromStr[2].length;
            break;
        case "//" :
            dotAmount = Math.floor(arrayFromStr[0].length / arrayFromStr[2].length);
            break;
    }
    return ".".repeat(dotAmount);
}