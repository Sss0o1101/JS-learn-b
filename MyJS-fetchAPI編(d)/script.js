
/* fetch()の仕組みとPromiseについて ------------------------------------------------------------------------------------------*/

  // fetch(url)
  //fetch() に対して URL を渡せば、この URL に書かれたデータを取得してくれる。
  //fetch() 自体が非同期処理であり、これが実行された時点でバックグラウンドで通信が開始されるという仕組み.


  // Promise
  //そのバックグラウンドで行われる非同期処理が今どういう状態なのかは、fetch() の返り値で知ることができるので、例えばこの URL へのリクエストに対するレスポンスという意味で、定数に格納することもできる。
  //この返り値ですが Promise と呼ばれる種類のオブジェクトで、非同期処理の状態に応じて値が変わる、特殊なオブジェクトになっている。
  // pending
  //具体的には非同期処理が始まった時点では、Pending という状態
  // Fulfilled
  //そして、そのあとに非同期処理が完了すると、その結果によって 2 つの状態に変化するのですが、処理がうまくいったら Fulfilled という状態
  // Rejected
  //非同期処理が何らかのエラーでうまくいかなかった場合、Rejected という状態


/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* fetch()を使ってJSONデータを取得する方法 ------------------------------------------------------------------------------------------*/

  // {

  //   function showHeader() {
  //     console.log('Header');
  //   }

  //   function showUsers() {
  //     const response = fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
  //     console.log(response);
  //   }

  //   function showFooter() {
  //     console.log('Footer');
  //   }

  //   showHeader();
  //   showUsers();
  //   showFooter();

  // }


/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 非同期処理でよく使われる、async、await、json()の使い方 ------------------------------------------------------------------------------------------*/

  // function showHeader() {
  //   console.log('Header');

  // }

  // async function showUsers() {
  //   const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json')
  //   const users = await response.json();
  //   console.log(users);

  // }

  // function showFooter() {
  //   console.log('Footer');

  // }

  // showHeader();
  // showUsers();
  // showFooter();

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 非同期処理が失敗した場合の処理を書く方法 try ... catch ------------------------------------------------------------------------------------------*/

  // {

  //   function showHeader() {
  //     console.log('Header');

  //   }

  //   async function showUsers() {
  //     try {
  //       const response = await fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json')//不具合が起きるurl
  //       const users = await response.json();
  //       console.log(users);
  //     } catch (error) {
  //       console.log('Something went wrong getting user data');
  //       console.log(`Error log ${error}`);
  //       // console.log('Error log: ' + error);
  //     }

  //   }

  //   function showFooter() {
  //     console.log('Footer');

  //   }

  //   showHeader();
  //   showUsers();
  //   showFooter();

  // }


  // // ---------------- 動作するurlのコピー -----------------
  // {

  //   function showHeader() {
  //     console.log('Header');

  //   }

  //   async function showUsers() {
  //     try {
  //       const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json')//動作するurlに変更
  //       const users = await response.json();
  //       console.log(users);
  //     } catch (error) {
  //       console.log('Something went wrong getting user data');
  //       console.log(`Error log ${error}`);
  //       // console.log('Error log: ' + error);
  //     }

  //   }

  //   function showFooter() {
  //     console.log('Footer');

  //   }

  //   showHeader();
  //   showUsers();
  //   showFooter();

  // }



/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* asyncをつけた関数を関数式で定義する方法 ------------------------------------------------------------------------------------------*/

  function showHeader() {
    console.log('Header');

  }


  const showUsers = async () => {
    try {
      const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json')//動作するurlに変更
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.log('Something went wrong getting user data');
      console.log(`Error log ${error}`);
    }
  };


  function showFooter() {
    console.log('Footer');

  }

  showHeader();
  showUsers();
  showFooter();

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* async、awaitが登場する前によく使われていた書き方について軽く説明 ------------------------------------------------------------------------------------------*/

  // function showUsers() {
  //   fetch('https://dotinstall.github.io/setup/fetchapi/users.json')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       console.log(users);
  //     })
  //     .catch((err) => {
  //       console.log('Something went wrong getting user data');
  //       console.log('Error log: ' + err);
  //     });
  // }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
