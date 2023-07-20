import { useState } from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState('0')
   
  const handleNumber = (event) => {
   const number = event.target.textContent;
   if (display === '0') {
   setDisplay(number);
  } else {
    setDisplay(display + number)
  }
}

 const handleOperator = (event) => {
  const operator = event.target.textContent;
  if(display !== '0') {
  setDisplay(display +' ' + operator + ' ')
  }
 }

 const handleEquals = () => {
  const result = eval(display);
  setDisplay(result)
 }

 const handleDecimal = () => {
  const array = display.split(' ');
  const lastElement = array[array.length - 1];

  if(!lastElement.includes('.') && Number.isInteger(lastElement)) {
    setDisplay(display + '.')
  }
 }


 const handleClear = () => {
  setDisplay('0')
 }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">{display}</div>
        <div id="clear" onClick={handleClear} className="row">
          AC
        </div>
        <div id="divide" onClick={handleOperator} className="row">
          /
        </div>
        <div id="multiply" onClick={handleOperator} className="row">
          *
        </div>
        <div id="seven" onClick={handleNumber} className="row">
          7
        </div>
        <div id="eight" onClick={handleNumber} className="row">
          8
        </div>
        <div id="nine" onClick={handleNumber} className="row">
          9
        </div>
        <div id="subtract" onClick={handleOperator} className="row">
          -
        </div>
        <div id="four" onClick={handleNumber} className="row">
          4
        </div>
        <div id="five" onClick={handleNumber} className="row">
          5
        </div>
        <div id="six" onClick={handleNumber} className="row">
          6
        </div>
        <div id="add" onClick={handleOperator} className="row">
          +
        </div>
        <div id="one" onClick={handleNumber} className="row">
          1
        </div>
        <div id="two" onClick={handleNumber} className="row">
          2
        </div>
        <div id="three" onClick={handleNumber} className="row">
          3
        </div>
        <div id="equals" onClick={handleEquals} className="row">
          =
        </div>
        <div id="zero" onClick={handleNumber} className="row">
          0
        </div>
        <div id="decimal" onClick={handleDecimal} className="row">
          .
        </div>
      </div>
    </div>
  );
}

export default App;
