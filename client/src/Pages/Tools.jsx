import { useEffect, useState } from "react";
import ToolsTable from "../Components/ToolsTable";

const Tools = () => {
    const [tools, setTools] = useState(null);

    useEffect(() => {
        fetch("/api/tools")
        .then(res => res.json())
        .then(tools => setTools(tools))
    }, [])

    const handleFilter = (value) => {
        fetch(`/api/tools?name=${value}`)
        .then(res => res.json())
        .then(tools => setTools(tools))
    }

    if (tools) {
        return (
            <>
            <input placeholder="filter by name" onChange={(e) => handleFilter(e.target.value)}></input>
            <ToolsTable tools={tools}/>
            </>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default Tools