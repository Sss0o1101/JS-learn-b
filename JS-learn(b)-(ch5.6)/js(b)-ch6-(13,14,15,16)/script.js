/* 6-13.14 (IntersectionObserver)の仕組み  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = () => {
        console.log("キリンさんです");
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);   //関数名を設定、動作内容を指示する

    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-15 交差状態の情報を見てみよう  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = (entries) => {
        console.log(entries[0].target);   //[IntersectionObserverEntry]という配列が取得できた。
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);   //関数名を設定、動作内容を指示する

    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));


    // IntersectionObserver オブジェクトプロパティ
    //boundingClientRect  //intersectionRect  //intersectionRatio
    //isIntersecting  //rootBounds  //target  //time

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-16 動きを加えてみよう  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = (entries) => {
        const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0', 0],
        };

        console.log(entries[0].target.animate(keyframes, 600));
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);

    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
