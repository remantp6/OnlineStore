import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import DropDown from "./dropdown/DropDown";

const Filter = () => {
  const [filterExpand, setFilterExpand] = useState(false);
  const handleToggle = () => {
    setFilterExpand(!filterExpand);
  }
  return (
    <>
      <div className="filter-dropdown-wrapper pb-md-4">
        <div className="filter d-flex align-items-center">
          <div className="fs-2">
            <AiOutlineBars onClick={handleToggle}/>
          </div>
          <p className="fs-5 mt-4 px-2">Filters</p>
        </div>
        {filterExpand && <DropDown/>}
      </div>
    </>
  );
};

export default Filter;
