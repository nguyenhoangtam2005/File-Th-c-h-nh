// B1 Khai báo biến
/* =========================
📒 NOTE KHAI BÁO BIẾN JS
========================== */

/*
👉 Có 3 từ khóa: var, let, const
- var  : cũ, ít dùng, phạm vi function
- let  : thường dùng, phạm vi block, gán lại được
- const: giá trị cố định, phạm vi block, KHÔNG gán lại
*/

/* var → tránh dùng */
var x = 10;
x = 20; // ok
var x = 30; // ok (nhưng nguy hiểm)

/* let → thay đổi được */
let y = 5;
y = 6; // ok
// let y = 7; ❌ lỗi (không khai báo lại)

/* const → cố định */
const PI = 3.14;
// PI = 3; ❌ lỗi

/*
⚡ QUY TẮC:
- Mặc định dùng const
- Chỉ dùng let khi cần thay đổi giá trị
- Tránh var
*/
// =================================================================================================
// B2 Một số hàm built-in trong JavaScript | Built-in functions
/* ==========================
📒 6 HÀM BUILT-IN THEO THỨ TỰ
---------------------------------------------- */

/*
1. alert("msg")
👉 Báo cho người dùng (popup 1 nút OK)
*/
alert("Xin chào!"); 

/*
2. console.log("msg")
👉 In ra console để debug (F12 → Console)
*/
console.log("Hello console");

/*
3. confirm("msg")
👉 Hỏi YES/NO → trả về true/false
*/
let ok = confirm("Bạn có chắc không?");
console.log("Kết quả:", ok);

/*
4. prompt("msg")
👉 Hỏi người dùng nhập dữ liệu → string/null
*/
let name = prompt("Nhập tên của bạn:");
console.log("Tên:", name);

/*
5. setTimeout(fn, ms)
👉 Chạy 1 lần sau X mili giây
*/
setTimeout(() {
  console.log("Thông báo sau 2 giây");
}, 2000);

/*
6. setInterval(fn, ms)
👉 Lặp lại mãi sau mỗi X mili giây
*/
setInterval(() {
  console.log("Thông báo mỗi 3 giây" + Math.random()); 
}, 3000);
// ==========================================================================================
// B3 Làm quen với toán tử trong JavaScript | Các loại toán tử JS (09)

// 1️⃣ TOÁN TỬ SỐ HỌC (Arithmetic)
// + - * / % **
let a = 5, b = 2;
console.log(a + b); // kp=7 Có dấu = thì đã gọi là toán từ gán

// 🔍 Kiểm tra kiểu dữ liệu:
console.log(typeof (a + b)); // "number"



// 2️⃣ TOÁN TỬ GÁN (Assignment)
// = += -= *= /= %=
let x = 10;
x += 5; // x = 15 Gán cho nó giá trị (thí dụ =5) thì goi là Gán thoi

// 🔍 Kiểm tra kiểu dữ liệu:
console.log(typeof x); // "number" (sau khi gán)



// 3️⃣ TOÁN TỬ SO SÁNH (Comparison)
// == === != > < >= <=
let a = 5;
let b = 6;
if('a < b') {
console.log('Xin chào') // Nếu a nhỏ hơn b thì ỉn ra chữ Xin chào là so sánh đó
} 

// 🔍 Kiểm tra kiểu dữ liệu:
console.log(typeof (5 == '5')); // "boolean"



// 4️⃣ TOÁN TỬ LOGIC (Logical)
// && || !
let a = 5;
let b = 4; 
if(a > 0 && b > 0) {
    console.log('a & b lớn hơn 0')
}  // false cái này dùng để kiểm tra 2 vế nếu 2 vé đúng thì mới có kết quả nhe

