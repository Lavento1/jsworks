/* 
    1부터 10까지의 자연수 중 홀수를 사용하여 합을 구하고, 그 합을
    배열의 맨 뒤에 추가하는 프로그램
*/

var nums = [];
var sum = 0;

for(var i = 1; i <= 10; i++){
    if(i % 2 != 0){
        nums.push(i);
    }
}

for(var i = 0; i < nums.length; i++){
    sum += nums[i];
}

document.write(sum + '<br>');

nums.push(sum);

for(var i = 0; i < nums.length; i++){
    document.write(nums[i] + '&nbsp');
}

document.write("<br>");

for(var i in nums){
    document.write(nums[i] + '&nbsp');
}