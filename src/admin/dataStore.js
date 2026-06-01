import defaults from '../data.json'

const STORAGE_KEY = 'site_data'
let publishedData = null

export function setPublishedData(data) {
  publishedData = data
}

function getBaseData() {
  return publishedData || defaults
}

export function getData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      return deepMerge(structuredClone(getBaseData()), saved)
    }
  } catch {}
  return structuredClone(getBaseData())
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  return data
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY)
  return structuredClone(getBaseData())
}

export function exportData() {
  const data = getData()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `site-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function importData(json) {
  try {
    const parsed = JSON.parse(json)
    saveData(parsed)
    return true
  } catch {
    return false
  }
}

export function getDefault(key) {
  return structuredClone(getBaseData()[key])
}

function deepMerge(target, source) {
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

export async function publishToGitHub(data, token, owner, repo, message) {
  const path = 'src/data.json'
  const encoder = new TextEncoder()
  const bytes = encoder.encode(JSON.stringify(data, null, 2))
  const base64 = btoa(String.fromCharCode(...bytes))

  let sha = null
  try {
    const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (getRes.ok) {
      const fileData = await getRes.json()
      sha = fileData.sha
    }
  } catch {}

  const body = { message, content: base64 }
  if (sha) body.sha = sha

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `GitHub API error: ${res.status}`)
  }

  setPublishedData(data)
  return res.json()
}

export { defaults }
