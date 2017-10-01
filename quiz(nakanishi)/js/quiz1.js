/** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] のような配列から順番に値を取り出してconsole.logで表示する
 * コードをそれぞれ異なる方法で最低3つ書いてみてください。ただしconsole.log は１回しか書いてはいけません。
 * 
 */

/**　方法① */
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < num.length; i++) {
    iroiro = num[i];
    console.log(iroiro);
}

/** 方法② */
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num1.forEach(function(value) {
    console.log(value);
});

/** 方法③ */
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
i = 0;
while (i < num2.length) {
    console.log(num2[i]);
    i++;
}