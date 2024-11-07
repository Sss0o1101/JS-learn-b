// (P) Ⅰ

/*
変数 1 --------------------------------------------------------------------------------------------
*/

    let nickname = "にんじゃわんこ";

    console.log(nickname); // にんじゃわんこ

/*
変数 2 --------------------------------------------------------------------------------------------
*/

    let length = 5;

    console.log(length); // 5

    console.log(length * length * 3 ); // 75

/*
変数の更新 --------------------------------------------------------------------------------------------
*/

    let real_name = "にんじゃわんこ";
    console.log(real_name); // にんじゃわんこ

    real_name = "とりずきん";

    console.log(real_name); // とりずきん

/*
変数の更新 数字
*/

    let number = 7;
    console.log(number); // 7

    number += 3;

    console.log(number); // 10

    number /= 2;

    console.log(number); // 5

/*
定数  --------------------------------------------------------------------------------------------
*/

    const language = "フランス語";

    console.log(language); // フランス語

    console.log(language + "を話せます"); // フランス語を話せます

/*
テンプレートリテラル --------------------------------------------------------------------------------------------
*/

    const surname = "にんじゃわんこ";
    const years = 14;

    console.log(`ぼくの名前は${surname}です`); // ぼくの名前はにんじゃわんこです

    console.log(`今は${years}歳です`); // 今は14歳です

/*
条件文 if--------------------------------------------
*/

    const level = 12;

    // 条件式を「level > 10」とするif文を作ってください
    if (level > 10) {
    console.log("レベルが10より大きいです");
    }

    //levelsの値が20以上の場合に、「レベルが20以上です」と出力してください
    const levels = 24;
    console.log(levels >= 20); // true
    console.log(levels < 20); // false

    if (levels >= 20) {
        console.log("レベルが20以上です");
    }


/*
条件文 (論理演算子) && || --------------------------------------------------------------------------------------------
*/

    const age = 24;

    //定数ageの値が20以上かつ30未満」という条件のif文を作成してください。また、その中で文字列「私は20代です。」というメッセージを出力してください。

    if (age >= 20 && age < 30) {
        console.log('私は20代です。');
    }


/*
条件文 (等価演算子)真偽値と比較演算子--------------------------------------------
*/

    const password = "ninja";

    // passwordの値が"ninja"の場合、「ログインに成功しました」と出力してください
    if (password === "ninja") {
    console.log("ログインに成功しました");
    }

    // passwordの値が"ninja"でない場合、「パスワードが間違っています」と出力してください
    if (password !== "ninja") {
    console.log("パスワードが間違っています");
    }

/*
条件文 if else--------------------------------------------
*/

    const score = 17;

    // 条件式が成り立たない場合に「私の点数は20点未満です」と出力してください
    if (score >= 20) {
    console.log("私の点数は20点以上です");
    }  else {
    console.log("私の点数は20点未満です");
    }

/*
条件文 else if--------------------------------------------
*/

    const scores = 17;

    // scoresの値が10以上20未満のとき、「私の点数は20点以上です」と出力してください
    if (scores >= 20) {
    console.log("私の点数は20点以上です");
    } else if(scores >= 10) {
    console.log("私の点数は20点未満ですが、10点以上です");
    } else {
    console.log("私の点数は10点未満です");
    }

/*
条件文 switch--------------------------------------------
*/

    const weather = "雨";

    switch (weather) {
    case "晴れ":
    console.log("洗濯をします");
    break;
    case "大雨":
        console.log("傘を持っていきます");
        break;
    default:
        console.log("傘を持っていかないです");
        break;
    }
//----------------------------
    const n = 2;

    switch (n) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
    }

// default----------------------------

    const N = 4;

    switch (N) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
    // どのcaseにも合致しなかったときの処理を追加してください
    default:
        console.log("凶です");
        break;
    }
