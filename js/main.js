$(document).ready(function() {
	//anon oauth token
	var token = 'HL543JFGWBZAEWM5COAP';
	//org id
	//var organizer = '7993959737';
	var organizer = '8547108865';
	var $events = $("#events");
	
	$events.html("<i>Wczytywanie wydarzeń, proszę czekać...</i>");
	$.get('https://www.eventbriteapi.com/v3/organizers/'+organizer+'/events/?token='+token+'&expand=venue', function(res) {
		if(res.events.length) {
			var s = "";
			for(var i=0;i<res.events.length;i++) {
				var event = res.events[i];
				var eventTime = moment(event.start.local).format('DD.MM.YYYY HH:mm');
				console.dir(event);
				s += "<h4><a href='" + event.url + "'>" + event.name.text + "</a></h2>";
				s += "<p><b>" + eventTime + ", " + event.venue.address.address_1 + ", " + event.venue.address.city + "</b><br/>";
				s += "<p>" + event.description.text + "</p>";
			}
			$events.html(s);
			if (res.events[0].logo.url != null)
				$('#events-img').css("background-image", "url("+res.events[0].logo.url+ ")");  
		} else {
			$events.html("<p>Przepraszamy, aktualnie nie ma nadchodzących wydarzeń.</p>");
		}
	});
});