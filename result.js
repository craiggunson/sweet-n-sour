/* eslint-disable require-jsdoc */
var result
var ctx = document.getElementById('canvas').getContext('2d')
const ssapi = { endpoint: 'https://32qkdka3drhwrdghwx2stlabk4.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  token: 'da2-ymyqn5jb7nb7pmrk3ugx5w42fy' }
// eslint-disable-next-line no-unused-vars
function getresult () {
  var xhr = new XMLHttpRequest()
  console.log('getting some results')

  xhr.open('POST', ssapi.endpoint, true)
  xhr.setRequestHeader('x-api-key', ssapi.token)
  xhr.onreadystatechange = function () { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request finished. Do processing here.
      result = JSON.parse(this.response)
      console.log('status', this.status)
      var test
      var loop
      var unwrap
      var sweetdata = []
      var sourdata = []
      var timedata = []
      var resultdata = result.data.listFeedbacks
      for (unwrap in resultdata) {
        test = resultdata[unwrap]
        for (loop in test) {
          sweetdata.push(test[loop].sweet)
          sourdata.push(test[loop].sour)
          timedata.push(test[loop].when)
        }
      }
      console.log('sweetdata', sweetdata)
      console.log('sourdata', sourdata)
      console.log('timedata', timedata)

      var config = {
        type: 'line',
        data: {
          labels: timedata,
          datasets: [{
            label: 'sweet',
            backgroundColor: '#ff0000',
            borderColor: '#ff00aa',
            data: sweetdata,
            fill: false
          }, {
            label: 'sour',
            fill: false,
            backgroundColor: '#0000ff',
            borderColor: '#aa00ff',
            data: sourdata
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'sweet and sour'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        }
      }

      // eslint-disable-next-line no-undef
      window.myLine = new Chart(ctx, config)
    }
  }
  // eslint-disable-next-line no-useless-escape
  xhr.send('{\"query\":\"query listFeedbacks {\\n  listFeedbacks {\\n    items {\\n      id\\n      when\\n      sweet\\n      sour\\n    }\\n  }\\n}\\n\"}')
}

getresult()
