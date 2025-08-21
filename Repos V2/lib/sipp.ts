
import { SignJWT, jwtVerify } from 'jose'

export async function issueAccessToken(sub: string, scope: string) {
  const key = new TextEncoder().encode('dev_only_secret_change_me')
  const jwt = await new SignJWT({ scope })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30m')
    .setSubject(sub)
    .setAudience('https://api.swiftpod.com')
    .setIssuer('https://auth.swiftpod.com')
    .sign(key)
  return jwt
}

export async function verifyAccessToken(token: string){
  const key = new TextEncoder().encode('dev_only_secret_change_me')
  return jwtVerify(token, key, { audience: 'https://api.swiftpod.com', issuer: 'https://auth.swiftpod.com' })
}
