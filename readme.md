# Phân tích lỗi & Lập bảng Test Cases

## 1. Phân tích lỗi

*   **Lỗi sai logic điều phối xe vào sạc (Lỗi FIFO):** 
    *   *Đoạn code sai:* `const xeVaoSac = hangDoiXeCho.pop();`
    *   *Nguyên nhân:* Phương thức `pop()` sẽ lấy và xóa phần tử cuối cùng của mảng, tức là xe vừa mới đến xếp hàng lại được gọi vào sạc trước. Điều này sai với quy tắc hàng đợi (vào trước ra trước - FIFO).
    *   *Cách sửa:* Sử dụng phương thức `shift()` để lấy xe ở vị trí đầu tiên (chỉ số 0) ra khỏi hàng đợi.
*   **Lỗi duyệt mảng quá giới hạn (Out of bounds) khi in lên bảng LED:**
    *   *Đoạn code sai:* `for (let i = 0; i <= hangDoiXeCho.length; i++)`
    *   *Nguyên nhân:* Mảng trong JavaScript được đánh chỉ số từ `0` đến `length - 1`. Khi sử dụng điều kiện `i <= hangDoiXeCho.length`, vòng lặp sẽ chạy thêm 1 lần khi `i = hangDoiXeCho.length`. Ở vị trí này không có phần tử nào nên `hangDoiXeCho[i]` trả về `undefined`, dẫn đến việc bảng LED in ra một dòng "STT ... : undefined".
    *   *Cách sửa:* Đổi điều kiện lặp thành `i < hangDoiXeCho.length`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào (hangDoiXeCho) + Xe mới thêm | Kết quả sai thực tế | Kết quả đúng mong đợi |
| :--- | :--- | :--- | :--- |
| Mảng có nhiều phần tử | `['30A-111', '29B-222']` <br> Thêm: `'43D-888'` | Xe vào sạc: `29B-222`<br>LED in ra:<br>STT 1: 30A-111<br>STT 2: 43D-888<br>STT 3: undefined | Xe vào sạc: `30A-111`<br>LED in ra:<br>STT 1: 29B-222<br>STT 2: 43D-888 |
| Mảng rỗng ban đầu | `[]` <br> Thêm: `'43D-888'` | Xe vào sạc: `undefined`<br>LED in ra:<br>STT 1: 43D-888<br>STT 2: undefined | Xe vào sạc: `undefined`<br>LED in ra:<br>STT 1: 43D-888 |