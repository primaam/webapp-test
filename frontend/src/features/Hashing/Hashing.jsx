import React, { useState } from "react";
import { sha256 } from "js-sha256";
import "./Hashing.css";

const initialFormData = {
    date: "",
    name: "",
    sex: "Male",
    notes: "",
};

const Hashing = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChangeValue = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleHash = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.date || !formData.notes || !formData.sex) {
            return console.log("wrong input");
        }
        try {
            const str = JSON.stringify(formData);
            console.log(sha256(str));
        } catch (error) {
            console.log(error);
        } finally {
            setFormData(initialFormData);
        }
    };

    return (
        <div id="sub-container">
            <form id="form" onSubmit={handleHash}>
                <h3>Hashing Card</h3>
                <input name="date" type="date" value={formData.date} onChange={handleChangeValue} />
                <input
                    name="name"
                    placeholder="Input your name"
                    value={formData.name}
                    onChange={handleChangeValue}
                />
                <div className="hashing-section">
                    <label>Choose your gender</label>
                    <div id="form-radio">
                        <input
                            type="radio"
                            name="sex"
                            value={"Male"}
                            onChange={handleChangeValue}
                        />
                        <label>Male</label>
                    </div>
                    <div id="form-radio">
                        <input
                            type="radio"
                            name="sex"
                            value={"Female"}
                            onChange={handleChangeValue}
                        />
                        <label>Female</label>
                    </div>
                </div>
                <input
                    name="notes"
                    placeholder="Input your notes"
                    value={formData.notes}
                    onChange={handleChangeValue}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Hashing;
