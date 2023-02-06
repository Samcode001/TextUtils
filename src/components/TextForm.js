import React, { useState } from 'react'  // The {useState} is Hook which can help us to use the properties of class components 

export default function TextForm(props) {
  const [Text, setText] = useState("");  // Text is a var and setText is a func() To Update the state of var

  const clickUpHandle = () => {
    //  console.log("Uppercase Button Clicked");
    //  Text="Update text"; // This is wrong in React
    //  setText("Hello Text"); // By this Method we can update the text
    setText(Text.toUpperCase());
    props.showAlert("All Uppercase Characters", "success")
  }

  const clickLowHandle = () => {
    setText(Text.toLowerCase());
    props.showAlert("All Lowercase Characters", "success")
  }

  const changeHandle = (e) => {
    // console.log("Change fired ");
    let newText = e.target.value;        // General method to update the textarea 
    setText(newText);
  }

  const copyHandle = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text Copied!", "success");
  }

  const clearHandle = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const spaceHandle = () => {
    let newText = Text.split(/[ ]+/);  // It splits para wher the extra whiteapces are []+ means more than one space 
    setText(newText.join(" "));// It joins the whole splitted para with only one space i.e removing extra spaces
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div className='container' style={props.mode === "dark" ? { backgroundColor: '#0e0d25', color: "white" } : { backgroundColor: 'white', color: "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="textArea" value={Text} onChange={changeHandle} style={props.mode === "dark" ? { backgroundColor: '#181429', color: "white" } : { backgroundColor: 'white', color: "black" }} rows="8"></textarea>
          <button disabled={Text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : "light"} my-2 mx-2`} onClick={clickUpHandle}>Convet to Uppercase</button>
          <button disabled={Text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : "light"} my-2 mx-2`} onClick={clickLowHandle}>Convet to Lowecase</button>
          <button disabled={Text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : "light"} my-2 mx-2`} onClick={copyHandle}>Copy Text</button>
          <button disabled={Text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : "light"} my-2 mx-2`} onClick={spaceHandle}>Remove Extra Spaces</button>
          <button disabled={Text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : "light"} my-2 mx-2`} onClick={clearHandle}>Clear Text</button>
        </div>
        <h2>Text Summary</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {Text.length-Text.split(" ").filter((element)=>{return element!==" "}).length+1} characters</p>
        <p>{0.008 * Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{Text.length-Text.split(" ").length > 0 ? Text : "Enter some text to preivew here"}</p>
      </div>
    </>


  )
}
