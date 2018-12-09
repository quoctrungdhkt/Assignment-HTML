var btnSubmit = document.forms['song-form']['btnSubmit'];
btnSubmit.onclick = function() {
    if (validateForm()){
        // Nếu dữ liệu nhập vào đều đúng thì thực hiện Gửi dữ liệu đi
        createSong();
    }
}

function createSong() {

    var songInformation = {
        name: document.forms['song-form']['name'].value,
        singer: document.forms['song-form']['singer'].value,
        author: document.forms['song-form']['author'].value,
        thumbnail: document.forms['song-form']['thumbnail'].value,
        link: document.forms['song-form']['link'].value,
    };
    var jsonSongInformation = JSON.stringify(songInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Save success');
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Save fails, please try again!' + xhr.responseText);
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com//_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Basic' + localStorage.getItem('token-key'));
    xhr.send(jsonSongInformation);
}

function validateForm() {
// Kiểm tra dữ liệu người dùng trước khi gửi đi.
// Trả về true hoặc false
// Lưu trữ trạng thái validate của cả form.
    var isValid = true;
// Lưu trữ trạng thái validate của name.
    var isValidName = true;
// Lưu trữ trạng thái validate của singer.
    var isValidSinger = true;
// Lưu trữ trạng thái validate của author.
    var isValidAuthor = true;
// Lưu trữ trạng thái validate của thumbnail.
    var isValidThumbnail = true;
// Lưu trữ trạng thái validate của link.
    var isValidLink = true;
// Trước khi classList error thì phải remove Success và ngược lại để chữ báo lỗi trả về đổi màu bằng cách dùng msg.classList
// Lấy ra input text có tên là 'Name' nằm trong form 'song-form'.
    var txtName = document.forms['song-form']['name'];
// Lấy ra phần tử span nằm kế tiếp của txtName, tức là phần khoảng trắng. (dùng để hiển thị thông báo lỗi)
    var msgName = txtName.nextElementSibling;
// Kiểm tra dữ liệu trong input txtName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtName.value == null || txtName.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgName.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgName.classList.add('msg-error');
        // Chuyển nội dung text.
        msgName.innerHTML = ' Name is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidName = false;
        // ClassList sẽ trả về danh sách các class
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }

    var txtSinger = document.forms['song-form']['singer'];
    var msgSinger = txtSinger.nextElementSibling;
    if (txtSinger.value == null || txtSinger.value.length == 0) {
        msgSinger.classList.remove('msg-success');
        msgSinger.classList.add('msg-error');
        msgSinger.innerHTML = 'Singer is required!';
        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok.';
    }

    var txtAuthor = document.forms['song-form']['author'];
    var msgAuthor = txtAuthor.nextElementSibling;
    if (txtAuthor.value == null || txtAuthor.value.length == 0) {
        msgAuthor.classList.remove('msg-success');
        msgAuthor.classList.add('msg-error');
        msgAuthor.innerHTML = 'Author is required!';
        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok.';
    }

    var txtThumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = txtThumbnail.nextElementSibling;
    if (txtThumbnail.value == null || txtThumbnail.value.length == 0) {
        msgThumbnail.classList.remove('msg-success');
        msgThumbnail.classList.add('msg-error');
        msgThumbnail.innerHTML = 'Thumbnail is required!';
        isValidThumbnail = false;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Ok.';
    }

    var txtLink = document.forms['song-form']['link'];
    var msgLink = txtLink.nextElementSibling;
    if (txtLink.value == null || txtLink.value.length == 0) {
        msgLink.classList.remove('msg-success');
        msgLink.classList.add('msg-error');
        msgLink.innerHTML = 'Link is required!';
        isValidLink = false;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Ok.';
    }

isValid = isValidName && isValidSinger && isValidAuthor && isValidThumbnail && isValidLink;
return isValid;
}