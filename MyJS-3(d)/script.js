/*
関数 (引数)------------------------------------------------------------------------------------
*/
    function double(num) {  //仮引数
        return num * 2;
    }

    console.log(double(10)); //実引数
    console.log(double(4)*3); //実引数

// 別の書き方-----------------------------------------------------------
    // function sum(a, b) {
    //   return a + b;
    // }

    // console.log(sum(300, 700));

    function sum(a, b) {
        console.log(a + b);
    }

    sum(300, 700);

    //returnを使わない場合、undefinedが返される
    //単に何かを表示するだけだったら、return を使わないこともある。


/*
仮引数にデフォルト値を設定------------------------------------------------------------------------------------
*/
    //何らかの商品の税込合計金額を計算するような関数

    function calculateTotal(price, amount, rate = 1.1) {  //仮引数にデフォルト値を設定 1.1はデフォルト値 (単価・数量・税率)
        return price * amount * rate;
    }

    console.log(calculateTotal(100, 10));
    console.log(calculateTotal(150, 10));
    console.log(calculateTotal(200, 10));
    console.log(calculateTotal(120, 10, 1.08));

/*
処理の途中でreturnを使う方法------------------------------------------------------------------------------------
*/
    // amount が 100 個以上だったら税金分を無料にしたかったケース

        function calculateTotal(price, amount, rate = 1.1) {
            if (amount >= 100) {
                return price * amount * rate;
            } else {
                return price * amount;
            }
        }

        console.log(calculateTotal(100, 100));
        console.log(calculateTotal(1000, 10));

    // 別の書き方 (早期リターン)--------------------------------------

        function calculateTotal(price, amount, rate = 1.1) {
            if (amount >= 100) {        // 早期リターン
                return price * amount;
            }
            return price * amount * rate;
        }

        console.log(calculateTotal(100, 100));
        console.log(calculateTotal(1000, 10));

        // else を削り、早期リターンを使うことでコードがスッキリする。
        // return が実行されると、この時点で関数の呼び出し元に戻って、それ以降の処理が実行されない為。
        // したがって、amount が 100 以上の時は return price * amount; までが実行されて、amount が 100 より少ない時は、if (amount >= 100) {} がスルーされて単にこちらが実行されるので、上と全く同じ処理になるはずです

/*
関数を使って処理をまとめ、コードの見通しを良くする方法------------------------------------------------------------------------------------
*/

    function showAd() {
        console.log("---------");
        console.log("SALE! 50% OFF!");
        console.log("---------");
    }

    function showContent() {
        console.log("BREAKING NEWS!");
        console.log("Two baby pandas born at our Zoo!");
    }

    showAd();      //--------- SALE! 50% OFF! ---------
    showContent(); //BREAKING NEWS! Two baby pandas born at our Zoo!
    showAd();      //--------- SALE! 50% OFF! ---------

/*
関数宣言と関数式------------------------------------------------------------------------------------
*/

    // 関数宣言             // 関数宣言は実はコードのどこに書いても、実行時にはコードの先頭に書いたことになるという仕様になっている

    function double(num) {
        return num * 2;
    }

    console.log(double(10)); //20


    // 関数式
    const double = function(num) {
        return num * 2;
    }

    console.log(double(10)); //20

/*
アロー関数式------------------------------------------------------------------------------------
*/
    const double = (num) => {
        return num * 2;
    }

    console.log(double(10)); //20

/*
関数を引数にとる関数------------------------------------------------------------------------------------
*/
    const calc = (num, func) => {
        return func(num);
    }

    (calc(20, double)); //20
