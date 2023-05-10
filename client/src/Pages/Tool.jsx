import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tool = () => {
    const {id} = useParams();
    const [tool, setTool] = useState(null);
    
    useEffect(() => {
        fetch(`/api/tools/${id}`)
        .then(res => res.json())
        .then(tool => setTool(tool));
    })

    if (tool) {
        return (
            <>
            <h2>{tool.name}</h2>
            <h2>{tool.weight}</h2>
            </>
        )
    } else {
        <h2>Loading...</h2>
    }
}

export default Tool;