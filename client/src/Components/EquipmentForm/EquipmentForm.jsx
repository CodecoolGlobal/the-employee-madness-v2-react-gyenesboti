import { Link } from "react-router-dom";

const EquipmentForm = ({equipment, onSave}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const equipment = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});
        

        return onSave(equipment)
    }

    return (
        <form className="equipmentForm" onSubmit={handleSubmit}>
            {equipment && (
                <input type="hidden" name="_id" defaultValue={equipment._id} />
            )}

            <div className="control">
                <label htmlFor="name">Name:
                    <input name="name" id="name" defaultValue={equipment ? equipment.name : null}></input>
                </label>
            </div>

            <div className="control">
                <label htmlFor="type">Type:
                    <input name="type" id="type" defaultValue={equipment ? equipment.type : null}></input>
                </label>
            </div>

            <div className="control">
                <label htmlFor="amount">Amount:
                    <input name="amount" id="amount" defaultValue={equipment ? equipment.amount : null}></input>
                </label>
            </div>

            <div className="buttons">
                <button type="submit">Save equipment</button>
                <Link to="/">
                <button>Cancel</button>
                </Link>
            </div>
        </form>
    )
}

export default EquipmentForm