// 🔍 Kiểm tra kiểu dữ liệu:
console.log(typeof (isAdmin && isLogin)); // "boolean"
// ==============================================================================================
// B4 Toán tử ++ -- với tiền tố & hậu tố (Prefix & Postfix) trong JavaScript
/*
📌 Tiền tố vs Hậu tố trong JS (++ / --)

1. Hậu tố (i++ hoặc i--)
   - Dùng giá trị hiện tại TRƯỚC
   - Sau đó mới tăng/giảm
   👉 Ví dụ:
      let a = 5;
      let b = a++;  // b = 5, a = 6

2. Tiền tố (++i hoặc --i)
   - Tăng/giảm giá trị TRƯỚC
   - Rồi mới dùng
   👉 Ví dụ:
      let x = 5;
      let y = ++x;  // x = 6, y = 6

💡 So sánh ngoài đời:
   - Hậu tố (i++): Làm xong mới được ghi công.
   - Tiền tố (++i): Được ghi công trước rồi mới làm.

⏱ Nhớ: 
   - i++ = dùng giá trị cũ, xong rồi mới +1
   - ++i = +1 trước, rồi mới dùng giá trị mới


*/
// Object constructor trong JavaScript
// ================================================================
function User(FirtName, LastName, Age) {
    this.FirtName = FirtName;
    this.LastName = LastName;
    this.Age = Age;
};
var Uler = new User ('Tam', 'Nguyen', 20);
var Umer = new User ('Tam', 'Nguyen', 20);
var Uder = new User('tiec', 'Nguyen', 50);

console.log(Uler);
console.log(Umer);
console.log(Uder);

// Object constructor trong JavaScript
// ================================================================
function User(FirtName, LastName, Age) {
    this.FirtName = FirtName;
    this.LastName = LastName;
    this.Age = Age;
};
var Uler = new User ('Tam', 'Nguyen', 20);
var Umer = new User ('Tam', 'Nguyen', 20);
var Uder = new User('tiec', 'Nguyen', 50);

console.log(Uler);
console.log(Umer);
console.log(Uder);


// Object prototype(cơ bản) trong JavaScript (Nợ)
// =====================================================================================


// Array map method trong JavaScript | Làm việc với mảng
// ============================================================================================

var i = [   //Đây là cái nhà nhưng muốn thêm cái cột phía sau
  'java',
  'PHP',
  'html',
  'CSS'
];

var iNew = i.map(function(Itam) { //khai báo biến mới và cho map() xem nhà
  return Itam + ' Luangle';  // bắt đầu thực thi cho cột phía sau;
});

console.log(iNew);


// ====================================================================================================
// MAP – Dùng để TẠO MẢNG MỚI bằng cách thay đổi hoặc thêm dữ liệu từ mảng cũ
let numbers = [10, 20, 30, 40]; // Khai báo mảng ban đầu

var i = numbers.map(function(value) { // Duyệt qua từng phần tử trong mảng
  return value + ' Name'; // Trả về giá trị mới cho mỗi phần tử
});

console.log(i); // Kết quả: ['10 Name', '20 Name', '30 Name', '40 Name']
// ====================================================================================================


// REDUCE – Dùng để CỘNG DỒN hoặc TÍNH TỔNG giá trị trong mảng
var u = numbers.reduce(function(total, current) { // total: giá trị tích lũy, current: phần tử hiện tại
  return total + current; // Cộng dồn từng phần tử vào tổng
}, 0); // 0 là giá trị khởi đầu

console.log(u); // Kết quả: 100

// Bai tap Reduce chat GPT cho=========================================================================
let bills = [12000, 25000, 18000, 30000];

var i = bills.reduce(function(Tongtien, Tienhientai) {
  return Tongtien + Tienhientai;
}, 0);

console.log(i);

// ====================================================================================================


// INCLUDES – Dùng để KIỂM TRA xem mảng có chứa một giá trị nào đó không
console.log(numbers.includes(25)); // Kiểm tra xem mảng có chứa số 25 không → false
// ====================================================================================================
function All (Name, Age, Img){
  this.Name = Name;
  this.Age = Age;
  this.Img = Img;
}
var i = new All('Tam', 40, 'Avatar')
console.log(i)

// =========================================================================================================
// Đối tượng math | JavaScript math object

