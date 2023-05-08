import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const deleteEmployee = (id) => {
    return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
};


const Experience = () => {
    const [employees, setEmployees] = useState([]);
    const [count, setCount] = useState(false);
    const {experience} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/years-of-experience/${experience}`)
        .then(res => { if (res.status === 404) {
            navigate("/error");
        } else {
            return res.json()
        }})   
        .then(data => setEmployees(data))
    }, [])

    const handleDelete = (id) => {
        deleteEmployee(id);
    
        setEmployees((employees) => {
          return employees.filter((employee) => employee._id !== id);
        });
    };

    const handleSort = () => {
        setCount(!count);
        if (count) {
            fetch(`/api/years-of-experience/${experience}/desc`)
            .then(res => res.json())
            .then(data => setEmployees(data))
        } else {
            fetch(`/api/years-of-experience/${experience}/asc`)
            .then(res => res.json())
            .then(data => setEmployees(data))
        }
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td onClick={() => handleSort()}>Name</td>
                    <td>Level</td>
                    <td>Position</td>
                    <td>Experience</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.level}</td>
                        <td>{employee.position}</td>
                        <td>{employee.experience}</td>
                        <td>
                            <Link to={`/update/${employee._id}`}>
                                <button type="button">Update</button>
                            </Link>
                            <button type="button" onClick={() => handleDelete(employee._id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default Experience