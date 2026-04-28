const { version } = require('./package.json');
const fs = require('fs');

const swContent = fs.readFileSync('./sw.js', 'utf-8');
const injected = swContent.replace('__SW_VERSION__', version);
fs.writeFileSync('./public/sw.js', injected);

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_APP_VERSION: version,
    },
}
module.exports = nextConfig
