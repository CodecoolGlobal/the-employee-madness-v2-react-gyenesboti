import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Tools = () => {
    const [tools, setTools] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetch('/api/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])


    const filtered = tools.filter(tool => tool.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
        <input placeholder="filter by name" onChange={(e) => setFilter(e.target.value)}></input>
        <Link to="/add-tool">
        <button>Create a new tool</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Weight</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {filtered.map((tool,index) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{tool.name}</td>
                        <td>{tool.weight}</td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default Tools