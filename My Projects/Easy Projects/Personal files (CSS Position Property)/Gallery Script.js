var openDialogButton = document.getElementById('openDialogBtn');
var closeDialogButton = document.getElementById('closeDialogBtn');
var myDialog = document.getElementById('myDialog');

openDialogButton.addEventListener('click', function () {
    myDialog.showModal(); // Open the dialog
});

closeDialogButton.addEventListener('click', function () {
    myDialog.close(); // Close the dialog
});

// var openDialogButton = document.getElementById('openDialogBtn1');
// var closeDialogButton = document.getElementById('closeDialogBtn1');
// var myDialog = document.getElementById('myDialog1');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn2');
// var closeDialogButton = document.getElementById('closeDialogBtn2');
// var myDialog = document.getElementById('myDialog2');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn3');
// var closeDialogButton = document.getElementById('closeDialogBtn3');
// var myDialog = document.getElementById('myDialog3');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn4');
// var closeDialogButton = document.getElementById('closeDialogBtn4');
// var myDialog = document.getElementById('myDialog4');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn5');
// var closeDialogButton = document.getElementById('closeDialogBtn5');
// var myDialog = document.getElementById('myDialog5');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn6');
// var closeDialogButton = document.getElementById('closeDialogBtn6');
// var myDialog = document.getElementById('myDialog6');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });

// var openDialogButton = document.getElementById('openDialogBtn7');
// var closeDialogButton = document.getElementById('closeDialogBtn7');
// var myDialog = document.getElementById('myDialog7');

// openDialogButton.addEventListener('click', function () {
//     myDialog.showModal(); // Open the dialog
// });

// closeDialogButton.addEventListener('click', function () {
//     myDialog.close(); // Close the dialog
// });





function handleDivClick(element) {
    // Toggle the 'focus' class on the clicked element
    element.classList.toggle('focus');

    // Remove 'focus' class from other clickable-div elements
    const allClickableDivs = document.querySelectorAll('.clickable-div');
    allClickableDivs.forEach(function (div) {
        if (div !== element) {
            div.classList.remove('focus');
        }
    });
}
var button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Open the website in a new tab
    window.open('https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIMSN&sbisrc=UrlPaste&q=imgurl:https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5207109.jpg&idpbck=1&selectedindex=0&id=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5207109.jpg&ccid=EUQRoC8Z&simid=608046569516792566&ck=2972C393832DF62F2DFCF3CFAAF4D13D&thid=OIP.EUQRoC8ZmLs7vI7N9urOlQHaEK&mediaurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5207109.jpg&exph=1080&expw=1920&vt=2&sim=11', '_blank');
});

var button = document.getElementById('myButton1');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Open the website in a new tab
    window.open('Red Leaves.html', '_self');
});

var button = document.getElementById('myButton2');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Open the website in a new tab
    window.open('Red Leaves.html', '_self');
});

