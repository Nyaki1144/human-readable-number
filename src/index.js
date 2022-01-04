let units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ],
    teens = [
        [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        [
            ,
            ,
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
    ],
    hundred = "hundred";

module.exports = function toReadable(number) {
    let str = "";
    let arr = number.toString().split("");
    let ferstNumber = arr[0];
    let secondNumber = arr[arr.length - 2];
    let lastNumber = arr[arr.length - 1];

    function unitsNumber() {
        return (str = units[ferstNumber]);
    }

    if (number == 0) {
        return (str = "zero");
    }

    function teensNumber() {
        if (secondNumber == 0) {
            return (str = units[lastNumber]);
        } else if (secondNumber == 1) {
            return (str = teens[0][lastNumber]);
        } else {
            return (str = teens[1][secondNumber] + " " + units[lastNumber]);
        }
    }

    if (number < 10) {
        unitsNumber();
    } else if (number >= 10 && number < 100) {
        teensNumber();
    } else {
        str = `${unitsNumber()} ${hundred} ${teensNumber()}`;
    }

    return str.trim();
};
