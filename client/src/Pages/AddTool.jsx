import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddTool = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTool = {
            name: name,
            weight: weight,
        }
        fetch('/api/tools', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTool)
        });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="control">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className="control">
                <label htmlFor="weight">Weight:</label>
                <input type="number" step="0.01" name="weight" id="weight" defaultValue={weight} onChange={(e) => setWeight(e.target.value)}></input>
            </div>

            <button type="submit">Add tool</button>
        </form>
    )
}

export default AddTool