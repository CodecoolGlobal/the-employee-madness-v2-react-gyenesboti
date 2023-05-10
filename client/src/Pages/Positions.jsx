import { useEffect, useState } from "react";

const Positions = () => {
    const [positions, setPositions] = useState(null);

    useEffect(() => {
        fetch("/api/positions")
        .then(res => res.json())
        .then(positions => setPositions(positions))
    }, [])

    if (positions){
        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position,index) => (
                        <tr key={position._id}>
                            <td>{index + 1}</td>
                            <td>{position.name}</td>
                            <td>{position.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default Positions;