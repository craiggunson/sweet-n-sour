/* eslint-disable require-jsdoc */
var when
var sweet
var sour
const ssapi = { endpoint: 'https://43aods3klff3nofktl2qh2flvq.appsync-api.ap-southeast-2.amazonaws.com/graphql', 
  token: 'da2-yd3isv3azzbshp6hmys4m2wnxe' }

// eslint-disable-next-line no-unused-vars
function givefeedback (x, y) {
  when = Date.now()
  sweet = x
  sour = y
  var xhr = new XMLHttpRequest()
  console.log('when=' + when, 'sweet=' + x, 'sour=' + y)

  xhr.open('POST', ssapi.endpoint, true)
  xhr.setRequestHeader('x-api-key', ssapi.token)
  xhr.onreadystatechange = function () { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request finished. Do processing here.
      console.log('status', this.status)
    }
  }
  // eslint-disable-next-line no-useless-escape
  xhr.send('{\"query\":\"mutation createFeedback($createfeedbackinput: CreateFeedbackInput!) {\\n  createFeedback(input: $createfeedbackinput) {\\n    id\\n    whenclick\\n    sweet\\n    sour\\n  }\\n}\\n\\n\\n",\"variables\":{\"createfeedbackinput\":{\"id\":\"not-used\",\"whenclick\":' + when + ',\"sweet\":' + sweet + ',\"sour\":' + sour + '}},\"operationName\":\"createFeedback\"}')
}
