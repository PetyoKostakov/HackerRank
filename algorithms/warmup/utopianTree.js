// Problem - https://www.hackerrank.com/challenges/utopian-tree

function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());

    var data = lines.splice(0, T).map(parse_fun);

    function grow(cycle, treeHeight) {
        for (var i = 1; i <= cycle; i++) {
            if (i % 2 === 0) {
                treeHeight++;
            } else {
                treeHeight *= 2;
            }
        }
        return treeHeight;
    }

    data.forEach(function (cycle) {
        var treeHeight = 1;

        if (cycle === 0) {
            console.log(treeHeight);
        } else {
            console.log(grow(cycle, treeHeight));
        }
    });
}

processData("2\n4\n3");
