/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./FilterByStatus.module.css";

import { useRef, useState } from "react";

const FilterByStatus = ({ onSelect, selectedStatus, onSelectDate }) => {
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [dateError, setDateError] = useState(false);

  const dropDownStatusChangeHandler = (event) => {
    const selectedFilterStatus = event.target.value;

    onSelect(selectedFilterStatus);
  };

  const dateFormSubmitHandler = (event) => {
    event.preventDefault();
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (!startDate || !endDate || startDate > endDate) {
      setDateError(true);
      return;
    }
    setDateError(false);
    onSelectDate(startDate, endDate);
    startDateRef.current.value = "";
    endDateRef.current.value = "";
  };
  return (
    <div className={classes["filter-status-container"]}>
      <div className={classes["filter-action"]}>
        <div>
          <label
            className={classes["filter-selector-label"]}
            htmlFor="select status"
          >
            Filter Task By Status
          </label>
          <select
            className={classes["filter-status-selector"]}
            value={selectedStatus}
            onChange={dropDownStatusChangeHandler}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <form onSubmit={dateFormSubmitHandler}>
            <p className={classes["filter-date-label"]}>
              Filter Task by Due Date
            </p>
            <div>
              <label
                className={classes["filter-date-label"]}
                htmlFor="startDate"
              >
                From
              </label>
              <input
                className={classes["filter-date-input"]}
                id="startDate"
                type={"date"}
                ref={startDateRef}
              />
            </div>
            <div>
              <label className={classes["filter-date-label"]} htmlFor="endDate">
                To
              </label>
              <input
                className={classes["filter-date-input"]}
                id="endDate"
                type="date"
                ref={endDateRef}
              />
            </div>

            <div>
              {dateError && <p className={classes.error}>Enter Correct Date</p>}
              <button className={classes["date-filter-btn"]}>Filter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterByStatus;
