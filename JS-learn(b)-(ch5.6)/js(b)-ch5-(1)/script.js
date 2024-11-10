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

    const menu = document.querySelector('#menu');

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    //６個の画像の表示
    const content = `<div><img src="./images/${lists[0]}" alt=""></div>
        <div><img src="./images/${lists[1]}" alt=""></div>
        <div><img src="./images/${lists[2]}" alt=""></div>
        <div><img src="./images/${lists[3]}" alt=""></div>
        <div><img src="./images/${lists[4]}" alt=""></div>
        <div><img src="./images/${lists[5]}" alt=""></div>
    `;

    menu.insertAdjacentHTML('beforeend', content);

/* ---------------------------------------------------------------------------------------------------------------------*/
