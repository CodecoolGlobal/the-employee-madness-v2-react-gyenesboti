import { useEffect, useState } from "react"
import EquipmentTable from "../Components/EquipmentTable/EquipmentTable";


const deleteEquipment = (id) => {
    return fetch(`/api/equipments/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())

}

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('/api/equipments')
        .then(res => res.json())
        .then(equipments => setEquipments(equipments))
    }, [])

    const handleDelete = (id) => {
        deleteEquipment(id);
        setEquipments((equipments) => {
            return equipments.filter(equipment => equipment._id !== id
        )})
    }


    return (
        <EquipmentTable equipments={equipments} onDelete={handleDelete} />
    )
}


export default Equipments