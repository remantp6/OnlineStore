import React, { useState } from "react";

const Filter = ({ categories, setSelectedCategory }) => {
  const [filterExpand, setFilterExpand] = useState(false);

  const handleToggle = () => {
    setFilterExpand(!filterExpand);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set the selected category
    setFilterExpand(false); // Close the filter dropdown
  };

  return (
    <>
      <div className="filter-dropdown-wrapper pb-6 lg:pb-10">
        <div className="filter d-flex items-center">
          <div className="text-3xl cursor-pointer">
            <svg
              onClick={handleToggle}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sliders-horizontal"
            >
              <line x1="21" x2="14" y1="4" y2="4" />
              <line x1="10" x2="3" y1="4" y2="4" />
              <line x1="21" x2="12" y1="12" y2="12" />
              <line x1="8" x2="3" y1="12" y2="12" />
              <line x1="21" x2="16" y1="20" y2="20" />
              <line x1="12" x2="3" y1="20" y2="20" />
              <line x1="14" x2="14" y1="2" y2="6" />
              <line x1="8" x2="8" y1="10" y2="14" />
              <line x1="16" x2="16" y1="18" y2="22" />
            </svg>
          </div>
          {filterExpand ? (
            <p className="text-xl mt-2 mb-0 px-2 pb-2">Hide</p>
          ) : (
            <p className="text-xl mt-2 mb-0 px-2 pb-2">Filter</p>
          )}
        </div>

        {filterExpand && (
          <div className="mt-3 lg:mt-4 filter-list space-y-2 w-[290px] border border-gray-300 rounded-lg">
            {categories?.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`mt-0 cursor-pointer pt-1 pb-[6px] px-2 text-lg hover:bg-gray-200 ${
                  index !== categories.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
