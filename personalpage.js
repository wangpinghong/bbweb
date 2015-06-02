var myDataRef = new Firebase('https://mrclutch.firebaseio.com/test');

myDataRef.on('child_added', function(snapshot) {
	var message = snapshot.val();
	displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
	$('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};