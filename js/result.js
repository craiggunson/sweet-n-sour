/* eslint-disable require-jsdoc */
var result
var ctx = document.getElementById('canvas').getContext('2d')
const ssapi = { endpoint: 'https://43aods3klff3nofktl2qh2flvq.appsync-api.ap-southeast-2.amazonaws.com/graphql', 
  token: 'da2-yd3isv3azzbshp6hmys4m2wnxe' }

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
      var resultdata = result.data.getFeedback
      for (unwrap in resultdata) {
        test = resultdata[unwrap]
        for (loop in test) {
          sweetdata.push(test[loop].sweet)
          sourdata.push(test[loop].sour)
          var convertdate = new Date(test[loop].whenclick)
          var converteddate = convertdate.getDate()+'/'+(convertdate.getMonth()+1)+' '+convertdate.getHours()+':'+convertdate.getMinutes()+':'+convertdate.getSeconds()
          timedata.push(converteddate)
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
            backgroundColor: '#ff0055',
            borderColor: '#ff00aa',
            data: sweetdata,
            fill: true
          }, {
            label: 'sour',
            fill: true,
            backgroundColor: '#7700ff',
            borderColor: '#aa00ff',
            data: sourdata
          }]
        },
        options: {
          responsive: true,
          title: {
            display: false,
            text: 'Sweet and Sour'
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
                labelString: 'Time'
              }
            }],
            yAxes: [{
              stacked: true,
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
  xhr.send('{\"query\":\"query getFeedback {\\n  getFeedback  (id: \\\"da2-yd3isv3azzbshp6hmys4m2wnxe\\\", whenclick: 1558672332906) {\\n    items {\\n      id\\n      whenclick\\n      sweet\\n      sour\\n    }\\n  }\\n}\\n\"}')
}

getresult()
