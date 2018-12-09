// Đăng ký
var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    var _firstName = document.forms['register-form']['firstName'].value;
    var _lastName = document.forms['register-form']['lastName'].value;
    var _password = document.forms['register-form']['password'].value;
    var _address = document.forms['register-form']['address'].value;
    var _phone = document.forms['register-form']['phone'].value;
    var _avatar = document.forms['register-form']['avatar'].value;
    var _gender = document.forms['register-form']['gender'].value;
    var _email = document.forms['register-form']['email'].value;
    var _birthday = '1992-12-12';

    var registerInformation = {
        firstName: _firstName,
        lastName: _lastName,
        password: _password,
        address: _address,
        phone: _phone,
        avatar: _avatar,
        gender: _gender,
        birthday: _birthday,
        email: _email
    };
    // Bước này là phiên dịch sang ngôn ngữ JSON để máy chủ hiểu và làm việc tiếp
    var sendData = JSON.stringify(registerInformation);

    // Bước này là Gửi dữ liệu đi và lấy dữ liệu về
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // Nếu trạng thái gửi đi bằng 4, nghĩa là gửi xong rồi và Status bằng 201 nghĩa là thành công rồi
        if(xhr.readyState == 4 && xhr.status == 201){
            //Lúc này sẽ có thông báo đăng ký thành công
            alert('Register Success!');
            document.forms['register-form'].reset();
            // Còn nếu không thì trả về thông báo không thành công, yêu cầu làm lại!
        }else if (xhr.readyState == 4){
            alert('Register fails, please try again!' + xhr.responseText);
        }
    };
    // Tạo kết nối tới nơi gửi dữ liệu đến
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}