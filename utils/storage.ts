export function getSessionStorage(key: string) {
  const storedData: string | null = sessionStorage.getItem(key)

  if (storedData) {
    return JSON.parse(storedData)
  }
  return {}
}

export function clearSessionStorage(): void {
  sessionStorage.clear()
}
