// 쇠막대기 

function solution(arrangement) {
  var answer = 0;
  var stack = [];
  arrangement = arrangement.replace(/\(\)/g,'0');
  for(var i = 0 ; i < arrangement.length ; i++) {
      switch(arrangement[i]) {
          case '(':
              stack.push(1);
              break;
          case '0':
              stack = stack.map(v => v+1);
              break;
          case ')':
              answer += stack[stack.length - 1];
              stack.pop();
              break;
      }
  }
  
  return answer;
}