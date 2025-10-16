var nameInput = document.getElementsByClassName('input-name')[0]
var passwordInput = document.getElementsByClassName('input-password')[0]
var submitBtn = document.getElementsByClassName('btn')[0]

//Bắt sự kiện btn (Nếu chưa nhập mà btn thì báo chưa nhập thông tin)
submitBtn.addEventListener('click', function(e) {
   confirm('chua nhap thong tin')
})

//Lấy giá trị user nhập vào input 
var keyname = nameInput.value.trim() //Lấy thông tin user điền và xóa kkhoảng trắng đầu cuối input chỉ lấy thông tin 
var keypassword = passwordInput.value.trim() //Lấy thông tin user điền và xóa kkhoảng trắng đầu cuối input chỉ lấy thông tin 

  // --- Kiểm tra name ---
  var nameRegex = /^[\p{L}\s]+$/u;
  var isNameValid = nameRegex.test(keyname);

  if (!keyname) {
    alert('⚠️ Chưa nhập tên!')
    return
  }

  if (!isNameValid) { //Nếu tên không hợp lệ chạy đoạn trong ngoặc
    alert('❌ Name chỉ được chứa chữ cái, không có số!');
    return;
  }


