// 문자열 압축 (카카오 블라인드 테스트)

function solution(s) {
  var answer = 0;
  if(s.length <= 1) {
      answer = s.length;
  }
  for(var cut = 1 ; cut <= s.length / 2 ; cut++) {
      var cnt = 1;
      var format = '';
      var unit = s.slice(0, cut);   
      for(var i = cut ; i < s.length; i += cut) {
          var compare = s.slice(i, i + cut);

          if(unit === compare) {
              cnt++;
          }
          else {
              format += cnt > 1 ? cnt + unit : unit;
              unit = compare;
              cnt = 1;
          }
      }
      if(unit) {
          format += cnt > 1 ? cnt + unit : unit;
      }
      
      if(answer === 0 || answer > format.length)
          answer = format.length;
  }
      
  return answer;
}