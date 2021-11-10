/*
    'y'키를 누르면 "계속 반복",
    'n'키를 누르면 "반복 중단",
    그 외의 키는 "잘못 입력"

    while ~ if ~ break(반복 조건문)
*/

while(true){
    var key = prompt("계속 반복하시겠습니까?", "y/n, y=반복, n=종료");

    if(key == 'y' || key == 'Y'){
        alert("계속 반복을 진행합니다.");
    }
    else if(key == 'n' || key == 'N'){
        alert("반복을 중단합니다.");
        break;
    }
    else{
        alert("잘못 입력하셨습니다.");
    }
}

document.write("반복 종료!");