function t() {
    let tokenNumber = localStorage.getItem("tokenNumber");
    if (tokenNumber) {
        alert("You have already bought a token!")
        document.querySelector(".token-number").textContent = "Your token number is " + tokenNumber;
        document.querySelector(".alert").textContent = "It will expire in 10 s";
    } else {
        tokenNumber = Math.random().toString(36).substr(2);
        localStorage.setItem("tokenNumber", tokenNumber)
        document.querySelector(".token-number").textContent = "Your token number is " + tokenNumber;
        document.querySelector(".alert").textContent = "It will expire in 10 s";
    }
}

window.onload = (() => {
    let tokenNumber = localStorage.getItem("tokenNumber")
    document.querySelector(".token-number").textContent = "Your token number is " + tokenNumber;
    document.querySelector(".alert").textContent = "It will expire in 10 s";
}
)

let timeNow = localStorage.getItem("timeNow");

if (timeNow) {

} else {
    timeNow = Date.now();
    localStorage.setItem("timeNow", timeNow);
}