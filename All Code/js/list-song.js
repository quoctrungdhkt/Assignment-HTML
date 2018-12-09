// document.forms['song-form']['btn-submit'].onclick = function () {
//     playSong();
//     mysong();
// }
// function playSong(link) {
//     var audioPlayer = document.getElementsByTagName('audio')[0];
//     audioPlayer.src = link;
//     audioPlayer.play();
// }
// function mysong() {
//     var xhr = new XMLHttpRequest();
//     var token = localStorage.getItem('token-key');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var arraySongs = JSON.parse(xhr.responseText);
//             var htmlContent = ' ';
//             for (var i = 0; i < arraySongs.length; i++) {
//                 var song = arraySongs[i];
//                 htmlContent += '<div class="song-item">';
//                 htmlContent += '<div class="song-index">' + (i + 1) + '</div>';
//                 htmlContent += '<div class="song-thumbnail">';
//                 htmlContent += '<img src="' + song.thumbnail + '">';
//                 htmlContent += '</div>';
//                 htmlContent += '<div class="song-infor">';
//                 htmlContent += '<div class="song-name">' + song.name + '</div>';
//                 htmlContent += '<div class="song-singer">' + song.singer + '</div>';
//                 htmlContent += '<div class="song-author">' + song.author + '</div>';
//                 htmlContent += '</div>';
//                 //style 1
//                 htmlContent += '<div class="song-control play-control" onclick="playSong(\'' + song.link + '\')">Play</div>';
//                 //style 2
//                 //htmlContent += `<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
//                 htmlContent += '<div class="song-control"><a href="#">Detail</div>';
//                 htmlContent += '</div>';
//             }
//             document.getElementById('list-song').innerHTML += htmlContent;
//         }
//     };
//     xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs', true);
//     xhr.setRequestHeader('Authorization', 'Basic ' + token);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     // xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
//     xhr.send();
// }

var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
document.addEventListener('DOMContentLoaded', function () {
    loadSongs();
});

function loadSongs() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var listSong = JSON.parse(this.responseText);
            var content = '';
            for (var i = 0; i < listSong.length; i++) {
                content += '<div class="song-item">';
                content += '<div class="song-index">' + (i + 1) + '</div>';
                content += '<div class="song-thumbnail">';
                content += '<img src="' + listSong[i].thumbnail + '" alt="">';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name">' + listSong[i].name + '</div>';
                content += '<div class="song-singer">' + listSong[i].singer + '</div>';
                content += '</div>';
                content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
                content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
                content += '</div>';
            }
            document.getElementById('list-song').innerHTML = content;
        }
    }
    xmlHttpRequest.open('GET', MY_API, true);
    xmlHttpRequest.send();
}
function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}