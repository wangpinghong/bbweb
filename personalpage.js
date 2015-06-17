	var myDataRef = new Firebase('https://mrclutch.firebaseio.com/test');
    
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
		displayChatMessage(message.name, message.text);
		$('#messagesDiv').fadeTo(1000, 1);
      });
      function displayChatMessage(name, text) {
      
        $('#messagesDiv').prepend( 
        	 '<div class=message">' +
          	 '<div class="text">' + text + '</div>' +
             '<div class="name">' + name + '</div>' +
             '</div>'
         );
       
      };