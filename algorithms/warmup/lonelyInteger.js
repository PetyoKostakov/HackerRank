// Problem - https://www.hackerrank.com/challenges/lonely-integer

function processData(input) {
    var nums = input.split('\n')[1].split(' '),
        answer;

    nums.forEach(function (num) {
        if (!answer) {
            answer = num;
        } else {
            answer ^= num;
        }
    });

    console.log(answer);
}

processData("5\n0 0 1 2 1");