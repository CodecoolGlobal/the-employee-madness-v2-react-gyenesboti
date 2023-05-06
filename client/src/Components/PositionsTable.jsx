import {Link} from "react-router-dom";

const PositionsTable = ({positions}) => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Salary</td>
                </tr>
            </thead>
            <tbody>
                {positions.map((position,index) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{position.name}</td>
                        <td>{position.salary}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <Link to="/">
        <button>Back to menu</button>
        </Link>
        </>
    )
}

export default PositionsTable