/* 4-4 ボタンをクリックしてダークモード () -------------------------------------------------------------*/
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    //クリックされた時の処理
    document.body.classList.toggle('dark-theme')
});
