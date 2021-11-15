var score = [
    [80, 70],
    [90, 60],
    [70, 75],
    [100, 90],
    [85, 70]
]

// var korSum = 0;
// var mathSum = 0;
var sum = [0, 0];
var avg = [0.0, 0.0];

// for(var i = 0; i < score.length; i++){
//     korSum += score[i][0];
//     mathSum += score[i][1];
// }
for(var i = 0; i < score.length; i++){
    sum[0] += score[i][0];
    sum[1] += score[i][1];
}
avg[0] = sum[0] / score.length;
avg[1] = sum[1] / score.length;

// document.write("국어 총점 : " + korSum + "점<br>");
// document.write("수학 총점 : " + mathSum + "점<br>");
document.write("국어 총점 : " + sum[0] + "점<br>");
document.write("수학 총점 : " + sum[1] + "점<br>");
document.write("국어 평균 : " + avg[0] + "점<br>");
document.write("수학 평균 : " + avg[1] + "점<br>");