/*
配列------------------------------------------------------------------------------------
*/

  const scores = [10, 20, 30, 40, 50];

  console.log(scores); //[10, 20, 30, 40, 50]
  console.log(scores[0]); //10
  console.log(scores[1]); //20
  console.log(scores[2]); //30
  console.log(scores[3]); //40
  console.log(scores[4]); //50
  console.log(scores.length); //5 (要素数)

  scores[1] = 11;  //値の変更
  console.log(scores); //[10, 11, 30, 40, 50]
  scores.push(60); //末尾に要素を追加
  scores.pop(); //末尾の要素を削除
  scores.unshift(70); //先頭に要素を追加
  scores.shift(); //先頭の要素を削除

  // scoreをscoresに変更すると、forEachのコールバック内での引数名が配列全体を指すことになり、scores.lengthと同じ内容になる。


/*
配列とforの組み合わせ--------------------------------------------------------------------------
*/

  const scores = [10, 20, 30, 40, 50];

  for (let i = 0; i < scores.length; i++) {
      console.log(scores[i]); // 10 20 30 40 50
  }

/*
forEach()の動作 「配列の要素を順番に取り出し」-------------------------------------------------------------------------------
*/

  const scores = [10, 20, 30, 40, 50];

  scores.forEach((score) => {
      console.log(score);
  });

  const scores = [10, 20, 30, 40, 50];

/*
forEach()で配列を処理---------------------------------------------------------------------------
*/

  const scores = [10, 20, 30, 40, 50];

  scores.forEach((score, index) => {
      // console.log(score);
      console.log(`${index}: ${score}`);
  });
  //0: 10
  //1: 20
  //2: 30
  //3: 40
  //4: 50

  // このように、配列と反復処理を組み合わせるには forEach() と for() を使う事ができます。

/*
配列の値を集計(点数の合計と平均など)------------------------------------------------------------------
*/

  const scores = [10, 20, 30, 40, 50];

  let sum = 0;

  scores.forEach((score) => {
      // sum = sum + score;
      sum += score;
      console.log(`${index}: ${score}`);
  });

  console.log(sum); //150
  console.log(sum / scores.length); //30
  console.log(`Sum: ${sum}`);//Sum: 150
  console.log(`Average: ${sum / scores.length}`); //Average: 30


/*
オブジェクトを作成してコンソールで表示。--------------------------------------------------------------
*/

  const scores = {math: 80, english: 90};

  // scores['math']  と  scores.math は一緒

  console.log(scores);  //{math: 80, english: 90}
  console.log(scores.english);  //英語のみの点数

  scores.math = 88;
  console.log(scores);  //更新された数学の点数


/*
オブジェクトにプロパティを追加、削除------------------------------------------------------------------
*/

  const scores = {math: 80, english: 90};

  scores.physics = 70;
  console.log(scores);  //{math: 80, english: 90, physics: 70} この様に物理の点数も追加される。

  delete scores.english;  //英語の点数(プロパティ)の削除

/*
Object.entries();  オブジェクトと反復処理を組み合わせる------------------------------------------------------------------
*/

  //オブジェクトにはfoeEachは使えない
  //Object.entries(); ・・・ オブジェクトを配列に変換

  const scores = {math: 80, english: 90};

  const entries = Object.entries(scores);
  console.log(entries);   // [Array(2),Array(2)]

  entries.forEach((prop) => {
      console.log(prop);  // ['math', 80] ['english', 90]
      console.log(`${prop[0]}: ${prop[1]}`);  // math: 80  english: 90
  });

/*
Object.entries()を使ってプロパティの値を集計(点数の合計と平均)-----------------------------------------------------------------
*/

  const scores = {math: 80, english: 90};

  let Sum = 0;

  scores.physics =70;

  const entries = Object.entries(scores)
  entries.forEach((prop) =>{
      Sum += prop[1];
      console.log(`${prop[0]} ${prop[1]}`);
  })

  console.log(`Sum: ${Sum}`);   // Sum: 240
  console.log(`Average: ${Sum / entries.length}`);  //Average: 80




/*
splice()の挙動-----------------------------------------------------------------
*/

  //splice()・・・配列で途中の要素を削除したり、途中に要素を挿入する場合

  const scores = [70, 90, 80, 85];
  scores.splice(2, 0, 77, 88);  // [70, 90, 77, 88, 80, 85]

  const deleted = splice(3, 1);  // [88]
  scores.splice(2, 2, 30);  // [70, 90, 30, 85]

  console.log(scores);  //[70, 90, 30, 85]
  console.log(deleted);  //[88]


