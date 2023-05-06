import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [filteredBy, setFilteredBy] = useState(0);

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchEmployees()
      .then((employees) => {
        setLoading(false);
        setEmployees(employees);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filtered = employees.filter(employee => employee.height >= filteredBy)

  const randomizeHeight = () => {
    fetch("/api/randomHeights", {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => setEmployees(data))
  } 

  return (
  <>
  <button onClick={randomizeHeight}>Randomize height</button>
  <input type="number" placeholder="Filter by height" onChange={(e) => setFilteredBy(e.target.value)}></input>
  <EmployeeTable employees={filtered} onDelete={handleDelete} />;
  </>  
  )
};

export default EmployeeList;
