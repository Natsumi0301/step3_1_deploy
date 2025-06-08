require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_ENDPOINT: process.env.API_ENDPOINT,
        NEXT_PUBLIC_API_ENDPOINT: "http://127.0.0.1:8000"
      },
}

module.exports = nextConfig