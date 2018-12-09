var btnSubmit = document.forms['song-form']['btnSubmit'];
btnSubmit.onclick = function(){
    if(valueForm()){
        doSong();
    }
}

function doSong(){
    var name = document.forms['song-form']['name'].value;
    var thumbnail = document.forms['song-form']['thumbnail'].value;
    var singer = document.forms['song-form']['singer'].value;
    var author = document.forms['song-form']['author'].value;
    var link = document.forms['song-form']['link'].value;

    var songInformation = {
        thumbnail : thumbnail,
        name : name,
        singer : singer,
        author : author,
        link   : link,
    }
    var sendData = JSON.stringify(songInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('Everything is Success!');
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
    xhr.send(sendData);
    // xhr.open();
}

function valueForm() {
    var value = true;
    var valueName = true;
    var valueThumbnail = true;
    var valueSinger = true;
    var valueAuthor = true;
    var valueLink = true;


    var txtName = document.forms['song-form']['name'];
    var msgName = txtName.nextElementSibling;
    if(txtName.value == null || txtName.value.length == 0){
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        txtName.style.marginLeft = '27.2%';
        msgName.innerHTML = '   Name song  is required !';
        valueName = false;
    }
    else {
        msgName.classList.add('msg-success');
        msgName.classList.remove('msg-error');
        msgName.innerHTML = 'OK!';
        txtName.style.marginLeft = '4.8%';
    }

    var textThumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = textThumbnail.nextElementSibling;
    if(textThumbnail.value == null || textThumbnail.value.length == 0){
        msgThumbnail.classList.remove('msg-success');
        msgThumbnail.classList.add('msg-error');
        textThumbnail.style.marginLeft = '26.6%';
        msgThumbnail.innerHTML = ' Thumbnail is required !';
        valueThumbnail = false;
    }
    else {
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.innerHTML = 'OK!';
        textThumbnail.style.marginLeft = '4.8%';
    }

    var txtsinger = document.forms['song-form']['singer'];
    var msgsinger = txtsinger.nextElementSibling;
    if(txtsinger.value == null || txtsinger.value.length == 0){
        msgsinger.classList.remove('msg-success');
        msgsinger.classList.add('msg-error');
        txtsinger.style.marginLeft = '21.6%';
        msgsinger.innerHTML = 'Singer is required !';
        valueSinger = false;
    }
    else {
        msgsinger.classList.add('msg-success');
        msgsinger.classList.remove('msg-error');
        msgsinger.innerHTML = 'OK!';
        txtsinger.style.marginLeft = '4.8%';
    }

    var txtauthor = document.forms['song-form']['author'];
    var msgauthor = txtauthor.nextElementSibling;
    if(txtauthor.value == null || txtauthor.value.length == 0){
        msgauthor.classList.remove('msg-success');
        msgauthor.classList.add('msg-error');
        txtauthor.style.marginLeft = '22.5%';
        msgauthor.innerHTML = 'Author is required !';
        valueAuthor = false;
    }
    else {
        msgauthor.classList.add('msg-success');
        msgauthor.classList.remove('msg-error');
        msgauthor.innerHTML = 'OK!';
        txtauthor.style.marginLeft = '4.8%';
    }

    var txtlink = document.forms['song-form']['link'];
    var msglink = txtlink.nextElementSibling;
    if(txtlink.value == null || txtlink.value.length == 0){
        msglink.classList.remove('msg-success');
        msglink.classList.add('msg-error');
        txtlink.style.marginLeft = '18.7%';
        msglink.innerHTML = 'link is required !';
        valueLink = false;
    }
    else {
        msglink.classList.add('msg-success');
        msglink.classList.remove('msg-error');
        msglink.innerHTML = 'OK!';
        txtlink.style.marginLeft = '4.8%';
    }
    value = valueAuthor && valueLink && valueName && valueSinger && valueThumbnail;
    return value;

}