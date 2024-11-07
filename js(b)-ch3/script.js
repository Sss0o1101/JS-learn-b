/*
querySelector・・・HTMLから任意のidがついた要素を取得する
*/

// console.log("準備完了");



/* 3-4 -------------------------------------------------------------*/
// カラーコード : #000000

console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = 'カラーコード：';

/* 3-6 -------------------------------------------------------------*/
console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;

console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = `カラーコード : ${document.querySelector('#colorPicker').value}`;


/* 3-7 -------------------------------------------------------------*/
const names = "sss";
console.log(names);

//-------------------
const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

text.textContent =`カラーコード : ${color.value}`;



/* 3-8 -------------------------------------------------------------*/
//Color.addEventListener(選択されたら,カラーコードを表示する);

const Color = document.querySelector('#colorPicker');
Color.addEventListener('input', colorBg);
