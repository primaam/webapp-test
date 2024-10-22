const handleFibonacci = () => {
    let seq = 20;
    let res = [];

    for (let i = 0; i < seq; i++) {
        if (i == 0 || i == 1) {
            res.push(i);
        } else {
            res.push(res[i - 2] + res[i - 1]);
        }
    }

    res.map((item) => console.log(`${item} `));
};

handleFibonacci();
