/* 4-7 入力した文字数を数えてみよう () -------------------------------------------------------------*/

    const text = document.querySelector('#text');
    const count = document.querySelector('#count');

    text.addEventListener('keyup', () => {
        //キー入力された時の処理
        count.textContent = text.value.length;
    });

/* 4-8 lengthでカウント  -----------------------------------------------------------------------*/


/* 4-9 文字によって表示を変える() ----------------------------------------------------------------*/

    // // css .alert 使用

    const text = document.querySelector('#text');
    const count = document.querySelector('#count');

    text.addEventListener('keyup', () => {
        count.textContent = text.value.length;

        if (text.value.length > 5 ) {
            count.classList.add('alert');
        } else {
            count.classList.remove('alert');
        }
    });


/* 4-9 if else ------------------------------------------------------------------------------*/

