// 완주하지 못한 선수(Lv.1)

function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();
  
  for(var i=0;i<completion.length;i++){
      if(participant[i] != completion[i]){
          answer = participant[i];
          break;
      }
  }
  
  if(answer != '') return answer;
  else return participant[participant.length-1];
  //while(completion.length != 0) {
  //     var compare = completion.shift();
  //     //participant.splice(participant.findIndex(p => p === compare), 1);
  //     participant[participant.findIndex(p => p === compare)] = 0;
  // }
  // for(var i = 0; i < participant.length ; i++) {
  //     if(participant[i] != 0)
  //         answer = participant[i];
  // }
  //answer = participant[0];
  return answer;
}