var url = new URL(window.location);
urli = url.searchParams;
var season = urli.get("season");
var episode = urli.get("episode");
var file = urli.get("file");

function getJSON(url) {
    var resp ;
    var xmlHttp ;
    resp  = '' ;
    xmlHttp = new XMLHttpRequest();
    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }
    return resp ;
}

var gjson = getJSON(file);
var obj = JSON.parse(gjson);

console.log(obj['season1'][1]);

var s1ep = ["https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"];

var video = document.getElementById('video');
var source = document.createElement('source');

video.appendChild(source);

function videochange(ep){
    source.setAttribute('src', ep);
    video.play();
}

videochange(obj['season'+season][parseInt(episode)]);
