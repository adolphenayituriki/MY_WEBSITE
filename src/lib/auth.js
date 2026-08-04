const ADMIN_PASSWORD_HASH = '5449f8dbac05f2964058c669428d3cb4239d108a7a74f2d7e43f63f0a7509bef'

async function sha256(input) {
  const data = new TextEncoder().encode(input)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function verifyPassword(input) {
  return (await sha256(input)) === ADMIN_PASSWORD_HASH
}

export function isAuthed() {
  return sessionStorage.getItem('admin_authed') === 'true'
}

export function setAuthed(value) {
  if (value) sessionStorage.setItem('admin_authed', 'true')
  else sessionStorage.removeItem('admin_authed')
}
