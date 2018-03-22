# Use case
This library is used to validate JWT's that are issued by Amazon Cognito User Pools

```js
const cognitoValidation = require('cognito-validation-middleware-ts')
app.use('route', cognitoValidation('poolId', 'token'))
```

The above example will validate the cognito token for user pool `poolId` and attach the
claims packet to `req.token`