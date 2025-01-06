/*
二択のデータを扱う際に便利な真偽値について
!で真偽値を反転させよう------------------------------------------------------------------------------------------*/

  // true false
  // let mode = 'dev';
  // let mode = 'normal';
  // let isDevMode = true;
  // let isDevMode = false;

  {

    let isDevMode = true;
    const pElement = document.querySelector('p');
    const btnElement = document.querySelector('button');

    btnElement.addEventListener('click', () => {
      if (isDevMode === true) {
        pElement.textContent = 'Dev Mode is Off.';
        // isDevMode =false;
        // isDevMode = !isDevMode;  //同じ意味
      } else {
        pElement.textContent = 'Dev Mode is On.';
        // isDevMode === true;
        // isDevMode = !isDevMode;  //同じ意味
      }

      isDevMode = !isDevMode        //外に書いても同じ意味
    });

  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* ifの条件分岐では真偽値が期待されているので、真偽値そのものを渡して処理する方法 ------------------------------------------------------------------------------------------*/


  {

    let isDevMode = true;
    const pElement = document.querySelector('p');
    const btnElement = document.querySelector('button');

    btnElement.addEventListener('click', () => {
      if(confirm('Are you sure?') === true) {
        if (isDevMode) {
          pElement.textContent = 'Dev Mode is Off.';
        } else {
          pElement.textContent = 'Dev Mode is On.';
        }
        isDevMode = !isDevMode
      }
    });

  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 関数の処理を途中で抜けることができる早期リターンに真偽値を使う方法を見ていく。 ------------------------------------------------------------------------------------------*/

  let isDevMode = true;
  const pElement = document.querySelector('p');
  const btnElement = document.querySelector('button');

  btnElement.addEventListener('click', () => {
    // if(confirm('Are you sure?') === false) {
    if(!confirm('Are you sure?')) {             //同じ意味
      return;
    }

    if (isDevMode) {
      pElement.textContent = 'Dev Mode is Off.';
    } else {
      pElement.textContent = 'Dev Mode is On.';
    }
    isDevMode = !isDevMode

  });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* ifの条件分岐で値そのものを渡す方法について見ていきます。 ------------------------------------------------------------------------------------------*/

  const userName = prompt('Your name?');

  // if (userName !== '') {
  if (userName) {
    console.log(`Hi, ${userName}`);
  } else {
    console.log(`Hi, nobody!`);
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 定義されていない値であるundefinedの使い方 ------------------------------------------------------------------------------------------*/

  // undefined ・・・定義されていない値という意味

  // let x;
  // console.log(x);            // undefined

  // const scores = [70, 90, 80];
  // console.log(scores[100]);  // undefined

  {
    const score = {math: 80, english: 90};
    // console.log(score.history);
    if (score.history === undefined) {
      console.log('History score not defined!');
    }
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 明示的に「何もないこと」を示すために使われるnull ------------------------------------------------------------------------------------------*/

  // null・・・何もないという意味

  const score = {
    math: 80,
    english: 90,
    physics: null,
  };
  if (score.physics === null) {
    console.log('Physics score is null!');
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