/*
join()、split()の挙動「配列と文字列を相互に変換」-----------------------------------------------------------------
*/

  const names = ['Taro', 'Jiro', 'Saburo'];

  // Taro|Jiro|Saburo
  console.log(names.join('|')); // Taro|Jiro|Saburo
  console.log(names.join()); // Taro,Jiro,Saburo
  console.log(names.join('')); // TaroJiroSaburo

  const Names = 'Taro|Jiro|Saburo';
  console.log(Names.split('|')); // ['Taro', 'Jiro', 'Saburo']
  console.log(Names.split()); // ['Taro|Jiro|Saburo']
  console.log(Names.split('')); // ['T', 'a', 'r', 'o', '|', 'J', 'i', 'r', 'o', '|', 'S', 'a', 'b', 'u', 'r', 'o']


/*
map()「配列の要素を処理して新しい配列を作る」-----------------------------------------------------------------
*/

  const  prices = [100, 150, 200];

  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  //   });

  const pricesWithTax = prices.map((price) => {
    return price * 1.1;
  });

  console.log(pricesWithTax);  //[110, 165, 220]


/*
filter()「配列から条件に合致した要素だけを取り出して新しい配列を作る」-----------------------------------------------------------------
*/

  // const prices = [100, 150, 200];

  // const pricesOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // });

  const pricesOver150 = prices.filter((price) => {
    return price >= 150;
  });

  console.log(pricesOver150);  //[150, 200]


/*
分割代入-----------------------------------------------------------------
*/

  const scores = [70, 90, 80, 85];
  //   const first = scores[0];
  //   const second = scores[1];
  //   const third = scores[2];
  //   const fourth = scores[3];
  const [first, second, third, fourth] = scores;

  console.log(first);  //70
  console.log(second); //90
  console.log(third);  //80
  console.log(fourth); //85


/*
分割代入での値の入替え方法-----------------------------------------------------------------
*/

  let start = 'Tokyo';
  let goal = 'Osaka';

  // start = goal; // start = Osaka
  // goal = start; // goal = Osaka

  // let temp = '';
  // temp = start;
  // start = goal;
  // goal = temp;

  [goal, start] = [start, goal];

  console.log(start);
  console.log(goal);


/*
レスト構文で余った要素をまとめて受け取る -----------------------------------------------------------------
*/

  const scores = [70, 90, 80, 85];
  const [first, ...others] = scores;

  console.log(first);  //70
  console.log(others); //[90,80,85]


/*
スプレッド構文で配列から要素を取り出す -----------------------------------------------------------------
*/

  const moreScores = [77, 88];
  const scores = [70, 90, 80, 85, ...moreScores];
  const [first, ...others] = scores;

  console.log(first);  //70
  console.log(others); //[90,80,85,77,88]


/*
オブジェクトに対して分割代入、レスト構文、スプレッド構文 -----------------------------------------------------------------
*/

  const moreScores = {
    shiro: 77,
    goro: 88,
  };
  const scores = {
    taro: 80,
    jiro: 70,
    saburo: 90,
    ...moreScores,
  };
  // const {taro, jiro, saburo} = scores;
  const {taro, ...others} = scores;

  console.log(taro);   //80
  // console.log(jiro);
  // console.log(saburo);
  console.log(others); //{jiro: 70, saburo: 90, shiro: 77, goro: 88 }


/*
値をバックアップしておいて、元の値を書き換えるためのコード -----------------------------------------------------------------
*/

  //数値の場合は書き換えられる
  // let num = 10;
  // const numBackup = num;
  // num = 99;
  // console.log(num); // 99
  // console.log(numBackup); // 10


  //配列の場合は書き換えられない
  const nums = [10, 20, 30];
  const numsBackup = nums;
  nums[0] = 99;
  console.log(nums);// [99, 20. 30]
  console.log(numsBackup); // [99, 20. 30]


/*
スプレッド構文を使って配列のコピーを作る方法 -----------------------------------------------------------------
*/

  // let num = 10;
  // const numBackup = num;
  // num = 99;
  // console.log(num); // 99
  // console.log(numBackup); // 10

  const nums = [10, 20, 30];
  // const numsBackup = nums;
  // const numsBackup = [10, 20, 30];   //これでもいいが
  const numsBackup = [...nums];         //スプレッド構文を使う
  nums[0] = 99;
  console.log(nums);// [99, 20. 30]
  console.log(numsBackup); // [10, 20, 30]



/
