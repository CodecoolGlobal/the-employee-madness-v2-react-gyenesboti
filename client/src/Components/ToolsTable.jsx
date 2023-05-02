import {Link} from 'react-router-dom';

const ToolsTable = ({tools, handleFilter}) => {
    return (
        <>
        <input placeholder="filter by name" onChange={(e) => handleFilter(e)}></input>
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
                {tools.map((tool,index) => 
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

export default ToolsTable