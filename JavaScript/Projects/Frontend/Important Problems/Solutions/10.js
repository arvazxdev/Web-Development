async function coffeeMachine(type) {
    return new Promise(resolve => {
        let randomDelay = Math.floor(Math.random() * 10000);
        setTimeout(() => {
            resolve("Your " + type + " Coffee is ready. Enjoy!");
        }, randomDelay);
    });
}

(async () => {
    let type = "Cold";
    console.log(type + " Coffee is preparing. Wait a while...");
    await coffeeMachine(type).then(res => {
        console.log(res);
    }
    )
})();