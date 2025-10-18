function getData(data) {
    let rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand < 0.5) {
                console.log("Data", data, "matches");
                resolve("Success");
            } else {
                reject("Unable to match data " + data);
            }

        }, 2000);
    });

}

(async function () {
    console.log("Data", 1, "is checking");
    await getData(1);
    console.log("Data", 2, "is checking");
    await getData(2);
    console.log("Data", 3, "is checking");
    await getData(3).then((res) => {
        console.log(res);
    }
    );
})().catch((err) => {
    console.log(err);
}
);