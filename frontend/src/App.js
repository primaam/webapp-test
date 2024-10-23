import React from "react";
import "./App.css";
import PickUser from "./features/PickUser/PickUser";
import Login from "./features/Login/Login";
import Hashing from "./features/Hashing/Hashing";
import TableList from "./features/TableList/TableList";

function App() {
    return (
        <div id="container">
            {/* <PickUser /> */}
            {/* <Login /> */}
            {/* <Hashing /> */}
            <TableList />
        </div>
    );
}

export default App;
