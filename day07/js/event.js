// 상세 설명 보기
function showText(){
    // 설명 보이기
    document.getElementById("desc").style.display = "block";
    // 버튼 숨기기
    document.getElementById("open").style.display = "none";
}

function hideText(){
    document.getElementById("desc").style.display = "none";

    document.getElementById("open").style.display = "block";
}