/* 5-1 作成する画像一覧ページの紹介 ------------------------------------------------------------------------------------------*/

    const menu = document.querySelector('#menu');
    const content = `<div><img src="./images/strawberry.jpg" alt=""></div>`;

    // menu.textContent = content;   //これだと文字列として表示される

    menu.insertAdjacentHTML('beforeend', content)   //これならstrawberry.jpgの画像が表示される
