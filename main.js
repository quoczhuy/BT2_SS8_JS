const hangDoiXeCho = ["30A-98765", "29B-12345", "51C-45678"];

// SỬA LỖI 1: Sử dụng shift() để lấy xe đầu tiên trong hàng đợi (nguyên tắc FIFO) thay vì pop()
const xeVaoSac = hangDoiXeCho.shift();

// Thêm xe mới vào cuối hàng
hangDoiXeCho.push("43D-88888");

// SỬA LỖI 2: Đổi điều kiện vòng lặp thành i < hangDoiXeCho.length để tránh lỗi in ra undefined
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}
