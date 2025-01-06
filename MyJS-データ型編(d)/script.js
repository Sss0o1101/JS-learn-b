/*
二択のデータを扱う際に便利な真偽値について
!で真偽値を反転させよう------------------------------------------------------------------------------------------*/

  // true false
  // let mode = 'dev';
  // let mode = 'normal';
  // let isDevMode = true;
  // let isDevMode = false;

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

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
