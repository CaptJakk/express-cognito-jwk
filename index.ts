import * as jwt from 'express-jwt'
import * as jwksClient from 'jwks-rsa'

export default function(poolId: string, clientId: string, property: string) {
  const region = poolId.split('_')[0]
  if (!region) {
    throw new Error('Invalid Pool Id')
  }
  const url = `https://cognito-idp.${region}.amazonaws.com/${poolId}/.well-known/jwks.json`
  return jwt({
    secret: jwksClient.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksUri: url
    }),
    requestProperty: property,
    audience: clientId,
    issuer: `https://cognito-idp.${region}.amazonaws.com/${poolId}`,
    algorithms: ['RS256']
  })
}