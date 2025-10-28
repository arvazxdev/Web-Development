async function resolver() {
    return new Promise(resolve => {
        let randomDelay = Math.floor(Math.random() * 10000);
        document.write("Your order is processing...");
        setTimeout(() => {
             resolve("Your order has confirmed!");
        }, randomDelay);
    })
}

async function onClicker() {
    await resolver().then((res) => {
      alert(res);
      location.reload();
    }
    );
};