import React, { useState } from "react";
import "./Filter.css";
import { AiOutlineBars } from "react-icons/ai";

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {

  const [filterExpand, setFilterExpand] = useState(false);
  const handleToggle = () => {
    setFilterExpand(!filterExpand);
  };

  return (
    <>
      <div className="filter-dropdown-wrapper pb -2 pb-md-4">
        <div className="filter d-flex align-items-center">
          <div className="fs-3">
            <AiOutlineBars onClick={handleToggle} />
          </div>
          <p className="fs-5 mt-md-2 mb-0 px-2">Filter</p>
        </div>
        {filterExpand && (
          <div className="dropdown-filter px-2 px-md-4 py-2">
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
