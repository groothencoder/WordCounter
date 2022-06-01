import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick =() =>{
    console.log("Upper Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleloClick =() =>{
    console.log("Upper Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleonclear =() =>{
    console.log("Upper Was Clicked" + text);
    let newText = ' ';
    setText(newText)
  }

  
  const handleOnChange =(event) =>{
    console.log("on Chnage");
    setText(event.target.value);
  }
  

  const [text, setText] = useState('Enter The Text Here For The Conversion');
  return (
    <>
    <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
    
    <textarea className="form-control"  value ={text}  onChange ={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
    <button className="btn btn-primary mx-2" on onClick={handleUpClick}>convert to the UpperCase</button>
    <button className="btn btn-primary mx-2" on onClick={handleloClick}>convert to the LowerCase</button>
    <button className="btn btn-primary mx-2" on onClick={handleonclear}>Clear Text </button>
    
    
  </div>
  <div className="container mx-2">
    <h1>Your Text Summery</h1>
    <p>
      {text.split(" ").length} Words and {text.length} characters
    </p>
    <p>
      {0.008 * text.split(" ").length} MInutes read
    </p>
    <h2>
      preview
    </h2>
    <p>
      {text}
    </p>
  </div>
  </>
  )
}
