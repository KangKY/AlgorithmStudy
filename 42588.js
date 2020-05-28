// 탑

function solution(heights) {
  var answer = [];
  var length = heights.length;
  for( var i = length - 1 ; i >= 0 ; i-- ) {
      answer.unshift(0);
      for( var j = i - 1 ; j >= 0 ; j--) {
          if(heights[j] > heights[i]) {
              answer[0] = j+1;
              break;
          }
      }
  }
  return answer;
}