// Problem - https://www.hackerrank.com/challenges/chocolate-feast

function processData(input) {
    var lines = input.split('\n');

    lines.shift(); // first row is useless

    lines.forEach(function (nums) {
        var numsArr = lines.split(" "),
            total = numsArr[0],
            cost = numsArr[1],
            wrapperForFree = numsArr[2],
            free = 0;

        var canBuy = parseInt(total / cost),
            bought = canBuy;

        while (bought >= wrapperForFree) {
            free++;
            bought -= wrapperForFree - 1;
        }

        console.log(canBuy + free);
    })
}

processData("3\n" +
"10 2 5\n" +
"12 4 4\n" +
"6 2 2");

