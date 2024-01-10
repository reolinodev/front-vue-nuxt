// 브라우저 체크
export function getDeviceBrowser(): string {
  const browsers = [
    'Chrome',
    'Opera',
    'WebTV',
    'Whale',
    'Beonex',
    'Chimera',
    'NetPositive',
    'Phoenix',
    'Firefox',
    'Safari',
    'SkipStone',
    'Netscape',
    'Mozilla'
  ]

  const userAgent: string = window.navigator.userAgent.toLowerCase()

  if (userAgent.includes('edg')) {
    return 'Edge'
  }

  if (userAgent.includes('trident') || userAgent.includes('msie')) {
    return 'Internet Explorer'
  }

  return (
    browsers.find((browser: string) =>
      userAgent.includes(browser.toLowerCase())
    ) || 'Other'
  )
}

// 디바이스 체크
export function getLoginDevice(): string {
  const user: string = navigator.userAgent
  let device: string = 'WEB'

  if (user.includes('iPhone') || user.includes('Android')) {
    device = 'MOBILE'
  }

  return device
}
