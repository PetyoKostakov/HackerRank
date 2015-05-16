// Problem - https://www.hackerrank.com/challenges/angry-professor

function processData(input) {
    var lines = input.split('\n'),
        numberTestCases = parseInt(lines.shift());

    for (var i = 0; i < numberTestCases*2; i += 2) {
        var leastNumber = lines[i].split(' ')[1],
            studentsArrival = lines[i + 1].split(' '),
            arrivedInTime = 0;

        studentsArrival.forEach(function(time) {
            if (time <= 0) {
                arrivedInTime++;
            }
        });

        if (leastNumber <= arrivedInTime) {
            console.log("NO");
        } else {
            console.log("YES");
        }
    }
}

processData("10\n"+
"10 4\n" +
"-93 -86 49 -62 -90 -63 40 72 11 67\n" +

"10 10\n" +
"23 -35 -2 58 -67 -56 -42 -73 -19 37\n" +

"10 9\n" +
"13 91 56 -62 96 -5 -84 -36 -46 -13\n" +

"10 8\n" +
"45 67 64 -50 -8 78 84 -51 99 60\n" +

"10 7\n" +
"26 94 -95 34 67 -97 17 52 1 86\n" +

"10 2\n" +
"19 29 -17 -71 -75 -27 -56 -53 65 83\n" +
"10 10\n" +
"-32 -3 -70 8 -40 -96 -18 -46 -21 -79\n" +
"10 9\n" +
"-50 0 64 14 -56 -91 -65 -36 51 -28\n" +
"10 6\n" +
"-58 -29 -35 -18 43 -28 -76 43 -13 6\n" +
"10 1\n" +
"88 -17 -96 43 83 99 25 90 -39 86\n");