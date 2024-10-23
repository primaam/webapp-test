import React, { useState } from "react";
import { sha256 } from "js-sha256";
import "./Hashing.css";

const Hashing = () => {
    const [inputText, setInputText] = useState("");

    const handleHash = () => {
        console.log(sha256(inputText));
    };
    return (
        <div id="sub-container">
            <div id="hash-card">
                <h3>Hashing Card</h3>
                <input
                    name="text"
                    placeholder="Input your word to hash"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button onClick={handleHash}>Submit</button>
            </div>
        </div>
    );
};

export default Hashing;
