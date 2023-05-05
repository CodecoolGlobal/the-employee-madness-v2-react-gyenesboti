import { Link } from "react-router-dom";


const EquipmentTable = ({equipments, onDelete}) => {
    return (
        <div className="equipmenttable">
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map((equipment, index) => (
                        <tr key={equipment._id}>
                            <td>{index + 1}</td>
                            <td>{equipment.name}</td>
                            <td>{equipment.type}</td>
                            <td>{equipment.amount}</td>
                            <td>
                                <Link to={`/equipments/${equipment._id}`}>
                                <button type="button">Update</button>
                                </Link>
                                <button type="button" onClick={() => onDelete(equipment._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default EquipmentTable