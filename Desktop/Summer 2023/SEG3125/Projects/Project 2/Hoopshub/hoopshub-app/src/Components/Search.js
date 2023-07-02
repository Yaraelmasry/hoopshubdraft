
import { Component, useState } from "react";
import dayjs from "dayjs";
import PersonItem from "../Components/PersonItem";
import FilterBar from "../Components/FilterBar";
import { data } from "../datamock.js";



const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function Search() {
  const [allData, setData] = useState(data);

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };
  const generateAgeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.age))];
  };


  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterAge = (age) => {
    const filteredData = data.filter((item) => {
      if (item.age.toLowerCase().includes(age.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterGender = (gender) => {
    const filteredData = data.filter((item) => {
      if (item.gender === gender) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            genders={generateGenderDataForDropdown()}
            ages={generateAgeDataForDropdown()}
            onNameFilter={handleFilterName}
            onAgeFilter={handleFilterAge}
            onGenderFilter={handleFilterGender}
            onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;