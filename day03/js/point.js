var score = prompt("점수를 입력해주세요.(0~100)", "50");
var grade = "";

if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else if(score >= 0 && score < 60){
    grade = "F";
}
else{
    alert("잘못된 입력입니다! 성적은 0~100사이로 입력해주세요.");
}

document.write("점수는 <span class='access'>" + score + "</span>입니다.<br>")
document.write("학점은 <span class='access'>" + grade + "</span>입니다.<br>")