// 입장객 수에 따른 좌석의 줄 수 계산
var customerNum = prompt("입장객 수를 입력해주세요.");
var columnNum = prompt("열 수를 입력해주세요.");
var rowNum = 0;

if(customerNum == null || customerNum == "" || columnNum == null || columnNum == ""){
    document.write("입력이 취소되었습니다.");
}
else{
    if(customerNum % columnNum == 0){
        rowNum = customerNum / columnNum;
    }
    else{
        rowNum = parseInt(customerNum / columnNum) + 1;
    }
    document.write(rowNum + "개의 줄이 필요합니다.<br><hr>");
}

// 중첩 for로 자리 배치
document.write("<table>");
for(var i = 1; i <= rowNum; i++){
    document.write("<tr>");
    for(var j = 1; j <= columnNum; j++){
        var seatNum = (i-1) * columnNum + j
        if(seatNum > customerNum){
            break;
        }
        document.write("<td> 좌석 " + seatNum + " </td>");
    }
    document.write("</tr>");
}
document.write("</table>");