import React, { useState } from "react";
import "./Login.css";

const initialFormData = {
    username: "",
    password: "",
};

const Login = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const handleChangeValue = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!formData.password || !formData.username) {
            return console.log("warning");
        }

        localStorage.setItem("loginData", JSON.stringify(formData));
        try {
            setIsLogin(true);
            const res = JSON.parse(localStorage.getItem("loginData"));
            setUser(res);
        } catch (error) {
            console.log(error);
        } finally {
            setFormData(initialFormData);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("loginData");
        setIsLogin(false);
        setFormData(initialFormData);
        setUser(null);
    };

    return (
        <div id="sub-container">
            {isLogin ? (
                <div id="welcome-card">
                    <h3>Hi, {user.username}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form id="form" onSubmit={handleLogin}>
                    <h3>Welcome!</h3>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChangeValue}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChangeValue}
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;
