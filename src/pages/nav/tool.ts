export function getHashColor(hash: string) {
  const color = hash.split('').reduce((acc, cur) => {
    return acc + cur.charCodeAt(0)
  }, (Math.random() * 360) * Math.random())
  return {
    backgroundColor: `hsl(${color % 360}, 100%, 90%)`,
  }
}
