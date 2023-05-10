import { Link } from "react-router-dom";

const ToolsTable = ({tools}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Weight</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tools.map((tool,index) =>
                    <tr key={tool._id}>
                        <td>{index + 1}</td>
                        <td>{tool.name}</td>
                        <td>{tool.weight}</td>
                        <td>
                            <Link to={`/tools/${tool._id}`}>
                                <button>Info</button>
                            </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ToolsTable;