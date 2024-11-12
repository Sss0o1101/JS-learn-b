/* 6-4 見出しをしたから浮き上がらせよう (Web Animation API) ------------------------------------------------------------------------------------------*/

    //  (Web Animation API)の書き方
    //  動かす要素.animate(動かす内容, 再生時間)；  動かす内容 = キーフレーム

    // const heading = document.querySelector('#heading');
    // heading.animate(keyframes, 2000);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-5 アニメーションの基本の書き方 ------------------------------------------------------------------------------------------*/

    // const heading = document.querySelector('#heading');
    // const keyframes = {opacity: [0,1],};

    // heading.animate(keyframes, 2000);  //2秒かけて文字が表示

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-6 複数のアニメーションを加えよう ------------------------------------------------------------------------------------------*/

    // const heading = document.querySelector('#heading');

    // const keyframes = {
    //     opacity: [0,1],
    //     translate: ['0 50px', 0]
    // };

    // heading.animate(keyframes, 2000);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-7 動きの詳細を加えよう ------------------------------------------------------------------------------------------*/

    // //  動かす要素.animate(動かす内容, 動きの詳細)；  動きの詳細 = options
    // //  delay...遅延,  direction...方向,  duration(必須)...存続期間,
    // //  easing...緩和,  fill...再生前後の状態  iterations...反復,

    // const heading = document.querySelector('#heading');

    // const keyframes = {
    //     opacity: [0,1],
    //     translate: ['0 50px', 0],   //下から上に浮き上がるような視覚効果
    // };
    // const options = {
    //     duration: 2000,
    //     easing: 'ease',
    // };

    // heading.animate(keyframes, options);
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-8(1) 色々な見出しのアニメーション 回転 ------------------------------------------------------------------------------------------*/

    // const heading = document.querySelector('#heading');

    // const keyframes = {
    //     opacity: [0, 1],
    //     rotate: ['x 360deg', 0],   //回転
    // };
    // const options = {
    //     duration: 1000,
    //     easing: 'ease',
    // }

    // heading.animate(keyframes, options);

/* 6-8(2) 色が変化する見出しを作る -------------------------------------------*/

    // const heading = document.querySelector('#heading');

    // const keyframes = {
    //     color: ['#f66', '#fc2', '#0c6', '#0bd'],   //文字色を4色用意
    // };
    // const options = {
    //     duration: 8000,
    //     direction: 'alternate',   //終了地点に来たら開始地点に戻す
    //     iterations: Infinity,      //ずっと繰り返す
    // };

    // heading.animate(keyframes, options);

/* 6-8(3) 背景が伸びる見出しを作る -------------------------------------------*/

    // const heading = document.querySelector('#heading');

    // const keyframes = {
    //     color: ['transparent', '#fff'],          //文字を透明から白に
    //     backgroundPosition: ['100% 0', '0 0'],   //背景の位置を動かして四角形が伸びた様に見える
    //  };
    // const options = {
    //     duration: 1000,
    //     easing: 'ease'
    // };

    // heading.animate(keyframes, options);

/* 6-8(4) ぷよぷよ動く見出しを作る ------------------------------------------------------------------------------------------*/

    const heading = document.querySelector('#heading');

    const keyframes = {
        borderRadius: [
            '20% 50% 50% 70%/50% 50% 70% 50%',
            '50% 20% 50% 50%/40% 40% 60% 60%',   //楕円の半径の大きさを少しずつ変更
            '50% 40% 20% 40%/40% 50% 50% 80%',
            '50% 50% 50% 20%/40% 40% 60% 60%',
        ],
     };
    const options = {
        duration: 8000,
        direction: 'alternate',
        iterations: Infinity,
    };

    heading.animate(keyframes, options);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
