/* メソッドのオーバーライド (子クラスで独自の判定ロジックを実装していく方法) ------------------------------------------------------------------------------------------*/

  // {
  //   class Score {
  //     constructor(subject, result) {
  //       this.subject = subject;
  //       this.result = result;
  //     }

  //     //grade を求める処理を作成
  //     getGrade () {
  //       return this.result >= 80 ? 'A' : 'B';
  //     }

  //     getScoreString () {
  //       return `${this.subject} ${this.result} ${this.getGrade()}`;  //gradeの追加 //メソッドから同じクラス内に定義されたメソッドを使うには、this. を付ける必要がある。
  //     }
  //   }

  //   //Scoreの子クラス(Math)
  //   class MathScore extends Score {
  //     constructor(result) {
  //       super('Math', result);
  //     }

  //     //子クラスの方で、親クラスと同じ名前のメソッドを上書きすることを、メソッドのオーバーライドと呼ぶ。
  //     getGrade () {
  //       return this.result >= 50 ? 'A' : 'B';
  //     }

  //   }
  //   //Scoreの子クラス(English)
  //   class EnglishScore extends Score {
  //     constructor(result) {
  //       super('English', result);

  //     }
  //   }


  //   class User {
  //     constructor (name, score) {
  //       this.name = name;
  //       this.score = score;
  //     }
  //     getUserString() {
  //       return `${this.name} ${this.score.getScoreString()}`;
  //     }
  //   }


  //   const user1 = new User('Taro', new MathScore(70));
  //   const user2 = new User('Jiro', new EnglishScore(80));

  //   console.log(user1.getUserString());  //Taro Math 70 A
  //   console.log(user2.getUserString());  //jiro English 80 A
  // }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/*  ------------------------------------------------------------------------------------------*/

  class Test {
    //初期状態で実行する内容 (引数も可能)
    constructor(val, author) {
      this.val = val;
      this.author = author;
    }

    //メソッド  //returnが必要
    hello() {
      console.log('こんにちは!');
      return `${this.author}です。`;
    }

    //静的メソッド
    static hello2() {
      return 'こんにちは';
    }

  }

  //子クラス
  class CopyTest extends Test {
    constructor(val, author) {
      super(val, author);
    }

    copyHello() {
      super.hello();
      return `${this.author}です。`;
    }
  }


  //インスタンス化 (クラスを実行する) = new
  const test = new Test(10, 山田);

  console.log(test.val); //10
  console.log(test.author); //山田
  console.log(test.hello()); //山田です。
  console.log(CopyTest.hello2()); //こんにちは

  //子クラスのインスタンス化
  const copyTest = new CopyTest(20, 田中);

  console.log(copyTest.val); //20
  console.log(copyTest.copyHello()); //こんにちは




















/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
