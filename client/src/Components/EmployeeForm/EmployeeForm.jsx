const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const employee = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(employee);
  };

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      {employee && (
        <input type="hidden" name="_id" defaultValue={employee._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={employee ? employee.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="level">Level:</label>
        <input
          defaultValue={employee ? employee.level : null}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <input
          defaultValue={employee ? employee.position : null}
          name="position"
          id="position"
        />
      </div>

      <div className="control">
        <label htmlFor="startingDate">Starting date:</label>
        <input
          type="date"
          defaultValue={employee ? employee.startingDate : null}
          name="startingDate"
          id="startingDate"
        />
      </div>

      <div className="control">
        <label htmlFor="currentSalary">Current salary:</label>
        <input
          type="number"
          defaultValue={employee ? employee.currentSalary : null}
          name="currentSalary"
          id="currentSalary"
        />
      </div>

      <div className="control">
        <label htmlFor="desiredSalary">Desired salary:</label>
        <input
          type="number"
          defaultValue={employee ? employee.desiredSalary : null}
          name="desiredSalary"
          id="desiredSalary"
        />
      </div>

      <div className="control">
        <label htmlFor="favouriteColor">Favourite color:</label>
        <input
          type="color"
          defaultValue={employee ? employee.favouriteColor : null}
          name="favouriteColor"
          id="favouriteColor"
        />
      </div>



      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
