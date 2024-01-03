export function getSessionStorage(key: string) {
  const storedData = sessionStorage.getItem(key)

  if (storedData) {
    return JSON.parse(storedData)
  }
  return {}
}

export function clearSessionStorage() {
  sessionStorage.clear()
}
