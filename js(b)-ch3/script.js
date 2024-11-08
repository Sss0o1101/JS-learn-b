/*
querySelector・・・HTMLから任意のidがついた要素を取得する
*/

// console.log("準備完了");



/* 3-4 -------------------------------------------------------------*/
// カラーコード : #000000

    console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = 'カラーコード：';

/* 3-6 -------------------------------------------------------------*/
    console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;

    console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = `カラーコード : ${document.querySelector('#colorPicker').value}`;


/* 3-7 定数 -------------------------------------------------------------*/
    // const names = "sss";
    // console.log(names);

    // //-------------------
    // const text = document.querySelector("#colorText");
    // const color = document.querySelector("#colorPicker");

    // text.textContent =`カラーコード : ${color.value}`;


/* 3-8 addEventListener -------------------------------------------------------------*/

    //何が.addEventListener（どうなったら,どうなる）;
    //color.addEventListener(選択されたら,カラーコードを表示する);

    // const Color = document.querySelector('#colorPicker');
    // color.addEventListener('input', colorBg);


/* 3-9 関数 -------------------------------------------------------------*/
    // const text = document.querySelector("#colorText");
    // const colors = document.querySelector("#colorPicker");

    // const colorBg = () => {
    //     text.textContent =`カラーコード${colors.value}`;
    // };

    // //カラーピッカーが変更されたら colorBg を発動させる
    // colors.addEventListener('input', colorBg);       // 3-7,3-8をコメント化


/* 3-10 カラーピッカーが選んだ色を背景に反映させる -------------------------------------------------------------*/

    const text = document.querySelector('#colorText');
    const color = document.querySelector('#colorPicker')

    //カラーピッカーを操作した時の一連の動作
    const colorBg = () => {
        //選択した色を背景色に指定
        document.body.style.backgroundColor = color.value
        //カラーコードを表示
        text.textContent = `カラーコード : ${color.valuue}`;
    };

    //カラーピッカーが変更されたら colorBg を発動させる
    color.addEventListener("input" , colorBg);
