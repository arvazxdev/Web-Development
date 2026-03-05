const fs = require('fs');

// This can be also taken from input from user.
let f1 = 'name.jpg';
let f2 = 'name.png';
let f3 = 'this.pdf';
let f4 = 'arvaz.zip';
let f5 = 'coder.zip';
let f6 = 'cat.jpg';
let f7 = 'hacker.pdf';

let e1 = f1.slice(f1.indexOf('.') + 1, f1.length);
let e2 = f2.slice(f2.indexOf('.') + 1, f2.length);
let e3 = f3.slice(f3.indexOf('.') + 1, f3.length);
let e4 = f4.slice(f4.indexOf('.') + 1, f4.length);
let e5 = f5.slice(f5.indexOf('.') + 1, f5.length);
let e6 = f6.slice(f6.indexOf('.') + 1, f6.length);
let e7 = f7.slice(f7.indexOf('.') + 1, f7.length);

try {
    fs.mkdirSync(e1);
    fs.mkdirSync(e2);
    fs.mkdirSync(e3);
    fs.mkdirSync(e4);
    fs.mkdirSync(e5);
    fs.mkdirSync(e6);
    fs.mkdirSync(e7);
} catch (e) { }

function fileMaker(fn, en) {
    fs.writeFileSync(`${en}/${fn}`, `This ${en} file/folder has created.`)
}

fileMaker(f1, e1);
fileMaker(f2, e2);
fileMaker(f3, e3);
fileMaker(f4, e4);
fileMaker(f5, e5);
fileMaker(f6, e6);
fileMaker(f7, e7);