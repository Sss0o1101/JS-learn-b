/*
querySelector・・・HTMLから任意のidがついた要素を取得する
*/

// console.log("準備完了");

// console.log(document.querySelector('#colorPicker').value);
// document.querySelector('#colorText').textContent = 'カラーコード：';

console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;
