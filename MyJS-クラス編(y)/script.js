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

/* クラス, インスタンス 有り ------------------------------------------------------------------------------------------*/

  class Accordion {
    //初期化
    constructor() {
      const $elm = document.querySelector('#js-accordion');
      const $trigger = $elm.getElementsByTagName('a');

      // リファクタリング
      const $triggerLength = $trigger.length;
      // for (let i = 0; i < $triggerLength; i++) {
      //   $trigger[i].addEventListener('click', (e) => clickHandler(e));
      // }
      let index = 0;
      while (index < $triggerLength) {
      $trigger[index].addEventListener('click', (e) => clickHandler(e));
      index++;
      }
    }

    //クリックされた時の処理
    const clickHandler = (e) => {
      e.preventDefault();

      const $target = e.currentTarget;
      const $contet = $target.nextElementSibling;
      if ($contet.style.display === 'block') {
        $contet.style.display = 'none';
      } else {
        $contet.style.display = 'block';
      }
    }





  }


/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

/* クラス, インスタンス 無し ------------------------------------------------------------------------------------------*/

  // const $elm = document.querySelector('#js-accordion');
  // const $trigger = $elm.getElementsByTagName('a');

  // // リファクタリング
  // const $triggerLength = $trigger.length;
  // // for (let i = 0; i < $triggerLength; i++) {
  // //   $trigger[i].addEventListener('click', (e) => clickHandler(e));
  // // }
  // let index = 0;
  // while (index < $triggerLength) {
  //   $trigger[index].addEventListener('click', (e) => clickHandler(e));
  //   index++;
  // }

  // //クリックされた時の処理
  // const clickHandler = (e) => {
  //   e.preventDefault();

  //   const $target = e.currentTarget;
  //   const $contet = $target.nextElementSibling;
  //   if ($contet.style.display === 'block') {
  //     $contet.style.display = 'none';
  //   } else {
  //     $contet.style.display = 'block';
  //   }
  // }

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
