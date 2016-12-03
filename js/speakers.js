var speakers = [
    {
        name: 'Paweł Łukasik', photo: 'pawel-lukasik.jpg', twitter: 'pawel_lukasik', www: 'http://octal.pl',
        presentations: [
            { meeting: '#62', title: 'Hackowanie IL-a', link: 'http://slides.com/pawellukasik/hackowanie-ila-14#/' }
        ]
    },
    {
        name: 'Szymon Warda', photo: 'szymon-warda.jpg', twitter: 'maklipsa', www: 'http://indexoutofrange.com/', github: 'maklipsa', linkedin: 'https://linkedin.com/in/szymonwarda',
        presentations: [
            { meeting: '#61', title: 'Graph databases - why and how', link: '' }
        ]
    },
    {
        name: 'Bartosz Sokół', photo: 'bartosz-sokol.jpeg', twitter: 'bartsokol', www: 'http://bart-sokol.info', github: 'bartsokol', linkedin: 'https://www.linkedin.com/in/bartsokol',
        presentations: [
            { meeting: '#61', title: 'Microservices, Micropains, Microgains', link: 'https://github.com/pgdotnet/Meetings/tree/master/Spotkanie%2061/Microservices' }
        ]
    },
    {
        name: 'Jakub Pawłowski', photo: 'anonymous.png',
        presentations: [
            { meeting: '#60', title: '.NET Core - what is it and why should I care?', link: '' }
        ]
    }
];

(function(){
    var sampleSpk = document.querySelectorAll('#sample')[0];
    var parent = sampleSpk.parentNode;
    speakers.forEach(function(speaker) {
        var el = sampleSpk.cloneNode(true);
        el.removeAttribute('id');
        el.querySelectorAll('img.avatar')[0].src = 'img/people/' + speaker.photo;
        el.querySelectorAll('h3')[0].innerHTML = speaker.name;
        var www = el.querySelectorAll('a.www')[0];
        if (speaker.www) {
            www.href = speaker.www;
            www.title = speaker.name + ' - WWW';
        } else {
            www.remove();
        }
        var facebook = el.querySelectorAll('a.facebook')[0];
        if (speaker.facebook) {
            facebook.href = speaker.facebook;
            facebook.title = speaker.name + ' - Facebook';
        } else {
            facebook.remove();
        }
        var twitter = el.querySelectorAll('a.twitter')[0];
        if (speaker.twitter) {
            twitter.href = 'http://twitter.com/' + speaker.twitter;
            twitter.title = speaker.name + ' - Twitter';
        } else {
            twitter.remove();
        }
        var github = el.querySelectorAll('a.github')[0];
        if (speaker.github) {
            github.href = 'http://github.com/' + speaker.github;
            github.title = speaker.name + ' - GitHub';
        } else {
            github.remove();
        }
        var linkedin = el.querySelectorAll('a.linkedin')[0];
        if (speaker.linkedin) {
            linkedin.href = speaker.linkedin;
            linkedin.title = speaker.name + ' - LinkedIn';
        } else {
            linkedin.remove();
        }
        var samplePres = el.querySelectorAll('dl')[0];
        speaker.presentations.forEach(function(pres) {
            var presEl = samplePres.cloneNode(true);
            presEl.querySelectorAll('dt')[0].innerHTML = pres.meeting;
            var link = document.createElement('a');
            if (pres.link) link.href = pres.link;
            link.innerHTML = pres.title;
            presEl.querySelectorAll('dd')[0].appendChild(link);
            el.appendChild(presEl);
        }, this);
        samplePres.remove();
        parent.appendChild(el);
    }, this);
    sampleSpk.remove();
})();