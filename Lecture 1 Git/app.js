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

// task 2

function grid(n) {
    if (n===0) return null;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i=0 ; i<n ; i++) {
        if (i+n > alphabet.length) {
            console.log (alphabet.substring(i) + alphabet.substring(0,i+n-26));
        }
        else {
            console.log(alphabet.substring(i, i + n));
        }
    }
}