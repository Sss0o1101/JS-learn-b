/*  addEventListener() ------------------------------------------------------------------------------------------*/

    // const button = document.querySelector('button');

    // button.addEventListener('click', () => {
    //     console.log('Clicked');
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* .textContent ------------------------------------------------------------------------------------------*/

    // const button = document.querySelector('button');
    // const p = document.querySelector('p');

    // button.addEventListener('click', () => {
    //     // console.log('Clicked');
    //     // p.textContent = 'こんにちは';
    //     p.textContent = button.textContent  //Ok
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* .classList ------------------------------------------------------------------------------------------*/

    // const button = document.querySelector('button');
    // const p = document.querySelector('p');

    // button.addEventListener('click', () => {
    //     p.classList.add('pink-bg', 'red-border');
    //     p.classList.remove('green-color');
    // });


/* .classList (2) ------------------------------------------------------------------------------------------*/
    // // console.log(p.classList.contains('pink-bg'));  //true false

    // const button = document.querySelector('button');
    // const p = document.querySelector('p');

    // button.addEventListener('click', () => {
    //     // console.log(p.classList.contains('pink-bg'));  // false
    //     // if (p.classList.contains('pink-bg') === false) {
    //     //     p.classList.add('pink-bg');
    //     // } else {
    //     //     p.classList.remove('pink-bg');
    //     // }
    //     p.classList.toggle('pink-bg');
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  .querySelectorAll() ------------------------------------------------------------------------------------------*/
    //querySelectorAllは配列である。

    // const button = document.querySelector('button');

    // button.addEventListener('click', () => {
    //     // document.querySelectorAll('li')[0].textContent = 'Changed!'
    //     document.querySelectorAll('li').forEach( (li) => {
    //         li.textContent = 'Changed!'
    //     });
    // });


/*  querySelectorAll() (2) ------------------------------------------------------------------------------------------*/

    // const button = document.querySelector('button');

    // button.addEventListener('click', () => {
    //     document.querySelector('#second').textContent = 'Changed!!!!!'
    //     // document.querySelectorAll('li')[1].textContent = 'Changed!!!!!'
    //     document.querySelectorAll('.target').forEach( (li) => {
    //         li.textContent = 'Changed!!!'
    //     });
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  document.createElement() / appendChild() / insertBefore() ------------------------------------------------------------------------------------------*/

    // //document.createElement('');
    // //insertBefore()  //親Node.insertBefore(追加Node, 参照Node)
    // //親Node.appendChild(追加Node)

    // const button = document.querySelector('button');

    // button.addEventListener('click', () => {
    //     const liElement = document.createElement('li');
    //     liElement.textContent = 'Hanako'

    //     // document.querySelector('ul').appendChild(liElement);  //ulの一番下の子要素に'Hanako'を追加
    //     // document.querySelector('ul').insertBefore(liElement, document.querySelector('#second'));  ////ulのJiroの上に'Hanako'を追加

    //     if (confirm('Sure?') === true) {
    //         document.querySelector('#second').remove()
    //     }
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* フォーム部品の値にアクセス ------------------------------------------------------------------------------------------*/

    // const button = document.querySelector('button');

    // button.addEventListener('click', () => {
    //     alert(document.querySelector('input').value);
    //     alert(document.querySelector('textarea').value);
    //     // document.querySelector('textarea').value = '';
    // });

    // // //Noコード
    // // const noButton = document.querySelector('#no');
    // // noButton.addEventListener('click', () => {
    // //     document.querySelector('input').value = ''
    // //     document.querySelector('textarea').value = '';
    // // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  ドロップダウンリストの設置 ------------------------------------------------------------------------------------------*/

    // const btn = document.querySelector('#btn');
    // const color = document.querySelector('select');

    // btn.addEventListener('click', () => {
    //     alert(color.value)
    //     // document.body.style.backgroundColor = color.value;
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  ラジオボタンの設置 ------------------------------------------------------------------------------------------*/

    // const btn = document.querySelector('#btn');
    // const input = document.querySelectorAll('input');

    // btn.addEventListener('click', () => {
    //     input.forEach( (radio) => {
    //         if (radio.checked === true) {
    //             alert(radio.value);
    //         }
    //     });
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  チェックボックスの値にアクセス  ------------------------------------------------------------------------------------------*/

    // const btn = document.querySelector('#btn');
    // const input = document.querySelectorAll('input');

    // btn.addEventListener('click', () => {
    //     const colors = [];
    //     input.forEach( (checkbox) => {
    //         if (checkbox.checked === true) {
    //             colors.push(checkbox.value);
    //         }
    //     });
    //     alert(colors.join(','))
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  inputイベントを使ってみよう  ------------------------------------------------------------------------------------------*/

    // input → text, textarea, select
    // change → radio, checkbox

    // const inputElement = document.querySelector('input');
    // const pElement = document.querySelector('p');

    // inputElement.addEventListener('input', () => {
    //     // pElement.textContent = inputElement.value;
    //     pElement.textContent = inputElement.value.length;
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  focus,blurイベントを使ってみよう  ------------------------------------------------------------------------------------------*/

    // const inputElement = document.querySelector('input');
    // const pElement = document.querySelector('p');

    // inputElement.addEventListener('focus', () => {
    //     pElement.textContent = 'English only!'
    // });
    // inputElement.addEventListener('blur', () => {
    //     pElement.textContent = ''
    // });
    // // inputElement.focus();  //常にフォーカスが当たる

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  keydownイベントを使ってみよう  ------------------------------------------------------------------------------------------*/

    // const pElement = document.querySelector('p');

    // document.addEventListener('keydown', (event) => {
    //     pElement.textContent = event.key;
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  mousemoveイベントを使ってみよう  ------------------------------------------------------------------------------------------*/

    // const formElement = document.querySelector('form');
    // const inputElement = document.querySelector('input');
    // const pElement = document.querySelector('p');

    // formElement.addEventListener('submit', (event) => {
    //     event.preventDefault;
    //     pElement.textContent = inputElement.value;
    // });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  属性の操作方法  -------------------------------------------------------------------------------------------------------------------------------*/

    // none

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  style属性を操作する -------------------------------------------------------------------------------------------------------------------------------*/

    const btnElement = document.querySelector('button');
    const pElement = document.querySelector('p');

    btnElement.addEventListener('click', () => {
        pElement.style.fontSize = '24px';
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
