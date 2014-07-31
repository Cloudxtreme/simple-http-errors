# Simple HTTP Errors

A simple error maker thingy.


# Codes

    UNAUTHORIZED: 401
    NOT_FOUND: 404
    UNPROCESSABLE_ENTITY: 422

(more coming as needed)


# Use

```javascript
var errors = require('simple-http-errors');

//...
if (item === undefined) {
  return next(errors.notFound());
}
```