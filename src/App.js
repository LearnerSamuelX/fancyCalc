/* eslint-disable no-eval */
/* eslint-disable no-lone-blocks */
/* 2nd phase of the = sign Algorithm */
import React, {useState} from 'react';
import './App.css';

{/* Display, Buttons */}
function App() {
    const [display,setDisplay]=useState('')
    const [result,setResult]=useState('------')//Result it is NOT VISIBLE on the Website
    const [input_list,setInput]=useState(['0'])
    const [num_list,setNumList]=useState([]) //updated when click NUMBER buttons
    const [multi_dig_list,setMulList]=useState([]) //updated when click CALC and EQUAL buttons

    const value =(e)=>{
      //need an if statement, non-zero number followed by a reset; 0 followed by no-reset
      if(result===display && result!=='------'){
        setMulList([])
        setDisplay(e.target.value);
        setInput(input_list.concat(e.target.value))
        setNumList(num_list.concat(e.target.value))
      }
      else{
        setDisplay(display+e.target.value)
        setInput(input_list.concat(e.target.value))
        setNumList(num_list.concat(e.target.value))
      }
    }

/* ^_^ for the part below, you might have to create another array, so that WHENEVER YOU PRESS THE CALC 
BUTTON OR EQAUL BUTTON, the numbers will be reduced to one singular element ^_^ */
    const calc=(e)=>{
      setDisplay(display+e.target.value)
      setInput(input_list.concat(e.target.value))
      setMulList((multi_dig_list.concat(num_list.join(''))).concat(e.target.value))
      setNumList([])
    }
    
    const equal =(e)=>{
      let len_1 = input_list.length;
      let len_2 = multi_dig_list.length;
      if(input_list[len_1-1]==='='){
        setDisplay(eval(display+multi_dig_list[len_2-2]+multi_dig_list[len_2-1]))
        setResult(eval(display+multi_dig_list[len_2-2]+multi_dig_list[len_2-1]))
        setNumList([])
      }else{
        setDisplay(eval(display))
        setResult(eval(display))
        setInput(input_list.concat(e.target.value))
        setMulList(multi_dig_list.concat(num_list.join('')))
        setNumList([])
      }
    }
  
  //invent the algorithm below for type_in calculation
  const num_typing=(e)=>{
    setDisplay(e.target.value)
  }

  const clear=()=>{
      setDisplay('')
      setResult('------')
      setInput(['0'])
      setMulList([])
      setNumList([])
    }

  return (
    <div className="App">
        <h1>Fancy Calculator</h1>
        <div className='display-1'>
          <input className='screen-display' type='text' value={display} onChange={num_typing}/>
        </div>
        <div className='buttons-container'>
          <div className='buttons'>
            <button onClick={value} value='1'>1</button>
            <button onClick={value} value='2'>2</button>
            <button onClick={value} value='3'>3</button>
            <button onClick={value} value='4'>4</button>
            <button onClick={value} value='5'>5</button>
            <button onClick={value} value='6'>6</button>
            <button onClick={value} value='7'>7</button>
            <button onClick={value} value='8'>8</button>
            <button onClick={value} value='9'>9</button>
            <button onClick={value} value='0'>0</button>
            {/*reset button is needed*/}
            <button onClick={clear} value='C'>C</button>
            <button onClick={calc} value='+'>+</button>
            <button onClick={calc} value='-'>-</button>
            <button onClick={calc} value='*'>x</button>
            <button onClick={calc} value='/'>/</button>
            <button onClick={equal} value='='>=</button>
          </div>
        </div>

        {/*When work on the algorithm, you can turn off the comment mode for the 
        following part */}
        {/*
        <div className='display-2'>
          <p>Prototype Parameters:</p>
          <input className='list-display' type='text' value={input_list}/>
          <input className='num-list-display'type='text' value={num_list}/>
          <input className='mul-list-display'type='text' value={multi_dig_list}/>
        </div>
        */}
    </div>
  );
}

export default App;
