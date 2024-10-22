let handleValidation = () => {
    for (let i = 0; i <= 10; i++) {
        let num = 0;

        num = i * 5 + 50;
        if (num <= 60) {
            console.log(num, "KURANG");
        } else if (num > 60 && num <= 70) {
            console.log(num, "CUKUP");
        } else if (num > 70 && num <= 80) {
            console.log(num, "BAIK");
        } else {
            console.log(num, "LUAR BIASA");
        }
    }
};

handleValidation();
