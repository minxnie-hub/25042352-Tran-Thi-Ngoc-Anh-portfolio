# Portfolio Trần Thị Ngọc Anh - 25042352

Portfolio môn Nhập môn Công nghệ số và Trí tuệ nhân tạo của sinh viên Trần Thị Ngọc Anh, Khoa Ngôn ngữ và Văn hóa Hàn Quốc, Trường Đại học Ngoại ngữ - ĐHQGHN.

## Chạy tại máy

```bash
npm ci
npm run dev
```

## Build bản tĩnh

```bash
npm run build
```

Thư mục xuất bản nằm tại `out/`.

## Deploy GitHub Pages

Repository đã có sẵn workflow `.github/workflows/deploy.yml`.

1. Đẩy source lên nhánh `main`.
2. Vào **Settings → Pages**.
3. Ở **Build and deployment**, chọn **GitHub Actions**.
4. Mỗi lần push, workflow sẽ tự build và deploy.

Workflow tự nhận tên repository để cấu hình `basePath`, nên ảnh, favicon, PDF và các trang chi tiết đều hoạt động khi site được đặt trong đường dẫn con của GitHub Pages.
