export default interface User {
  id: string,
  name: string
}

export function createUser(): User {
// 生成する文字列の長さ
  const l = 8

// 生成する文字列に含める文字セット
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789'

  const cl = c.length
  let r = ''
  for (let i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)]
  }
  return {
    id: r,
    name: ''
  } as User
}