console.log(Math.PI) //Math.PI cần dùng khi muốn tìm số PI
console.log(Math.round(5.2)) //làm trong số thập phân qua số nguyên => 5
console.log(Math.abs(-5)) // Giữ nguyên số dương => 5
console.log(Math.ceil(3.2)) // Làm tròn trên => 4
console.log(Math.floor(5.2)) // Làm tròn dưới => 5
console.log(Math.random()) // Tạo một số thập phân ngẫu nhiên nhỏ hơn một => 0.03704303282563837, 0.6686243116791694 Mỗi lần lập là mỗi lần khác
console.log(Math.min(20, -30, 50)) //Lay so nho nhat
console.log(Math.max(20, -30, 50)) //Lay so lon nhat
// Ví dụ
var Name = Math.floor(Math.random() * 200);
if (Name < 50){
  console.log('Thanh cong')
}
//Hàm callback
function Hamone () {
  console.log('Day la ham dau tien')
}

function Hamtwo(callback){;
console.log('Dang cho goi ham');
callback();
}
Hamtwo(Hamone)

// ===================================================================================
// Xây dựng phương thức làm việc với array (forEach, find, filter, some, every, reduce)
 let number = [10, 20, 30, 50, 60];

 //forEach() duyệt qua từng phần tử trong mảng để thực thi hành động, không trả về giá trị (undefined).
number.forEach(function(Numbers, Index, array){
  console.log(Numbers, Index, array)
})

// =============================================================================================================
//filter()duyệt qua từng phần tử trong mảng và trả về mảng mới chứa những phần tử thỏa điều kiện.
// Lọc ra các phần tử trong mảng number lớn hơn 20
let result = number.filter(function(Nam) {
  // 'Nam' đại diện cho từng phần tử của mảng 'number' khi filter chạy qua
  return Nam > 20; // nếu điều kiện đúng (true) => phần tử này được giữ lại
});

// Sau khi lọc xong, 'result' sẽ là mảng mới chứa các giá trị thỏa điều kiện
console.log(result); // In ra mảng kết quả

// =======================================================================================================
//Some kiểm tra một phần tử có trong mảng hay không
let Umer = number.some(function(Nam){
  return Nam > 5; //trong mảng có cái nào lớn hơn 5 không (True Flase)
})
console.log(Umer) //Kết quả là true vì tất cả đều lớn hơn 5

//================================================================================
// dùng every() để kiểm tra xem TẤT CẢ phần tử có thỏa điều kiện không
let number = [2, 5, 8, 10]; // tạo mảng gồm 4 số
let result = number.every(function(Nam) {  // dùng every() để kiểm tra xem TẤT CẢ phần tử có thỏa điều kiện không và // 'Nam' đại diện cho từng phần tử trong mảng number
return Nam > 5; // nếu MỌI phần tử đều > 5 => kết quả true
});

console.log(result); // false vì có 2 và 5 không > 5


// Đệ quy là tự gọi lại chính nó để sau
// ===========================================================================================

//HTML DOM là Document Object Model nằm ở tab Element dùng để thêm xóa sửa wed
document
 └── html
      └── body
           └── div#box
                 ├── p → "Hello World"
                 └── img
// =============================================================================================
//DOM API là bộ công cụ 'js' để đi sửa cây DOM

//Thực hành truy xuất Element bằng DOM
// ----------------------------------
//1.Có thể Element : ID, Class, Tag
//CSS selector, HTML collection
// --------------------------------------
//2. Attribute
//---------------------------------------
//3. Text

var Umer = document.getElementsByClassName('container') //Element bằng Class (Chỉ #  CSS selector ở chỗ là có . trước class )
console.log(Umer)

var Umer = document.getElementsByTagName('h1') //Element bằng Tag
console.log(Umer)

//2.  Element + Attribute + Text----------------------------------------------------------------------
<h1 class Title>Xin chao cac ban</h1> 
//Element lầ h1
//Attribute là id. class, Img, src...
//Text là 'Xin chao cac ban'
// --------------------------------------------------------------------------------------

// ===============================================================================================
//Khi thao tác lên btn thì btn sẽ đổi chữ và đổi text
let button = 
document.querySelector('.btn-card')
console.log(button)

button.onclick = function() {
    button.style.backgroundColor = 'red';
    button.textContent = 'Toi da doi mau';
};

// PreventDefault & StopPropagation
// 1 PreventDefault dùng khi không muốn đối tượng đó đi đúng đường
var aElement = document.querySelector('a');
console.log(aElement)


