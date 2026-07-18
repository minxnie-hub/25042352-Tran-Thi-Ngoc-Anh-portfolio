# Trần Thị Ngọc Anh · Portfolio NMCNS & AI

Portfolio học tập của **Trần Thị Ngọc Anh — MSSV 25042352 — Lớp học phần VNU1001_E252058**, Khoa Ngôn ngữ và Văn hóa Hàn Quốc, Trường Đại học Ngoại ngữ — ĐHQGHN.

## Thiết kế

- Concept: **Ethereal Luminescence + Glassmorphism**.
- Màu chủ đạo: Midnight Blue, Royal Blue, Sky, Porcelain và glow holographic nhẹ.
- Bìa Bài 1–6 được dựng riêng bằng HTML/CSS theo cùng hệ thống Ethereal, không còn sử dụng ảnh chụp trang PDF.
- Font nội dung dùng Epilogue được đóng gói qua `next/font/local`; tiêu đề dùng serif hệ thống hỗ trợ đầy đủ dấu tiếng Việt.

## Chạy local

```bash
npm ci
npm run dev
```

## Build tĩnh

```bash
npm run build
```

Source đã có workflow `.github/workflows/deploy.yml` để deploy tự động lên GitHub Pages. Workflow tự tính `basePath` theo tên repository.
