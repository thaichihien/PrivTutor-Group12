# PrivTutor-Group12


## Thư viện tiện ích :
- **nodemon** : dùng để khi sửa code thì server tự restart. Cách tải : `npm install -g nodemon`. Cách này cài một lần duy nhất lần sau khỏi cài (-g là lưu global). Khi muốn **tự mình restart server tay** thì dùng lệnh `rs`
- **pnpm** : dùng để đỡ tốn bộ nhớ máy khi mỗi project web phải cài thư viện riêng, cái này nó gom thư viện chung một chỗ, thằng nào cần thì hú. Cách cài : `npm install -g pnpm`. Sau đó muốn cài thư viện nào thì thay vì `npm install <tên thư viện>` thì sử dụng `pnpm install <tên thư viện>`
## Cài đặt biến môi trường:
Biến môi trường giúp cho việc bảo mật, config theo máy của mình, tránh lộ ra trong code hay push lên github,... Ở đây sẽ dùng cho config database
- Tạo file đặt là `.env` ở thư mục server
- Nhập các thông tin sau vào file đó :
```
DB_HOST = 'localhost'
DB_NAME="privtutor_db"
DB_PORT="5432"
DB_USERNAME = 'tên tài khoản postgres (nếu không có thì để mặc định là postgres'
DB_PASSWORD = 'mật khẩu postgres'
```
## Chạy Server

- Nhớ dẫn cmd đến thư mục server trước, ví dụ khi mở folder này trên vscode nhấn " ctrl + shift + ` " và chạy cmd:

`cd server`

- Chạy lệnh cài các thư viện:

`npm install` 

hoặc 

`pnpm install` (nếu đã cài pnpm)

- Chạy lệnh sau để chạy server:

`npm start` (nếu đã cài nodemon)

hoặc

`node server.js` (chạy k có nodemon)

- Nếu hiện lện `listening at http://localhost:3000` thì đã thành công nhấn vào http://localhost:3000 để mở web
## Lưu ý
- Mở VScode ra làm thì trước tiên &rarr; **FETCH**: để kiếm tra trên github có thay đổi gì không (bước này để chuẩn bị backup trước khi pull nếu confilct), nếu có thì **PULL**: lấy code trên github về máy
- Làm xong một chức năng, một hàm rồi (***Không bị lỗi compile***) &rarr; **COMMIT** và **PUSH**
- Chỉ nên làm trên **file mình được giao**, cần chỉnh file khác thì báo trước
- Deadline luôn là tối ngày hôm đó phải có
## Mục tiêu:
- [ ] Xem tất cả khóa học ở trang chủ
- [ ] Xem trang chi tiết của một khóa học
- [ ] Mua một khóa học
## Công việc:
<details>
    <summary> <b>1. Viết câu truy vấn, sửa csdl cho trang chủ</b> </summary>
    <ul>
        <li>Người làm: Hùng</li>
        <li>Mô tả:
            <ul>
                <li>Xem yêu cầu tại file</li>
            </ul>
        </li>
        <li>File làm việc: /server/controllers/dataController.js</li>
        <li>Deadline: 30/12/2022</li>
    </ul>
    </details>