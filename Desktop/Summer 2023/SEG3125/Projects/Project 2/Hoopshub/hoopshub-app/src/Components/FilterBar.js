import { useState } from "react";

const FilterBar = ({
  genders,
  onNameFilter,
  onAgeFilter,
  ages,
  onGenderFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    age: "",
    gender: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "age":
        onAgeFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Club Filter</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="age">Age</label>
        <select
          className="form-control"
          id="age"
          onChange={handleInput("age")}
        >
          <option value="">Select</option>
          {ages.map((age) => (
            <option value={age} key={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div>
      <div button="buttonForm"></div>
      <button>Register Now</button>
    </div>
  );
};

export default FilterBar;
