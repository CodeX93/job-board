#!/usr/bin/env node

/**
 * Script to manually trigger revalidation of pages
 * Usage: node scripts/revalidate.js [path] [secret]
 */

const https = require('https');
const http = require('http');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'your-secret-key';

async function revalidatePath(path = '/', secret = REVALIDATION_SECRET) {
  const url = new URL('/api/revalidate', BASE_URL);
  
  const postData = JSON.stringify({
    path,
    secret
  });

  const options = {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 3000),
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = (url.protocol === 'https:' ? https : http).request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({ status: res.statusCode, data: response });
        } catch (error) {
          resolve({ status: res.statusCode, data: { message: data } });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  const path = process.argv[2] || '/';
  const secret = process.argv[3] || REVALIDATION_SECRET;

  console.log(`Revalidating path: ${path}`);
  console.log(`Using base URL: ${BASE_URL}`);

  try {
    const result = await revalidatePath(path, secret);
    
    if (result.status === 200) {
      console.log('✅ Revalidation successful!');
      console.log('Response:', result.data);
    } else {
      console.log('❌ Revalidation failed!');
      console.log('Status:', result.status);
      console.log('Response:', result.data);
    }
  } catch (error) {
    console.error('❌ Error during revalidation:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { revalidatePath }; 