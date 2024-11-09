/* 4-10 チェックでボタンを有効化 ------------------------------------------------------------------------------------------*/

    //<input id="btn" disabled> disabledの有無 (classではない)

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


/* 4-11 別の書き方(省略) ------------------------------------------------------------------------------------------*/

    const isAgreed = document.querySelector('#check');
    const btn = document.querySelector('#btn');

    isAgreed.addEventListener('change', () => {
        if (isAgreed.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });

/* 4-11 別の書き方(省略) ! ------------------------------------------------------------------------------------------*/

    // isAgreedがtrueだから !はfalseになる

    const isAgreed = document.querySelector('#check');
    const btn = document.querySelector('#btn');

    isAgreed.addEventListener('change', () => {
        btn.disabled = !isAgreed.checked;
    });

/* ----------------------------------------------------------------------------------------------------------------*/
