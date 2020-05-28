// 기능개발 (Lv.1)

function solution(progresses, speeds) {
  var answer = [];
  var stack = [];
  var remember = -1;
  for(var i = 0 ; i < progresses.length ; i++) {
      var job = Math.ceil( (100 - progresses[i]) / speeds[i]);
      if(remember < job){
          answer.push(1);
          remember = job;
      }
      else if(remember >= job) {
          answer[answer.length - 1]++;
      }
  }
  return answer;
}