import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const sortEmployees = (year, navigate, sortBy) => {
    return fetch(`/api/years-of-experience/${sortBy}?year=${year}`)
        .then(res => { 
            if (res.status === 404) {
                navigate("/error")
            } else {
                return res.json()
            } 
    })    
}

const fetchEmployees = (year, navigate) => {
    return fetch(`/api/years-of-experience?year=${year}`)
    .then(res => { 
        if (res.status === 404) {
            navigate("/error")
        } else {
            return res.json()
        } 
    })
}

const Experience = () => {
    const [sort, setSort] = useState(false);
    const [employees, setEmployees] = useState(null);
    let [searchParams, setSearchParams] = useSearchParams();
    const year = searchParams.get('year');
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees(year,navigate)
        .then(employees => setEmployees(employees))
    }, [])

    const handleSort = () => {
        setSort(!sort);
        if (sort) {
            const sortBy = "desc"
            sortEmployees(year,navigate,sortBy)
            .then(employees => setEmployees(employees));
        } else {
            const sortBy = "asc"
            sortEmployees(year,navigate,sortBy)
            .then(employees => setEmployees(employees));
        }
    }

    if (employees) {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th onClick={handleSort}>Name</th>
                        <th>Level</th>
                        <th>Position</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.level}</td>
                            <td>{employee.position}</td>
                            <td>{employee.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}

export default Experience;