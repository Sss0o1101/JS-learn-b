/* クラスの概要 ------------------------------------------------------------------------------------------*/

  //独自のデータ型を作るための仕組み

  //クラスで定義した独自のデータ型から作られる値をそのクラスのインスタンス、そしてそのデータ型に特化した独自の命令はそのクラスのメソッドと呼ぶ。

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* Userという独自のデータ型を定義し、インスタンスを作成 ------------------------------------------------------------------------------------------*/

  {
    class User {

    }

    const user1 = new User();
    const user2 = new User();
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 前回作ったインスタンスにプロパティをセット ------------------------------------------------------------------------------------------*/

  {
    class User {

    }

    const user1 = new User();
    user1.name = 'Taro';
    user1.score = 70;

    const user2 = new User();
    user2.name = 'Jiro';
    user2.score = 80;


    console.log(user1.name);  //Taro
    console.log(user1.score); //70
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* newしたときに実行されるコンストラクタについて ------------------------------------------------------------------------------------------*/

  {
    class User {
      // constructor (nameFromNew, scoreFormNew) {
      //   this.name = nameFromNew;
      //   this.score = scoreFormNew;
      // }
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }
    }

    const user1 = new User('Taro',70);
    const user2 = new User('Jiro',80);


    console.log(user1.name);  //Taro
    console.log(user1.score); //70
    console.log(user2.name);  //Jiro
    console.log(user2.score); //80
  }

/* 質問の例 -------------------------------------------*/

  {
    class User {
      constructor({name, score, rank}) {
        this.name = name;
        this.score = score;
        this.rank = rank;
      }
    };

    const user1 = new User({
      name: 'Hanako',
      score: 70,
      rank: 'B',
    });
    const user2 = new User({
      name: 'Jiro',
      score: 80,
      rank: 'A',
    });

    console.log(user1.name);
    console.log(user1.score);
    console.log(user1.rank);
    console.log(user2.name);
    console.log(user2.score);
    console.log(user2.rank);
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* UserクラスにgetUserString()というメソッドを定義する方法 ------------------------------------------------------------------------------------------*/

  //name と score を 2 行ではなくて、1 行でまとめて表示したい場合。
  //そのための文字列を作るメソッドを定義

  {
    class User {
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }

      getUserString() {
        return `${this.name} ${this.score}`;
      }
    }

    const user1 = new User('Taro',70);
    const user2 = new User('Jiro',80);

    console.log(user1.getUserString());  //Taro 70
    console.log(user2.getUserString());  //jiro 80
  }
/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* データを拡張するために、さらにクラスを作って組み合わせていく方法
  Scoreクラスを修正して、前回おかしかった表示を直していきます------------------------------------------------------------------------------------------*/

  {
    class Score {
      constructor(subject, result) {
        this.subject = subject;
        this.result = result;
      }

      getScoreString () {
        return `${this.subject} ${this.result}`;
      }
    }

    class User {
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }
      getUserString() {
        // return `${this.name} ${this.score}`;
        // return `${this.name} ${this.score.subject} ${this.score.result}`; // 修正点: 科目と点数を表示
        return `${this.name} ${this.score.getScoreString()}`;
      }
    }

    //こちらの点数に科目の情報も含めたくなったので、Score というデータ型を作ってプログラムを拡張
    const user1 = new User('Taro', new Score('Math', 70));
    const user2 = new User('Jiro', new Score('English', 80) );

    console.log(user1.getUserString());  //Taro Math 70
    console.log(user2.getUserString());  //jiro English 80
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 点数に応じて判定結果も表示できるようにScoreクラスを拡張していきます。 ------------------------------------------------------------------------------------------*/

  //「Taro Math 70」「jiro English 80」これらの点数に応じて A 判定、B 判定といった表示もしたくなった場合。

  {
    class Score {
      constructor(subject, result) {
        this.subject = subject;
        this.result = result;
      }

      getScoreString () {
        let grade;   //gradeはここで宣言されて、この辺りで使われるだけのメソッド内で使い捨てる、ただの変数のためthisは不要。
        if (this.result >= 80) {
          grade = 'A';
        } else {
          grade = 'B';
        }
        return `${this.subject} ${this.result} ${grade}`;  //gradeの追加
      }
    }

    class User {
      constructor (name, score) {
        this.name = name;
        this.score = score;
      }
      getUserString() {
        // return `${this.name} ${this.score}`;
        // return `${this.name} ${this.score.subject} ${this.score.result}`; // 修正点: 科目と点数を表示
        return `${this.name} ${this.score.getScoreString()}`;
      }
    }

    //こちらの点数に科目の情報も含めたくなったので、Score というデータ型を作ってプログラムを拡張
    const user1 = new User('Taro', new Score('Math', 70));
    const user2 = new User('Jiro', new Score('English', 80) );

    console.log(user1.getUserString());  //Taro Math 70
    console.log(user2.getUserString());  //jiro English 80
  }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* 前回の判定処理を別メソッドとして切り出す方法 ------------------------------------------------------------------------------------------*/

  class Score {
    constructor(subject, result) {
      this.subject = subject;
      this.result = result;
    }

    //grade を求める処理を作成
    getGrade () {
      // let grade;
      // if (this.result >= 80) {
      //   grade = 'A';
      // } else {
      //   grade = 'B';
      // }
      // return grade;

      return this.result >= 80 ? 'A' : 'B';  //簡単に書ける
    }

    getScoreString () {
      return `${this.subject} ${this.result} ${this.getGrade()}`;  //gradeの追加 //メソッドから同じクラス内に定義されたメソッドを使うには、this. を付ける必要がある。
    }
  }

  class User {
    constructor (name, score) {
      this.name = name;
      this.score = score;
    }
    getUserString() {
      // return `${this.name} ${this.score}`;
      // return `${this.name} ${this.score.subject} ${this.score.result}`; // 修正点: 科目と点数を表示
      return `${this.name} ${this.score.getScoreString()}`;
    }
  }

  //こちらの点数に科目の情報も含めたくなったので、Score というデータ型を作ってプログラムを拡張
  const user1 = new User('Taro', new Score('Math', 70));
  const user2 = new User('Jiro', new Score('English', 80) );

  console.log(user1.getUserString());  //Taro Math 70
  console.log(user2.getUserString());  //jiro English 80

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* あるクラスをもとに別のクラスを作ることができる、クラスの継承について
  Scoreクラスをもとに、MathScoreクラス、EnglishScoreクラスを作る方法 ------------------------------------------------------------------------------------------*/

  //ここで科目ごとに A 判定、B 判定の基準を変えたくなった場合。
  //例えば、数学については 50 点以上が A 判定、英語については 70 点以上が A 判定
  //その場合、こちらの getGrade の中で、subject をもとにさらに条件分岐をしてもいいのですが、クラスの継承という仕組みを使う。
