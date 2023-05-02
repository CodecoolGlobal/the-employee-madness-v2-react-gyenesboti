import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";
import { Link } from "react-router-dom";
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
  const [employees, setEmployees] = useState([]);
  const [level, setLevel] = useState("");
  const [position, setPosition] = useState("");
  const [arrangedBy, setArrangedBy] = useState("");
  const [isArranged, setIsArranged] = useState(false);
  const [arranged, setArranged] = useState([]);

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
  
  
  const filtered = employees.filter(employee => employee.level.toLowerCase().startsWith(level) && employee.position.toLowerCase().startsWith(position));
  let employeesCopy = JSON.parse(JSON.stringify(employees));

  useEffect(() => {
    if (employees) {
      if (isArranged) {
        if (arrangedBy === "First name") {
          setArranged(employeesCopy.sort(function (a, b) {
            if (a.sepname.first > b.sepname.first) { return 1 }
            if (a.sepname.first < b.sepname.first) { return -1 }
            return 0
          }))
        } else if (arrangedBy === "Last name") {
          setArranged(employeesCopy.sort(function (a, b) {
            if (a.sepname.last > b.sepname.last) { return 1 }
            if (a.sepname.last < b.sepname.last) { return -1 }
            return 0
          }))
        } else if (arrangedBy === "Middle name") {
          setArranged(employeesCopy.sort(function (a, b) {
            if (a.sepname.middle > b.sepname.middle) { return 1 }
            if (a.sepname.middle < b.sepname.middle) { return -1 }
            return 0
          }))
        } else if (arrangedBy === "Level") {
          setArranged(employeesCopy.sort(function (a, b) {
            if (a.level > b.level) { return 1 }
            if (a.level < b.level) { return -1 }
            return 0
          }))
        } else if (arrangedBy === "Position") {
          setArranged(employeesCopy.sort(function (a, b) {
            if (a.position > b.position) { return 1 }
            if (a.position < b.position) { return -1 }
            return 0
          }))
        }
      }
    }
  }, [arrangedBy])



  if (loading) {
    return <Loading />;
  }

  if (isArranged) {
    return (
      <>
        <input value={level} type="text" placeholder="Filter by Level" onChange={(e) => setLevel(e.target.value)}></input>
        <input value={position} type="text" placeholder="Filter by Position" onChange={(e) => setPosition(e.target.value)}></input>
        <select onChange={(e) => { setIsArranged(true); setArrangedBy(e.target.value) }}>
          <option>Arrange by:</option>
          <option>First name</option>
          <option>Last name</option>
          <option>Middle name</option>
          <option>Level</option>
          <option>Position</option>
        </select>
        <button onClick={() => setIsArranged(false)}>Reset arrange</button>
        <Link to="/equipments">
        <button>Manage equipments</button>
        </Link>
        <EmployeeTable employees={arranged} onDelete={handleDelete} />
      </>
    )
  } else {
    return (
      <>
        <input value={level} type="text" placeholder="Filter by Level" onChange={(e) => setLevel(e.target.value)}></input>
        <input value={position} type="text" placeholder="Filter by Position" onChange={(e) => setPosition(e.target.value)}></input>
        <select onChange={(e) => { setIsArranged(true); setArrangedBy(e.target.value) }}>
          <option>Arrange by:</option>
          <option>First name</option>
          <option>Last name</option>
          <option>Middle name</option>
          <option>Level</option>
          <option>Position</option>
        </select>
        <button onClick={() => setIsArranged(false)}>Reset arrange</button>
        <Link to="/equipments">
        <button>Manage equipments</button>
        </Link>
        <EmployeeTable employees={filtered} onDelete={handleDelete} />
      </>
    )
  }  

};

export default EmployeeList;
