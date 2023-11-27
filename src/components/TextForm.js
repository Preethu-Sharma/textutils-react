import React, {useState} from "react";
export default function TextForm(props) {
    const handleUpClick = (event)=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleDownClick = (event)=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");
    }
    const On_change = (event)=>{
        setText(event.target.value);
    }
    const handleclearText = (event)=>{
        setText("");
        props.showAlert("WorkSpace has been Cleared!","success");
    }
    const handleCapitalize = (event)=>{
          props.showAlert("Your Paragraph has been capitalized from word to word","success");
          let capText = text.split(" ");
          capText = capText.map((element)=>{
          return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        })
          capText = capText.join(" ");
          setText(capText);
    }
    const handleCopy = ()=>{
      let textBox = document.getElementById('exampleFormControlTextarea1');
      textBox.select();
      navigator.clipboard.writeText(textBox.value);
      props.showAlert("Message copied to clipbaord!","success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[  ]+/);    // regex used
      setText(newText.join(" "));
      props.showAlert("Extra Spaces has been removed!","success");
    }

    const [text,setText] = useState("");
    // text = "hlo world";  // wrong way of changing state varaible
    // setText("hlo world");  // correct way of changing state varaible

    
  return (
    <>
      <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={On_change}
          style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mt-3" onClick={handleclearText}>Clear Text</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleCapitalize}>Capitalize Para</button>
        <button className="btn btn-primary mt-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container mt-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text Summary</h1>
        <p>{text.length>0 ? `${text.split(" ").length} words & ${text.length} characters` : `${0} words & ${0} characters`}</p>
        <p>{`Approx. time to read:- ${text.length>0 ? text.split(' ').length * 0.24 : 0} seconds`}</p>
        <h3>Preview:-</h3>
        <p>{text.length>0?text:"Enter the text in above text box to preview it here"}</p>
      </div>
      </>
  );
}
