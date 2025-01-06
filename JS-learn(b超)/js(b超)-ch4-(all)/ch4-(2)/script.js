/* 4-1 (入力内容の取得とイベント)  ------------------------------------------------------------------------------------------*/
    //.onsubmit = function () {};

    // document.querySelector('#form').onsubmit = function () {
    //     console.log('クリックされました');
    // };

    // //別の書き方
    // const submit = document.querySelector('#form');
    // submit.addEventListener('submit', (event) => {
    //     event.preventDefault(); // フォームのデフォルトの送信を防ぐ
    //     console.log('クリックされました');
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
/* 4-1 (2)  -------------------------------------------------------------------------------------------------------------------------------------*/
    // //event.preventDefault();

    // document.querySelector('#form').onsubmit = function (event) {
    //     event.preventDefault();  //action属性で指定されたページに移動を
    //     const search = document.querySelector('#form').word.value;
    //     document.querySelector('#output').textContent = `「${search}の検索中...`;
    // };

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* 4-2 (Dateオブジェクト)  -------------------------------------------------------------------------------------------------------------------------------------*/

    const time = document.querySelector('#time');

    const now = new Date();  //初期化
    const year = now.getFullYear();
    const month = now.getMonth();  //「実際の月-1」の数字が取得される
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();

    let ampm = '';
    if (hour < 12) {
        ampm = 'a.m.';
    } else {
        ampm = 'p.m.';
    }

    const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${ampm}`;

    time.textContent = output;

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
