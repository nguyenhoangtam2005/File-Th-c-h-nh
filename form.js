var nameInput = document.getElementsByClassName('input-name')[0];
var passwordInput = document.getElementsByClassName('input-password')[0];
var submitBtn = document.getElementsByClassName('btn')[0];
var loadingOverlay = document.getElementById('loadingOverlay');

// Bắt sự kiện btn
submitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  var keyname = nameInput.value.trim();
  var keypassword = passwordInput.value.trim();

  // --- Kiểm tra name ---
  var nameRegex = /^[\p{L}\s]+$/u;
  var isNameValid = nameRegex.test(keyname);

  if (!keyname) {
    alert('⚠️ Chưa nhập tên!');
    return;
  }

  if (!isNameValid) {
    alert('❌ Name chỉ được chứa chữ cái, không có số!');
    return;
  }

  // Kiểm tra Password
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  var isPasswordValid = passwordRegex.test(keypassword);

  if (!keypassword) {
    alert('⚠️ Chưa nhập password!');
    return;
  }

  if (!isPasswordValid) {
    alert('❌ Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái, số và ký tự đặc biệt!');
    return;
  }

  // NẾU TẤT CẢ HỢP LỆ - HIỂN THỊ LOADING Ở GIỮA
  showLoading();
});

// Hàm hiển thị loading ở giữa màn hình
function showLoading() {
  // Hiển thị loading overlay
  loadingOverlay.style.display = 'flex';
  
  // Vô hiệu hóa button để ngăn nhấn nhiều lần
  submitBtn.disabled = true;

  // Giả lập quá trình xử lý trong 3 giây
  setTimeout(function() {
    // Ẩn loading sau khi xử lý xong
    loadingOverlay.style.display = 'none';
    
    // Hiển thị thông báo thành công
    alert('✅ Xử lý thành công!');
    
    // Reset form
    nameInput.value = '';
    passwordInput.value = '';
    submitBtn.disabled = false;
  }, 20000);
}