var chatterBox = function(room){

  var myFirebaseRef = new Firebase("https://brilliant-inferno-9461.firebaseio.com/" + room);

  $('#messageInput').keypress(function (e) {
    var myFirebaseRef = new Firebase("https://brilliant-inferno-9461.firebaseio.com/" + room);
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      myFirebaseRef.push({name: name, text: text});
      $('#messageInput').val('');
    }
  });

  myFirebaseRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
  });

  function displayChatMessage(name, text) {
    $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  };

}

var chatterboxOpen = function(){
  $("img.chatbox").on("click", function(){
    $("#chatterbox").slideToggle()
  })
}

var homeNav = function(){
  $("li.homenav a").on("click", function(){
    $("#messagesDiv").html('')
    chatterBox("chat1");
  })
}

var initialize = function(){
  chatterboxOpen();
  chatterBox("chat1")
  rubyRoom();
  jsRoom();
  homeNav();
}

$(initialize)
