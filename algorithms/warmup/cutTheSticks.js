// Problem - https://www.hackerrank.com/challenges/cut-the-sticks

function processData(input) {
    var lines = input.split('\n')[1].split(' '),
        min;

    while (lines.length > 0) {
        console.log(lines.length);
        min = Math.min.apply(Math, lines);

        lines = lines.map(function (num) {
            return num - min;
        });
        lines = lines.filter(function(num) {
            return num > 0;
        });
    }
}

processData("6\n5 4 4 2 2 8");