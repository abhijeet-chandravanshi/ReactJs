import React ,{useState} from 'react';

export default function TextForm(props) {
  const [text,setText]=useState("Enter text here");
  const handleUpClick= ()=>{
    console.log("Hii")
    let newText=text.toUpperCase();
    setText(newText)
    
    
  }
  const handleMulClick= ()=>{
    console.log("Hii")
    let newText=(text*3).toString();
    setText(newText)
    
    
  }
  const handlerOnChange=(event)=>{
    console.log("Onchange")
    setText(event.target.value)
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  return (
    <>
    <div className='container'>
      <h1 className="text-info">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handlerOnChange} id="myBox" rows="8"></textarea>
      </div>
      <ul>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Capital</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Small</button>
        <button type="button" className="btn btn-danger mx-2" onClick={handleMulClick}>Multiply</button>
      </ul>
    </div>
    <div className="container">
      <p> {text.split(" ").length}  words {text.length} characters</p>
      <p>Summary</p>
      <p>{text}</p>
    </div>
    </>
  )
}
