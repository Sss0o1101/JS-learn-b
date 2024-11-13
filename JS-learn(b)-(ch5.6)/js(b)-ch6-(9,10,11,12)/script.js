/* 6-9 複数の画像を順番に表示しよう  ------------------------------------------------------------------------------------------*/

    const items = document.querySelector('.img-item');

    const keyframes = {
        opacity: [0, 1]     //透明から不透明
    };
    const options = {
        duration: 600,
        fill: 'forwards',   //再生後、不透明を維持
    };

    items.animate(keyframes, options);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-10 全てのクラスを取得しよう or 全ての写真の表示 ------------------------------------------------------------------------------------------*/

    const items = document.querySelectorAll('.img-item');

    for (let i = 0; i < items.length; i++) {
        const keyframes = {
            opacity: [0, 1]
        };
        const options = {
            duration: 600,
            fill: 'forwards',
        };

        items[i].animate(keyframes, options);
    }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-11 1つずつ遅延させよう ------------------------------------------------------------------------------------------*/

    const items = document.querySelectorAll('.img-item');

    for (let i = 0; i < items.length; i++) {
        const keyframes = {
            opacity: [0, 1]
        };
        const options = {
            duration: 600,
            delay: i * 800,   //遅延
            fill: 'forwards',
        };

        items[i].animate(keyframes, options);
    }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6-12(1) 色々な画像のアニメーション | 回転、浮かび上がる (rotate:, translate:) ------------------------------------------------------------------------------------------*/

    const items = document.querySelectorAll('.img-item');

    for (let i = 0; i < items.length; i++) {
        const keyframes = {
            opacity: [0, 1],
            // rotate: ['x 90deg', 0],   //回転
            // translate: ['0 50px', 0], //浮かび上がる
        };
        const options = {
            duration: 600,
            delay: i * 800,   //遅延
            fill: 'forwards',
        };

        items[i].animate(keyframes, options);
    }

/* 6-12 (2) | ふわふわと回転しながら落ちてくる (rotate:, scale:)------------------------------------------------------------------------------------------*/

    const items = document.querySelectorAll('.img-item');

    for (let i = 0; i < items.length; i++) {
        const keyframes = {
            opacity: [0, 1],
            rotate: ['5deg', 0],   //回転
            scale: [1.1, 1]        //拡大の指定
        };
        const options = {
            duration: 600,
            delay: i * 800,   //遅延
            fill: 'forwards',
        };

        items[i].animate(keyframes, options);
    }

/* 6-12 (3) | ぼかしが無くなりくっきり表示  (:, :)------------------------------------------------------------------------------------------*/

    const items = document.querySelectorAll('.img-item');

    for (let i = 0; i < items.length; i++) {
        const keyframes = {
            filter: ['blur(20px)', 'blur(0)'],
        };
        const options = {
            duration: 600,
            delay: i * 800,   //遅延
            fill: 'forwards',
        };

        items[i].animate(keyframes, options);
    }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
