/* 5-1 作成する画像一覧ページの紹介 (insertAdjacentHTML) ------------------------------------------------------------------------------------------*/
    //insertAdjacentHTMLの説明

    // const menu = document.querySelector('#menu');
    // const content = `<div><img src="./images/strawberry.jpg" alt=""></div>`;

    // // menu.textContent = content;   //これだと文字列として表示される
    // menu.insertAdjacentHTML('beforeend', content);   //これならstrawberry.jpgの画像が表示される

/* 5-2-----------------------------------------------------------------------------------------------------------------*/

/* 5-3 配列で複数の画像ファイル名をまとめよう (配列) ---------------------------------------------------------------------------------*/

    // const menu = document.querySelector('#menu');
    // const lists = [
    //     'strawberry.jpg',
    //     'lime.jpg',
    //     'mango.jpg',
    //     'lemon.jpg',
    //     'fig.jpg',
    //     'apple.jpg',
    // ];

    // console.log(lists);


    // const content = `<div><img src="./images/strawberry.jpg" alt=""></div>`;
    // menu.insertAdjacentHTML('beforeend', content);

/* ---------------------------------------------------------------------------------------------------------------------*/

/* 5-4 配列の中にある画像を表示しよう (配列) ---------------------------------------------------------------------------------------------------------------*/

    // const menu = document.querySelector('#menu');

    // const lists = [
    //     'strawberry.jpg',
    //     'lime.jpg',
    //     'mango.jpg',
    //     'lemon.jpg',
    //     'fig.jpg',
    //     'apple.jpg',
    // ];

    // //６個の画像の表示
    // const content = `<div><img src="./images/${lists[0]}" alt=""></div>
    //     <div><img src="./images/${lists[1]}" alt=""></div>
    //     <div><img src="./images/${lists[2]}" alt=""></div>
    //     <div><img src="./images/${lists[3]}" alt=""></div>
    //     <div><img src="./images/${lists[4]}" alt=""></div>
    //     <div><img src="./images/${lists[5]}" alt=""></div>
    // `;

    // menu.insertAdjacentHTML('beforeend', content);

/* ---------------------------------------------------------------------------------------------------------------------*/

/* 5-5 for文の繰り返し処理を理解しよう (for文) ---------------------------------------------------------------------------------------------------------------*/

    // for (let i = 1; i <=10; i++) {
    //     console.log(`${i}回目のこんにちは！`);

    // }

    // //1回目のこんにちは！
    // //2回目のこんにちは！
    // //3回目のこんにちは！
    // //...........(省略)

/* ----------------------------------------------------------------------------------------------------------------------*/

/* 5-6 for文で画像を一覧表示しよう (for文) ---------------------------------------------------------------------------------------------------------------*/

    // const menu = document.querySelector('#menu');

    // const lists = [
    //     'strawberry.jpg',
    //     'lime.jpg',
    //     'mango.jpg',
    //     'lemon.jpg',
    //     'fig.jpg',
    //     'apple.jpg',
    // ];

    // for (let i = 0; i < 6; i++) {
    //     const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
    //     menu.insertAdjacentHTML('beforeend', content);
    // }

    // // 5-4 と同じ処理

/* 5-6 lengthを使う場合(省略) ------------------------------------------------------*/

    // const menu = document.querySelector('#menu');

    // const lists = [
    //     'strawberry.jpg',
    //     'lime.jpg',
    //     'mango.jpg',
    //     'lemon.jpg',
    //     'fig.jpg',
    //     'apple.jpg',
    // ];

    // // console.log(lists.length);

    // for (let i = 0; i < lists.length; i++) {
    //     const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
    //     menu.insertAdjacentHTML('beforeend', content);
    // }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5-7 変数letと定数constの違いとは？ ---------------------------------------------------------------------------------------------------------------*/

    // //変数
    // let letName = "クラウド"
    // letName = "ザックス"
    // console.log(letName);  //再代入が出来る

/*  -----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5-8 オブジェクトで画像、メニュー名、値段をまとめよう ---------------------------------------------------------------------------------------------------------------*/

    // const menu = document.querySelector('#menu');

    // const strawberry = {
    //     name: "イチゴ",
    //     img: "strawberry.jpg",
    //     price: 450,
    // };
    // console.log(strawberry); //{name: 'イチゴ', img: 'strawberry.jpg', price: 450}


    // const lists = [
    //     'strawberry.jpg',
    //     'lime.jpg',
    //     'mango.jpg',
    //     'lemon.jpg',
    //     'fig.jpg',
    //     'apple.jpg',
    // ];


    // for (let i = 0; i < lists.length; i++) {
    //     const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
    //     menu.insertAdjacentHTML('beforeend', content);
    // }

    // //ここで作成された「strawberry」オブジェクトには、3つのデータがまとめられている

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5-9 オブジェクトの情報を取得しよう ---------------------------------------------------------------------------------------------------------------*/
    //ドット記法        .name
    //ブランケット記法   ['name']

    const menu = document.querySelector('#menu');

    const strawberry = {
        name: "イチゴ",
        img: "strawberry.jpg",
        price: 450,
    };
    console.log(strawberry); //{name: 'イチゴ', img: 'strawberry.jpg', price: 450}

    console.log(strawberry.name);  //イチゴ
    console.log(strawberry['img']);   //strawberry.jpg
    console.log(strawberry.price); //450


    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];


    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }
