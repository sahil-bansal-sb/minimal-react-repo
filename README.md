# MINIMAL REACT REDUX APPLICATION

Added this repo for issue https://github.com/elastic/apm-agent-rum-js/issues/347

I have included the `@elastic/apm-rum-react` in `./src/routes/Route.js`
just imported it, not used it yet

still when i run `npm start` it shows the following error

```
ERROR in ./node_modules/@elastic/apm-rum-react/src/get-apm-route.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: ./node_modules/@elastic/apm-rum-react/src/get-apm-route.js: Unexpected token (39:13)

  37 |     }
  38 |     render() {
> 39 |       return <Route {...this.props} component={this.ApmComponent} />
     |              ^
  40 |     }
  41 |   }
  42 | }
    at Parser.raise (./node_modules/@babel/parser/lib/index.js:3831:17)
    at Parser.unexpected (./node_modules/@babel/parser/lib/index.js:5143:16)
    at Parser.parseExprAtom (./node_modules/@babel/parser/lib/index.js:6283:20)
    at Parser.parseExprSubscripts (./node_modules/@babel/parser/lib/index.js:5862:23)
    at Parser.parseMaybeUnary (./node_modules/@babel/parser/lib/index.js:5842:21)
    at Parser.parseExprOps (./node_modules/@babel/parser/lib/index.js:5729:23)
    at Parser.parseMaybeConditional (./node_modules/@babel/parser/lib/index.js:5702:23)
    at Parser.parseMaybeAssign (./node_modules/@babel/parser/lib/index.js:5647:21)
    at Parser.parseExpression (./node_modules/@babel/parser/lib/index.js:5595:23)
    at Parser.parseReturnStatement (./node_modules/@babel/parser/lib/index.js:7617:28)
 @ ./node_modules/@elastic/apm-rum-react/src/index.js 27:0-46 29:17-28
 @ ./src/routes/Route.js
 @ ./src/index.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 (webpack)/hot/dev-server.js ./src/index.js

ERROR in ./node_modules/@elastic/apm-rum-react/src/get-with-transaction.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: ./node_modules/@elastic/apm-rum-react/src/get-with-transaction.js: Unexpected token (69:12)

  67 |           // todo: should we pass the transaction down (could use react context provider instead)
  68 |           return (
> 69 |             <WrappedComponent transaction={this.transaction} {...this.props} />
     |             ^
  70 |           )
  71 |         }
  72 |       }
    at Parser.raise (./node_modules/@babel/parser/lib/index.js:3831:17)
    at Parser.unexpected (./node_modules/@babel/parser/lib/index.js:5143:16)
    at Parser.parseExprAtom (./node_modules/@babel/parser/lib/index.js:6283:20)
    at Parser.parseExprSubscripts (./node_modules/@babel/parser/lib/index.js:5862:23)
    at Parser.parseMaybeUnary (./node_modules/@babel/parser/lib/index.js:5842:21)
    at Parser.parseExprOps (./node_modules/@babel/parser/lib/index.js:5729:23)
    at Parser.parseMaybeConditional (./node_modules/@babel/parser/lib/index.js:5702:23)
    at Parser.parseMaybeAssign (./node_modules/@babel/parser/lib/index.js:5647:21)
    at Parser.parseParenAndDistinguishExpression (./node_modules/@babel/parser/lib/index.js:6435:28)
    at Parser.parseExprAtom (./node_modules/@babel/parser/lib/index.js:6215:21)
 @ ./node_modules/@elastic/apm-rum-react/src/index.js 26:0-60 28:24-42
 @ ./src/routes/Route.js
 @ ./src/index.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 (webpack)/hot/dev-server.js ./src/index.js
```
<br>
And when i comment the following line

```javascript
import { ApmRoute } from '@elastic/apm-rum-react';
```

it build-up, and run successfully. {with some warnings, maybe 🤐 }