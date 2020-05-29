// 괄호 변환 (2020 카카오 블라인드)

function solution(p) {
  var answer = '';
  if(p === "")
      return p;
  
  let { u , v } = splitText(p);
  
  if(checkRight(u)) {
      u += solution(v);
      return u;
  } else {

      var temp = "(";
      temp += solution(v);
      temp += ')';
      u = reverseTag(u).slice(1, u.length -1 );
      temp += u;
      return temp;
  }
  return answer;
}

function checkRight(s) {
  while(s.length != 0) {
      if(s.includes("()"))
          s = s.replace(/\(\)/g,'');
      else {
          return false; 
      }
  }
  return true;
}

function splitText(s) {
  var u = '';
  var v = '';
  for(var i = 0 ; i < s.length ; i++) {
      u += s[i];
     
      var openTag = u.match(/\(/g);
      var closeTag = u.match(/\)/g);
      if(openTag && closeTag && openTag.length === closeTag.length) {
          v = s.substring(i+1, s.length);
          break;
      }
  }
  return {u , v};
}

function reverseTag(s) {
  var result = "";
  for(var i = 0 ; i < s.length ; i++) {
      if(s[i] === "(")
          result += ")";
      else if(s[i] === ")")
          result += "(";
  }
  return result;
}