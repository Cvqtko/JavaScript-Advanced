function solve() {
     let sendButton = document.querySelector('button#send');
   let sendTextarea = document.querySelector('textarea#chat_input');
   let chatMessages = document.querySelector('div#chat_messages');

   sendButton.addEventListener('click', (ev) => {
      let message = sendTextarea.value;
      let myMessage = document.createElement('div');
      myMessage.classList.add('message');
      myMessage.classList.add('my-message');
      myMessage.textContent = message;
      chatMessages.appendChild(myMessage);
      sendTextarea.value = '';
   });
}


