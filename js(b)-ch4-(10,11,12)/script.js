/* 4-10 チェックでボタンを有効化 ------------------------------------------------------------------------------------------*/
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
    //チェックボックスにチェックが入っているなら
    if (isAgreed.checked === true) {
        btn.disabled = false;  //ボタンの無効化を無しにする
    } else {
        btn.disabled = true;   //ボタンを無効化にする
    }
});

//console.log("チェックされました");  メモ
// console.log(isAgreed.checked);  メモ
