sweet-n-sour
===================

![Build Status](https://codebuild.ap-southeast-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiampCcndST2lUUWhzUkVaYjMrU1BkRk9zUVhKSVpPUVJ6bzR5QU9ob2pRWnlVcWZLb3lORktWRGV4UXdNSkZlcUx0YVZaTXZKbE45QXEyajVVSU8xTnpNPSIsIml2UGFyYW1ldGVyU3BlYyI6ImoyN3Z5aVo2NnNveDRIK1AiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)


#### A ONE click feedback tool. 

## The problem
Surveys take too long, five star feedback is too narrow not taking into account the range of possibilities.

## The solution
A ONE click feed back two with all kinds of emotinos, you choose.

## Score
Results are recorded via (GraphQL) as x/y co-ordinates and open to just about any interpretation.

## Tokens
This is just a draft, if I had (more) time a token (or oauth) page could be used to provide a multi-tennant app.  The back-end data structure already supports this.



```js
const ssapi = { endpoint: 'https://yourendpoint.appsync-api.ap-southeast-2.amazonaws.com/graphql', 
  token: 'da2-yourtoken' }
```



![Sample](sweet-n-sour.png)
