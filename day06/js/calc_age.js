function calcAge(){
    const CURRENT_YEAR = 2021;
    var birthYear = prompt("출생연도를 입력하세요.");
    var age;
    
    age = CURRENT_YEAR - birthYear + 1;

    document.getElementById("result").innerHTML = "나이는 " + age + "세 입니다.";
}