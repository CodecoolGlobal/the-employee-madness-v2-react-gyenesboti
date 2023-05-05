import { Link } from "react-router-dom";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onDelete }) => (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Position</th>
          <th>Starting date</th>
          <th>Current salary</th>
          <th>Desired salary</th>
          <th>Difference</th>
          <th>Favourite color</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.level}</td>
            <td>{employee.position}</td>
            <td>{employee.startingDate}</td>
            <td>{employee.currentSalary}</td>
            <td>{employee.desiredSalary}</td>
            <td>{employee.desiredSalary - employee.currentSalary}</td>
            <td style={{backgroundColor: employee.favouriteColor}}></td>
            <td>
              <Link to={`/update/${employee._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeTable;
