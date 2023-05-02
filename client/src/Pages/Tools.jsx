import { useEffect, useState } from "react"
import ToolsTable from "../Components/ToolsTable";


const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('/api/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])


    const handleFilter = (e) => {
        setTools(tools.filter(tool => tool.name.toLowerCase().startsWith(e.target.value.toLowerCase())));
    }

    return (
        <ToolsTable tools={tools} handleFilter={handleFilter}/>
    )
}

export default Tools