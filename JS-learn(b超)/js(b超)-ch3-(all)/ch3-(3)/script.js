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
