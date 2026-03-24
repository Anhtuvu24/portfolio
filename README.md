# Vũ Anh Tú — Portfolio

Portfolio cá nhân xây dựng bằng **Next.js 14**, TypeScript, và Tailwind CSS.

## 🚀 Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## 🏗️ Build production

```bash
npm run build
npm start
```

## 📁 Cấu trúc

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Main page
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # SEO robots.txt
├── components/
│   ├── StarField.tsx    # Canvas animation bầu trời sao
│   ├── Nav.tsx          # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Timeline kinh nghiệm
│   ├── Projects.tsx     # Dự án
│   ├── Skills.tsx       # Kỹ năng
│   └── Contact.tsx      # Liên hệ
├── hooks/
│   └── useReveal.ts     # Scroll animation hook
└── public/
    └── (thêm ảnh vào đây)
```

## 🎨 Cá nhân hóa

1. **Ảnh đại diện**: Thêm ảnh vào `/public/avatar.jpg` và cập nhật `About.tsx`
2. **GitHub link**: Thêm vào phần Contact trong `Contact.tsx`
3. **Domain**: Đổi `vuanhtu.dev` thành domain thực của bạn trong `layout.tsx`, `sitemap.ts`
4. **OG Image**: Tạo ảnh 1200x630px, lưu vào `/public/og-image.png`

## 🌐 Deploy (Vercel — miễn phí)

```bash
npm i -g vercel
vercel
```

## ✅ SEO đã có sẵn

- `<title>` và `<meta description>` tối ưu
- Open Graph (Facebook/LinkedIn preview)
- Twitter Card
- JSON-LD Schema (Person)
- Sitemap.xml tự động
- Robots.txt
- Canonical URL
- Google Fonts tối ưu với next/font
