const chatlog = document.querySelector('.chatlog');
const chatinput = document.querySelector('.chatinput input');
const chatsubmit = document.querySelector('.chatinput button');

var chatsocket = new WebSocket("ws://localhost:8080/chat");

function submitchat(event){
  let msg = {
    username : 'isabelle',
    channel : '1',
    content : chatinput.value
  }
  chatinput.value = '';
  chatsocket.send(JSON.stringify(msg));
}

chatsocket.onopen = function (event) {
  console.log('client onopen')
  chatsubmit.addEventListener('click', submitchat);
};

chatsocket.onmessage = function (event) {
  var msg = JSON.parse(event.data)
  chatlog.innerHTML += `<p>${msg.username} : ${msg.content}</p>`
}
