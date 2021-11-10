/*
    나이가 8세 미만이면 "미취학아동", 8세~13세 "초등학생"
    14~19세 "중, 고등학생", 20세 이상 "일반인"
    -입장료-
    - 미취학아동 : 1000원
    - 초등학생 : 2000원
    - 중학생 : 2500원
    - 고등학생 : 3000원
    - 일반인 : 4000원
*/

var age = prompt("나이를 입력해주세요.", "20");
var charge = 0;

if(age == null){
    document.write("입력이 취소되었습니다.");
}
else{
    if(age >= 0 && age < 8){
        document.write("미취학 아동입니다.<br>");
        charge = 1000;
    }
    else if(age >= 8 && age < 14){
        document.write("초등학생입니다.<br>");
        charge = 2000;
    }
    else if(age >= 14 && age < 17){
        document.write("중학생입니다.<br>");
        charge = 2500;
    }
    else if(age >= 17 && age < 20){
        document.write("고등학생입니다.<br>");
        charge = 3000;
    }
    else if(age >= 20 && age <= 80){
        document.write("일반인입니다.<br>");
        charge = 4000;
    }
    else{
        document.write("입력 범위를 초과했습니다.");
    }
}


document.write("<p>입장료는 <span class='access'>" + charge + "</span>원 입니다.</p>");