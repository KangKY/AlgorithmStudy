// 124 나라의 숫자

function solution(n) {
  var answer = '';
  var share = n;

  while(share != 0 ) {
    var value = parseInt(share / 3);
    var rest = share % 3;

    if(rest === 0) {
      answer ="4" + answer;
      value = value - 1;
    } else if(rest === 1){
      answer = "1" + answer;
    } else if(rest === 2) {
      answer = "2" + answer;
    }

    share = value;
  }
   
  return answer;
}