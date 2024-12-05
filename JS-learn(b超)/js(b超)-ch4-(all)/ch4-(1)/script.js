/* 4-1 (入力内容の取得とイベント)  ------------------------------------------------------------------------------------------*/
    //.onsubmit = function () {};

    // document.querySelector('#form').onsubmit = function () {
    //     console.log('クリックされました');
    // };

    // //別の書き方
    // const submit = document.querySelector('#form');
    // submit.addEventListener('submit', () => {
    //     event.preventDefault(); // フォームのデフォルトの送信を防ぐ
    //     console.log('クリックされました');
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
/* 4-1 (2)  -------------------------------------------------------------------------------------------------------------------------------------*/
    //event.preventDefault();

    document.querySelector('#form').onsubmit = function (event) {
        event.preventDefault();  //action属性で指定されたページに移動を
        const search = document.querySelector('#form').word.value;
        document.querySelector('#output').textContent = `「${search}の検索中...`;
    };

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
