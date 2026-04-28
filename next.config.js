// next.config.js
const { version } = require('./package.json');
const fs = require('fs');
const path = require('path');

// Đảm bảo public/ tồn tại trước khi ghi
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Đọc sw.js ở root → inject version → ghi vào public/
const swSource = path.join(__dirname, 'sw.js');
const swDest = path.join(__dirname, 'public', 'sw.js');

const swContent = fs.readFileSync(swSource, 'utf-8');
const injected = swContent.replace('__SW_VERSION__', version);
fs.writeFileSync(swDest, injected);

console.log(`[SW] Injected version ${version} → public/sw.js`);

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_APP_VERSION: version,
    },
};

module.exports = nextConfig;