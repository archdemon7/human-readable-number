module.exports = function toReadable (number) {
    let FirstTen = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let SecondTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let OtherTen = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = "hundred";
    let i = String(number).length;
    const number2 = number
    let result = [];
    while (i){
        let ost = number%10;
        result.push(ost);
        number = Math.floor(number/10)
        i -= 1;
    }
    result = result.reverse();  
    if (number2 < 10){
        if (number2 === 0){
            return 'zero'
        }else{
            return (FirstTen[result[0] - 1]);
        }
    }else if (number2 >= 10 && number2 < 20){
        return (SecondTen[number2 - 10]);
    }else if (number2 >= 20 && number2 < 100){
        if (number2 % 10 === 0){
            return (OtherTen[Math.floor(number2/10 - 2)]);
        }else{
            return `${OtherTen[Math.floor(number2/10 - 2)]} ${FirstTen[Math.floor(number2 % 10 - 1)]}`;
        }
    }else if (number2 >= 100 && number2 < 1000){
        if (number2 % 10 === 0 && number2 % 100 === 0){
            return `${FirstTen[Math.floor(number2 / 100 - 1)]} ${hundred}`;
        }else if (number2 % 100 < 10){
            return `${FirstTen[Math.floor(number2 / 100 - 1)]} ${hundred} ${FirstTen[result[2] - 1]}`;
        }else if (number2 % 100 >= 10 && number2 % 100 < 20){
            return `${FirstTen[Math.floor(number2 / 100 - 1)]} ${hundred} ${SecondTen[result[2]]}`;
        }else if (number2 % 100 >= 20){
            if (number2 % 10 === 0){
                return `${FirstTen[Math.floor(number2 / 100 - 1)]} ${hundred} ${OtherTen[Math.floor((number2 % 100)/10) - 2]}`;
            }else{
                return `${FirstTen[Math.floor(number2 / 100 - 1)]} ${hundred} ${OtherTen[Math.floor((number2 % 100)/10) - 2]} ${FirstTen[Math.floor(number2 % 10 - 1)]}`;
            }
        }
    }
}
