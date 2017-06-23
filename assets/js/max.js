var max = {
	object: {},
	popup: function() {
		$('#popup').html('<div style="position:absolute; width:800px; margin:5%; background-color: green; display: flex-inline"><p>Title</p><input type="text" name="title" id="title"><p>Description</p><input type="text" name="description" id="description"><p>Dates</p><input type="date" name="date" id="date"><p>Start Time</p><input type="time" name="start" id="start"><p>End Time</p><input type="time" name="end" id="end"><p>Location</p><input type="text" name="location" id="location"><p>Keywords</p><input type="text" name="keyword" id="keyword"><button id="submit">submit</button></div>')
	},
	submit: function() {
		max.object.title = $('#title').val();
		max.object.description = $('#description').val();
		max.object.dates = $('#dates').val();
		max.object.start = $('#start').val();
		max.object.end = $('#end').val();
		max.object.location = $('#location').val();
		max.object.keyword = $('#keyword').val();
	},
	clearInput: function() {
		$('#keyword').val('');
		$('#location').val('');
		$('#end').val('');
		$('#start').val('');
		$('#dates').val('');
		$('#description').val('');
		$('#title').val('');
		$('#popup').html('');
	},
}

$(document).on('click', '#button', function() {
	max.popup()
});

$(document).on('click', '#submit', function() {
	app.addNewListing()
});