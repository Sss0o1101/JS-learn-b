/* ------------------------------------------------------------------------------------------*/

    alert("Hello World");

    console.log(100);
    console.log(-10);
    console.log(2.5);

    console.log(1.2e4);  // 1.2に10の4条 = 12000
    console.log(1.2e-4);  // 1.2に10の-4条 = 0.00012

/*
演算子------------------------------------------------------------------------------------------
*/

    console.log(10 + 3); // 13
    console.log(10 - 3); // 7
    console.log(10 * 3); // 30
    console.log(10 ** 3); // 1000
    console.log(10 / 3); // 3.3333....
    console.log(10 % 3); // 1
    console.log(10 + 2 * 3); // 16
    console.log((10 + 2) * 3); // 36

/*
定数-------------------------------------------------------------------------------------------
*/

    {

    console.log(150 * 120 * 1.1);
    console.log(150 * 130 * 1.1);
    console.log(150 * 140 * 1.1);

    // 定数
    const price = 150;
    const rate = 1.1;

    console.log(price * 120 * rate); // 18150
    console.log(price * 130 * rate); // 19500
    console.log(price * 140 * rate); // 21000

    }

/*
変数------------------------------------------------------------------------------------------
*/

    // 変数
    let price;
    // 定数
    const rate = 1.1;

    price = 150;
    console.log(price * 120 * rate); // 18150
    console.log(price * 130 * rate); // 19500
    console.log(price * 140 * rate); // 21000

    price = 151;
    console.log(price * 120 * rate); // 18220
    console.log(price * 130 * rate); // 19630
    console.log(price * 140 * rate); // 21140

    price = 151;
    price = price + 1;
    price += 1;
    price *= 1.5;
    price++;
    console.log(price * 120 * rate); // 18220
    console.log(price * 130 * rate); // 19740
    console.log(price * 140 * rate); // 21250


/*
文字列----------------------------------------------------------------------------------------------------------------------------------------
*/

    console.log('It is a pen.'); // It is a pen.
    console.log('It\'s a pen.'); // It's a pen.
    console.log("It's a pen."); // It's a pen.
    console.log("It's \na \npen.");// It's
                                    // a
                                    // pen.
                                    // \n」は改行 「\」は Optionキーを押しながら「￥」キーを押す。


/*
文字列の操作 テンプレートリテラル -----------------------------------------------------------------------------------------------------------------
*/

    // 「 My name is Taro Yamada, call me Taro! 」 のケース

    const fname = 'Taro';
    const lname = 'Yamada';

    console.log('My name is' + fname  + ' ' + lname + ', call me'  + fname );  //これでも良いが、テンプレートリテラルをつかうべきである。
    console.log(`My name is ${fname} ${lname}, call me ${fname}`);  //テンプレートリテラル (` を付け${})



/*
数値か文字列かを意識----------------------------------------------------------------------------------------------------------------------------------------
*/

    const n = prompt('Any number?');

    console.log(Number(n) + 10); // 100



/*
条件文-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

    const score = Number(prompt('Score?'));

    if (score >= 90) {
        console.log('A!');
    }
    //score が 90 点以上だったら console.log() で A 判定だよという意味でこのように表示。

    if (score >= 90) {
        console.log('A!');
    } else {
        console.log('Not A!');
    }
    //score が 90 点未満だったら、 A 判定じゃなかったという意味で Not A! と表示。


    if (score >= 90) {
        console.log('A!');
    } else if (score >= 70) {
        console.log('B!');
    } else {
        console.log('C!');
    }
    //score が 90 点以上だったら A 判定、90 点未満でなおかつ 70 点以上だったら B 判定。
    //そしてさらに、こちらの条件にも合致しなかった場合は、前回見たように、else で繋げればいいので、こちらでは C 判定。



/*
switchで条件分岐----------------------------------------------------------------------------------------------------------------------------------------
*/

    const color = prompt('Color?');

    switch (color) {
        case 'red':
            console.console.log('stop');
            break;
    }
    //信号機の色を入力してもらって、それに応じたメッセージを出すというプログラム
    //(red)

    const Color = prompt('Color?');

    switch (Color) {
        case 'red':
            console.console.log('stop');
            break;
        case 'yellow':
            console.console.log('Slow down!');
            break;
        case 'blue':
            console.console.log('Go!');
            break;
        default:
            console.log('Wrong color');
            break;
    }
    //red,yellow,blueのケース
    //また、これらのどれにも一致しなかった場合の処理も書くことができて、その場合は default とする。

    const colors = prompt('Color?');

    switch (colors) {
        case 'red':
            console.console.log('stop');
            break;
        case 'yellow':
            console.console.log('Slow down!');
            break;
        case 'blue':
        case 'green':
            console.console.log('Go!');
            break;
        default:
            console.log('Wrong color');
            break;
    }
    //青信号は国によっては緑信号だったりするので、ここで blue もしくは green だったらという条件にしたい場合、
    //case を case 'blue'; case 'green'; のように繋げて 2 行書く


/*
ループ文----------------------------------------------------------------------------------------------------------------------------------------
*/

    for (let i = 0; i < 3; i++) {
        console.log('Hello');
    }

    for (let i = 0; i < 3; i++) {
        console.log(`${i}: Hello`);
    }


/*
forの中でforを使う方法--------------------------------------------------------------------------------------------------------------------------------
*/
    {

    let price;
    const rate = 1.1;

    price = 150;
    console.log(price * 120 * rate);   //18150
    console.log(price * 130 * rate);   //19500
    console.log(price * 140 * rate);   //21000

    price++;
    console.log(price * 120 * rate);   //18220
    console.log(price * 130 * rate);   //19740
    console.log(price * 140 * rate);   //21250
    //150 円 151 円のときだけでなく、160 円までの売り上げを知りたかった時のケース

    let prices;
    const rates = 1.1;

    for (let prices = 150; prices < 160; prices++) {
        console.log(`price: ${price}`);
    }

    prices = 150;
    console.log(prices * 120 * rates);   //18150
    console.log(prices * 130 * rates);   //19500
    console.log(price * 140 * rate);   //21000

    //120 から 140 まで、10 ずつ増やしたいが、10 増やして再代入していくには、以前に見たこちらの記法を使う。

    const Rate = 1.1;

    for (let price = 150; price <= 160; price++) {
    console.log(`Price: ${price}`);
    for (let amount = 120; amount <= 140; amount+=10) {
        console.log(price * amount * rate);
    }
    }

    }


/*
論理演算子 && ||----------------------------------------------------------------------------------------------------------------------------------------
*/

    const english = Number(prompt("English"));
    const math = Number(prompt(math));

    if (english >= 80 && math >= 80) {
        console.log("A");
    } else {
        console.log("B");
    }
    //英語が 80 点以上なおかつ数学が 80 点以上のケース

    const science = Number(prompt('Science?'));
    const history = Number(prompt('history?'));

    if (!(science >= 80 && history >= 80)) {
    console.log('A');
    } else {
    console.log('B');
    }
    //この条件全体を否定して、理科が 80 点以上なおかつ歴史が 80 点以上ではなかったらとしたかったら
    //if (!(science >= 80 && history >= 80)) のように書けば OK.

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


