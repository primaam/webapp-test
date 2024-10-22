import React, { useState } from "react";
import userData from "./user.json";
import "./PickUser.css";

const PickUser = () => {
    const [dataIndex, setDataIndex] = useState(0);

    const data = userData.data;
    const handleDataIndex = () => {
        let res = Math.floor(Math.random() * data.length);
        setDataIndex(res);
    };

    return (
        <div id="sub-container">
            <div id="user-container">
                <h1>Hi, {data[dataIndex].name}!</h1>
                <button onClick={handleDataIndex}>Click here</button>
            </div>
        </div>
    );
};

export default PickUser;
