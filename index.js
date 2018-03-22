"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("express-jwt");
const jwksClient = require("jwks-rsa");
function default_1(poolId, clientId) {
    // https://cognito-idp.us-west-2.amazonaws.com/us-west-2_HOVCUPEvz/.well-known/jwks.json
    const region = poolId.split('_')[0];
    const url = `https://cognito-idp.${region}.amazonaws.com/${poolId}/.well-known/jwks.json`;
    return jwt({
        secret: jwksClient.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksUri: url
        }),
        audience: clientId,
        issuer: `https://cognito-idp.${region}.amazonaws.com/${poolId}`,
        algorithms: ['RS256']
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map