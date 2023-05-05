import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import EquipmentForm from "../Components/EquipmentForm/EquipmentForm";

const updateEquipment = (equipment) => {
    return fetch(`/api/equipments/${equipment._id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(equipment)
    }).then((res) => res.json());
}

const fetchEquipment = (id) => {
    return fetch(`/api/equipments/${id}`).then(res => res.json());
}


const EquipmentUpdater = () => {
    const {id} = useParams();
    const [equipment, setEquipment] = useState(null);

    useEffect(() => {
        fetchEquipment(id)
        .then(equipment => setEquipment(equipment))
    }, [id])


    const handleUpdateEquipment = (equipment) => {
        updateEquipment(equipment)
        .then(() => window.alert("Successfully updated!"))
    }

    return (
        <EquipmentForm equipment={equipment} onSave={handleUpdateEquipment}/>
    )

}

export default EquipmentUpdater