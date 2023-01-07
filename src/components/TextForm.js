import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    // console.log("uppercase clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleSentanceCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted to sentance case", "success");
  };

  const copyToClipboard = () => {
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleFirstCapital = () => {
    // console.log("uppercase clicked")
    let newText = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("First letter capitalized", "success");
  };

  // const removeExtraSpace = () => {
  //   let newText = text.split(/[ ]+/);
  //   setText(newText.join(" "));
  //   props.showAlert("Extra space removed", "success");
  // };
  
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "warning");
  };
  const handleOnChange = (event) => {
    // console.log("Change in textarea")
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1 className="mb-3">{props.heading}</h1>
          <textarea
            className="form-control"
            id="textarea"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#4a525b",
              color: props.mode === "dark" ? "white" : "black"
            }}
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`}

          // "btn btn-${props.mode === "light"?"dark":"light"} mx-1 mb-1"
          onClick={handleUppercaseClick}
        >
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`}
          onClick={handleLowercaseClick}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`}
          onClick={handleSentanceCase}
        >
          Convert to Sentance case
        </button>
        {/* <button
          className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`}
          onClick={removeExtraSpace}
        >
          Remove extra spaces
        </button> */}
        <button disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`}
          onClick={handleFirstCapital}
        >
          Capitalize first letter of each word
        </button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark"?"secondary":"light"} mx-1 mb-1`} onClick={copyToClipboard}>
          Copy to clipboard
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear textarea
        </button>
        </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text Summary:</h1>
        <p>Number of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
        <p>Number of characters: {text.length}</p>
        {/* <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p> */}
        <h3>Preview: </h3>
        <p style={{fontSize: "1.1rem"}}>{text==="Enter text here"?"Enter some text in textarea to preview it here":text}</p>
      </div>
    </>
  );
}
