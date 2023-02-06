import React, { useState } from 'react'

function Textform(props) {
    const [Text, setText] = useState("")

    const changeHandle = (e) => {
        let newText = e.target.value;
        setText(newText);
    }

    const changetoUpper = () => {
        setText(Text.toUpperCase());
    }
    const changetoLower = () => {
        setText(Text.toLowerCase());
    }
    const copytext = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied", 'success');
    }
    const clearSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const clearText = () => {
        setText('');
    }
    const capitalwords = () => {      // Function to capitalize the first letter of each word in textarea
        let arr = Text.split(' ');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return setText(arr.join(" "));
    }
    return (
        <>
            <div className="container my-5" style={{ color: `${props.mode === 'light' ? 'black' : 'wheat'}` }}>
                <h1>Text for Analyze</h1>
                <div className=" my-3">
                    <textarea id="textarea" className="form-control" placeholder="Enter Your text here..." style={{ height: "30vh", backgroundColor: `${props.mode === 'light' ? 'white' : '#0e0d25'}`, color: `${props.mode === 'light' ? 'black' : 'wheat'}` }} onChange={changeHandle} value={Text}></textarea>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={changetoUpper}>Convet to Uppercase</button>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={changetoLower}>Convert to Lowercase</button>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={clearSpaces}>Remove extra spaces</button>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={capitalwords}>Capitalize each Word</button>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={copytext}>Copy Text</button>
                    <button disabled={Text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={clearText}>Clear Text</button>
                </div>
                <h1>Text Summary</h1>
                <p > {Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {Text.length - Text.split(" ").filter((element) => { return element !== " " }).length + 1} chars</p>
                <h1>Preview</h1>
                <p>{Text.length - Text.split(" ").length <= 0 ? "Please write something to preview" : Text}</p>
            </div>
        </>
    )
}

export default Textform