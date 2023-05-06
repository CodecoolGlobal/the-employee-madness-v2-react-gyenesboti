import { useEffect, useState } from "react"
import PositionsTable from "../Components/PositionsTable";

const Positions = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        fetch("api/positions")
        .then(res => res.json()
        .then(data => setPositions(data)))
    }, [])

    return (
        <PositionsTable positions={positions}/>
    )
}

export default Positions