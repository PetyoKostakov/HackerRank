// Problem - https://www.hackerrank.com/challenges/the-love-letter-mystery

function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());

    var data = lines.splice(0, T);

    function checkPalindrom(str) {
        return str == str.split('').reverse().join('');
    }


    data.forEach(function (str) {
        var actions = 0,
            strLength = str.length;

        if (checkPalindrom(str)) {

        } else {
            for (var i = 0; i < (strLength / 2); i++) {
                var first = str[i],
                    last = str[strLength - (i+ 1)];

                if (first.charCodeAt() === last.charCodeAt()) {

                }else if (first.charCodeAt() < last.charCodeAt()) {
                    actions += last.charCodeAt() - first.charCodeAt();
                } else if (first.charCodeAt() > last.charCodeAt()) {
                    actions += first.charCodeAt() - last.charCodeAt();
                }
            }
        }

        console.log(actions);
    });
}

processData("4\nabc\nabcba\nabcd\ncba");