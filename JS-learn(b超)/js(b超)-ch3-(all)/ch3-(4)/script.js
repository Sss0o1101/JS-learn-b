/* 3-2 (変数, 定数)  ------------------------------------------------------------------------------------------*/

    // let answer = window.prompt('ヘルプを見ますか？');
    // console.log(answer);

    // const answers = window.prompt('ヘルプを見ますか？');
    // if (answers === 'yes') {
    //     window.alert('タップでジャンプ、障害物を避けます。')
    // }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 3-3 (else, if)  ------------------------------------------------------------------------------------------*/

    const answers = window.prompt('ヘルプを見ますか？');
        if (answers === 'yes') {
            window.alert('タップでジャンプ、障害物を避けます。')
        } else if (answers === 'no') {
            window.alert('ゲーム起動中')
        } else {
            window.alert('yesかnoでお答えください')
        }


/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* 3-4 (数当てゲーム)  -------------------------------------------------------------------------------------------------------------------------------*/

    //Math.floor・・・切り捨て   //parseInt(変換したい文字列)   //let 変数名;・・・先に変数の定義 (if文などで代入されるデータが変わる場合)

    const number = Math.floor(Math.random() * 6);
    const answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね'));

    let message;
    if (answer === number) {
        message = 'あたり！';
    } else if (answer < number) {
        message = '残念でした！もっと大きい';
    } else if (answer > number) {
        message = '残念でした！もっと小さい';
    } else {
        message = '0~5の数字を入力してね';
    }
    window.alert(message);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
