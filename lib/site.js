export const SITE = {
  name: 'Trần Thị Ngọc Anh',
  shortName: 'Ngọc Anh',
  studentId: '25042352',
  birthday: '28/10/2007',
  faculty: 'Khoa Ngôn ngữ và Văn hóa Hàn Quốc',
  university: 'Trường Đại học Ngoại ngữ - ĐHQGHN',
  email: 'nasiee281@gmail.com',
  phone: '0354439809',
  tagline: 'Ghi lại hành trình học tập bằng ngôn ngữ, công nghệ và một chút ánh sao.',
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path = '') {
  if (!path) return basePath || '/';
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
