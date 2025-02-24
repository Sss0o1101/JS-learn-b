/* 4-2 ローディング中画面 (クラスの追加・削除) -------------------------------------------------------------*/
    //  要素.classList.add('クラス名')；

    const loading = document.querySelector('#loading');

    window.addEventListener('load', () => {
        //ローディングが終わった時の処理
        loading.classList.add('loaded');
    });


    // メモ -------------------------------------------------------
    要素.classList.add('クラス1', 'クラス2')      //クラスの追加
    要素.classList.remove('クラス1', 'クラス2')   //クラスの削除

/* 4-3 --------------------------------------------------------------------------------------------------*/


//------------------------------------------------------------------------


/* 4-4 ボタンをクリックしてダークモード () -------------------------------------------------------------*/
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        //クリックされた時の処理
        document.body.classList.toggle('dark-theme');
    });


    /* メモ
    add だとクリックされた1回のみ。
    toggleだとbodyの要素を取得する為、追加と削除を交互に行う
    */


/* 4-5  ------------------------------------------------------------------------------------------*/
/* 4-6 if,else | ボタンのテキストを変更 ------------------------------------------------------------------------------------------*/

    const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (btn.textContent === "ダークモードにする") {
            btn.textContent = "ライトモードにする";
        } else {
            btn.textContent = "ダークモードにする";
        }
    });

/* 4-6 btnの「ダークモード」「ライトモード」の表記の交互------------------------------------------------------------------------------------------*/


//------------------------------------------------------------------------


/* 4-7 入力した文字数を数えてみよう (length) -------------------------------------------------------------*/

    const text = document.querySelector('#text');
    const count = document.querySelector('#count');

    text.addEventListener('keyup', () => {
        //キー入力された時の処理
        count.textContent = text.value.length;
    });

/* 4-8 lengthでカウント  -----------------------------------------------------------------------*/
/* 4-9 文字によって表示を変える() ----------------------------------------------------------------*/

    // // css .alert 使用

    const text = document.querySelector('#text');
    const count = document.querySelector('#count');

    text.addEventListener('keyup', () => {
        count.textContent = text.value.length;

        if (text.value.length > 5 ) {
            count.classList.add('alert');
        } else {
            count.classList.remove('alert');
        }
    });


/* 4-9 if else ------------------------------------------------------------------------------*/


//------------------------------------------------------------------------


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


//------------------------------------------------------------------------


/* 4-13.14 ページのスクロール量を表示しよう ------------------------------------------------------------------------------------------*/

    // scrollY は縦方向のスクロール量
    // scrollX は横方向のスクロール量

    const getScrollPercent = () => {
        //スクロール量
        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);
    };

    window.addEventListener('scroll', getScrollPercent );


/* 4-15 ページのサイズを取得しよう ------------------------------------------------------------------------------------------*/

    // scrollHeight はページの高さ
    // scrollWidth はページの幅
    // clienHeight は表示域の高さ
    // clienWidth は表示域の幅

    // const pageHeight = document.documentElement.scrollHeight;  //ページの高さ
    // const viewHeight = document.documentElement.clientHeight;  //スクロールバーを含まない部分の高さ

    const getScrollPercent = () => {

        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);

        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        console.log(`ページの高さ:${pageHeight}、表示領域の高さ${viewHeight}`);
    };

    window.addEventListener('scroll', getScrollPercent );


/* 4-16 計算式を書いてみよう ------------------------------------------------------------------------------------------*/

    // スクロールされた割合
    // const percentage = スクロール量 ÷ (ページ全体の高さ - 表示領域の高さ) × 100
    // console.log(percentage);

    const getScrollPercent = () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
    };

    window.addEventListener('scroll', getScrollPercent );


/* 4-16 無名関数で書いたもの ------------------------------------------------------------------------------------------*/

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
    });

/* -----------------------------------------------------------------------------------------------------------------*/
