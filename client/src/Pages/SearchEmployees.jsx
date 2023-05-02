import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";
import { useParams } from "react-router-dom";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

function SearchEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees()
      .then((employees) => {
        setLoading(false);
        setEmployees(employees);
      })
  }, []);


  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  const searched = useParams();
  const filtered = employees.filter(employee => employee.name.toUpperCase().includes(searched.search.toUpperCase()));
  console.log(filtered);

  if(loading) {
    return <Loading />
  }

  return (
    <EmployeeTable employees={filtered} onDelete={handleDelete} />
  )

}

export default SearchEmployees