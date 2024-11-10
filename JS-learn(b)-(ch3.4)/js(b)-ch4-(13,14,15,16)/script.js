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

/* ---------------------- ------------------------------------------------------------------------------------------*/
