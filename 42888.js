// 오픈채팅방 ( 2019 카카오 블라인드 테스트 )

function solution(record) {
  var answer = [];
  let userList = new Map();
  let messages = [];
  for(var i = 0 ; i < record.length ; i++) {
    let [state, uid, nickname] = record[i].split(" ");
      let object = {};
      switch(state) {
          case "Enter":
              userList.set(uid, nickname);
              object = {
                  uid,
                  text:"님이 들어왔습니다.",
              }
              messages.push(object);
              break;
          case "Leave":
              object = {
                  uid,
                  text:"님이 나갔습니다.",
              }
              messages.push(object);
              break;
          case "Change":
              userList.set(uid, nickname);
              break;
      }
  }
  answer = messages.map(m => userList.get(m.uid) + m.text);
  return answer;
}