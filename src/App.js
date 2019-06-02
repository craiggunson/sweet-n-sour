import React from 'react';
import './App.css';

function App() {

/* eslint-disable require-jsdoc */
var when
var sweet
var sour
const ssapi = { endpoint: 'https://43aods3klff3nofktl2qh2flvq.appsync-api.ap-southeast-2.amazonaws.com/graphql', 
  token: 'da2-uki3whcfezh5fdxbu274svnx5a' }

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






  return (
    <div className="App">
     
  <div className="grid-container">
    <div className="title">
      <h2>糖醋</h2>
    </div>
    <div className="yaxis">
      <i className='fas fa-angle-double-left'></i>
      SOUR
      <i className='fas fa-angle-double-left'></i>
    </div>
    <div className="xaxis">
      <i className='fas fa-angle-double-right'></i>
      SWEET
      <i className='fas fa-angle-double-right'></i>

    </div>
    <div className="buttons">

      <div className="wrapper">
        <div className="box" id="box1" onClick={() => {givefeedback(1,5)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box2" onClick={() => {givefeedback(1,4)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box3" onClick={() => {givefeedback(1,3)}}>
          <i className='far fa-meh'></i>
        </div>
        <div className="box" id="box4" onClick={() => {givefeedback(1,2)}}>
          <i className='far fa-frown'></i>
        </div>
        <div className="box" id="box5" onClick={() => {givefeedback(1,1)}}>
          <i className='far fa-angry'></i>
        </div>
        <div className="box" id="box6" onClick={() => {givefeedback(2,5)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box7" onClick={() => {givefeedback(2,4)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box8" onClick={() => {givefeedback(2,3)}}>
          <i className='far fa-meh'></i>
        </div>
        <div className="box" id="box9" onClick={() => {givefeedback(2,2)}}>
          <i className='far fa-frown'></i>
        </div>
        <div className="box" id="box10" onClick={() => {givefeedback(2,1)}}>
          <i className='far fa-frown'></i>
        </div>
        <div className="box" id="box11" onClick={() => {givefeedback(3,5)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box12" onClick={() => {givefeedback(3,4)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box13" onClick={() => {givefeedback(3,3)}}>
          <i className='far fa-meh'></i>
        </div>
        <div className="box" id="box14" onClick={() => {givefeedback(3,2)}}>
          <i className='far fa-meh'></i>
        </div>
        <div className="box" id="box15" onClick={() => {givefeedback(3,1)}}>
          <i className='far fa-meh'></i>
        </div>
        <div className="box" id="box16" onClick={() => {givefeedback(4,5)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box17" onClick={() => {givefeedback(4,4)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box18" onClick={() => {givefeedback(4,3)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box19" onClick={() => {givefeedback(4,2)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box20" onClick={() => {givefeedback(4,1)}}>
          <i className='far fa-grin'></i>
        </div>
        <div className="box" id="box21" onClick={() => {givefeedback(5,5)}}>
          <i className='far fa-grin-hearts'></i>
        </div>
        <div className="box" id="box22" onClick={() => {givefeedback(5,4)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box23" onClick={() => {givefeedback(5,3)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box24" onClick={() => {givefeedback(5,2)}}>
          <i className='far fa-grin-squint'></i>
        </div>
        <div className="box" id="box25" onClick={() => {givefeedback(5,1)}}>
          <i className='far fa-grin-squint'></i>
        </div>

      </div>


    </div>
    <div className="footer">

      <a href="result.html">
        See the result here <i className='fas fa-chart-area'></i>
      </a>
    </div>
    <div className="bookend"></div>
  </div>


    </div>
  );
}

export default App;
