var speakers = [
    {
        name: 'Bartosz Adamiak', photo: '', twitter: '', www: '', github: '', linkedin: '', facebook: ''
    },
    {
        name: 'Bartosz Sokół', photo: 'bartosz-sokol.jpeg', twitter: 'bartsokol', www: 'http://bart-sokol.info', github: 'bartsokol', linkedin: 'https://www.linkedin.com/in/bartsokol', facebook: ''
    },
    {
        name: 'Bartosz Zaremba', photo: '', twitter: '', www: '', github: '', linkedin: '', facebook: ''
    },
    {
        name: 'Jarosław Janiszewski', photo: '', twitter: '', www: '', github: '', linkedin: '', facebook: ''
    },
    {
        name: 'Tomasz Janczyszyn', photo: '', twitter: '', www: '', github: '', linkedin: '', facebook: ''
    },
    {
        name: 'Tomasz Kujawa', photo: 'tomasz-kujawa.jpeg', twitter: 'tomkuj', www: '', github: '', linkedin: '', facebook: ''
    }
];

(function(){
    var sampleSpk = document.querySelectorAll('#sample')[0];
    var parent = sampleSpk.parentNode;
    speakers.forEach(function(speaker) {
        var el = sampleSpk.cloneNode(true);
        el.removeAttribute('id');
        el.querySelectorAll('img.avatar')[0].src = 'img/people/' + (speaker.photo ? speaker.photo : 'anonymous.png');
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
        parent.appendChild(el);
    }, this);
    sampleSpk.remove();
})();