function getJSON(uri, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', uri, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            success(data);
        } else {
            error();
        }
    };
    request.onerror = error;
    request.send();
}

(function(){
    var ebtok = 'HL543JFGWBZAEWM5COAP', eborg = '7993959737';
    var eburi = 'https://www.eventbriteapi.com/v3/organizers/'+eborg+'/events/?order_by=start_desc&only_public=on&token='+ebtok+'&expand=venue';
    getJSON(
        eburi,
        function(data){
            var sample = document.querySelectorAll('#loading')[0];
            var parent = sample.parentNode;
            data.events.forEach(function(element) {
                var ev = sample.cloneNode(true);
                var header = ev.querySelectorAll('h2')[0];
                header.innerHTML = '';
                var link = document.createElement('a');
                link.href = element.url;
                link.innerHTML = element.name.html;
                header.appendChild(link);
                var date = new Date(element.start.utc);
                ev.querySelectorAll('p')[0].innerHTML = date.toLocaleString() + ', ' + element.venue.name + ', ' + element.venue.address.localized_address_display;
                parent.appendChild(ev);
            }, this);
            sample.remove();
        },
        function(){
            var el = document.querySelectorAll('#loading h2')[0];
            el.innerHTML = 'Przepraszamy, wystąpił błąd podczas ładowania listy wydarzeń :(';
        });
})();