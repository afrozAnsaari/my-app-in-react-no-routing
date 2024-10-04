import React, { useState } from 'react';

export default function Textform(props) {

    const [text, setText] = useState('Enter text here');

    const handleUpCLick = () => {
        // console.log("Uppercase was clicled" + text);
        // let newText = text.toUpperCase();
        setText(text.toUpperCase());
    }

    const handleLowCLick = () => {
        // console.log("Uppercase was clicled" + text);
        // let newText = text.toUpperCase();
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        // console.log("Button has been used");
        setText(event.target.value)
    }


    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="3"></textarea>
                    {/* <label htmlFor="MyBox" className="form-label">Example textarea</label> */}
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCLick}> Convert to Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLowCLick}>Convert to Lowercase </button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>
                    No. of words:{text.split(" ").length} and No. of letters:{text.length}
                </p>
                <p>
                    {text.split(" ").length / 125} Minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}