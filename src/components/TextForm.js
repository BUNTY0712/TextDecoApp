import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
    // alert("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLoClick = () =>{
    // alert("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerercase", "success");
  }
  const handleClear = () =>{
    // alert("Uppercase was clicked " + text);
    let newText = (" ");
    setText(newText)
    props.showAlert("Clear all Data ", "success");
  }
  const handleOnChange = (event) =>{
    // alert("On Change")
    setText(event.target.value);
  }
  const handleCopy = () =>{
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy all Data ", "success");
  }

   const handleExtraSpaces = () => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Remove all extra spaces ", "success");
   }
  const [text, setText] = useState('');
  // setText=("new text");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}
          id="myBox">
        <h2 className="mb-3" >{props.heading}- </h2>
      <div className="mb-3">
        <textarea
          className="form-control" value={text}
          onChange={handleOnChange}  
          style={{background: props.mode ==='dark'?'#13466a':'white',color: props.mode ==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea> 
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
    </div>

    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text summary </h2>
      <p> {text.split(/\s+/).filter((element)=>{
        return element.length!==0
      }).length} words and {text.length} characters </p>
      <p> {0.008 * text.split(" ").filter((element)=>{
        return element.length!==0
      }).length } Minutes to read </p>
      <h3> Preview </h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
