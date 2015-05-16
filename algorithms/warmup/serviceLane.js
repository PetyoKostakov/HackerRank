// Problem - https://www.hackerrank.com/challenges/service-lane

function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    lines.shift();
    var width = lines.shift().split(' ');

    lines.forEach(function (line) {
        var ij = line.split(' '),
            i = parseInt(ij[0]),
            j = parseInt(ij[1]),
            min = width[i];

        for (i += 1; i <= j; i++) {
            if (min > width[i]) {
                min = width[i];
            }
        }

        console.log(min);
    });
}

processData("8 5\n" +
"2 3 1 2 3 2 3 3\n" +
"0 3\n" +
"4 6\n" +
"6 7\n" +
"3 5\n" +
"0 7");