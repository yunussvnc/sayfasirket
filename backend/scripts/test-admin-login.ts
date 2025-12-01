// Usage: npx tsx scripts/test-admin-login.ts <url> <username> <password>
const [,, urlArg, usernameArg, passwordArg] = process.argv;

const url = urlArg || 'http://localhost:3000/api/admin/login';
const username = usernameArg || 'admin';
const password = passwordArg || 'password';

async function run() {
  try {
    console.log(`Testing login on ${url} with user=${username}`);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json().catch(() => ({}));
    console.log('Status:', res.status);
    console.log('Response:', data);
  } catch (err) {
    console.error('Test error:', err);
    process.exit(1);
  }
}

run();
