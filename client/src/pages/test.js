<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="md:border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">หมวดหมู่รายวิชา</h2>
        <ul>
          <li>หมวดหมู่ 1</li>
          <li>หมวดหมู่ 2</li>
          <li>หมวดหมู่ 3</li>
          {/* เพิ่มหมวดหมู่เพิ่มเติมตามต้องการ */}
        </ul>
      </div>
      <div className="flex flex-col justify-between md:border border-gray-300 p-4 rounded">
        <div className="flex justify-between items-center mb-4">
          <input
            className="border rounded px-3 py-2 mr-2 w-full"
            type="text"
            placeholder="รหัสวิชา"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            ค้นหา
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowFilterModal(true)}
          >
            Filter
          </button>
        </div>
      </div>
      <CourseFilterModal
        show={showFilterModal}
        onClose={handleFilterModalClose}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
    </div>



const handleSearch = () => {
    // Perform search logic here
  };

  const handleFilterModalClose = () => setShowFilterModal(false);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
    }));
  };




