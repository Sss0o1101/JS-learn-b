/* 文字列を受け取って処理してみよう  ------------------------------------------------------------------------------------------*/

    const string = prompt('Any message?');

    //Helloの場合
    console.log(string);        //Hello
    console.log(string.length); //5
    console.log(string[0]);     //H  //この配列は読み取り専用

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 文字列をすべて小文字や大文字にしたり、前後の空白を除去するための方法  ------------------------------------------------------------------------------------------*/

    //.toLowerCase()・・・大文字を小文字に変換
    //.toUpperCase()・・・小文字を大文字に変換
    //.trim()・・・空白の除去

    const string = prompt('Name?');
    // if (string.toLowerCase() === 'taro')
    if (string.toUpperCase() === 'TARO') {
        console.log('Correct!');
    } else {
        console.log('Wrong!');
    }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 文字列の配列を処理しながら、includes()、indexOf()、startsWith()の使い方 ------------------------------------------------------------------------------------------*/

    //.includes()・・・特定の要素が配列や文字列に含まれているかどうか確認
    //.indexOf()・・・文字列を先頭から検索する   //.lastindexOf()・・・文字列を最後から検索する
    //.startsWith()・・・文字列の先頭を調べる   //.endsWith()・・・文字列の末尾を調べる

    const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
    ];

    emails.forEach((email) => {
    // if (email.includes('taro') === true) {  //trueは付けなくても良い
    //   console.log(email);
    // }
    // if (email.indexOf('taro') === 0) {
    //   console.log(email);
    // }
    if (email.startsWith('taro') === true) {
      console.log(email);
    }
  });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 文字列から一部を切り出すための方法 indexOf()との組合せ ------------------------------------------------------------------------------------------*/

  //slice()・・・文字列から一部を切り出す
  //substring()・・・同じ

  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
    const loc = email.indexOf('@');
    // console.log(email.slice(0, loc));
    console.log(email.substring(0, loc));
  });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 文字列の一部を置換したり、区切り文字で分割する方法  ------------------------------------------------------------------------------------------*/

  //replace()・・・  //replaceAll()
  //split()・・・
