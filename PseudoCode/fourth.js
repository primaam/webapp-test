let single = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
let dozens = [
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
];

const handleCurrency = (num) => {
    let res = "";
    let remains;

    if (num <= 2000) {
        res = "input number more than 2000!";
    } else {
        let thousands = Math.floor(num / 1000);
        remains = num % 1000;

        res += single[thousands] + " Ribu ";

        let hundred = Math.floor(remains / 100);
        remains = remains % 100;

        if (hundred > 0) {
            res += single[hundred] + " Ratus ";
        }

        let tens = Math.floor(remains / 10);
        remains = remains % 10;

        if (tens === 1) {
            res += dozens[remains];
        } else if (tens === 0) {
            res += "";
            res += single[remains];
        } else {
            res += single[tens] + " Puluh ";
            res += single[remains];
        }
    }

    return res;
};

console.log(handleCurrency(2000));
