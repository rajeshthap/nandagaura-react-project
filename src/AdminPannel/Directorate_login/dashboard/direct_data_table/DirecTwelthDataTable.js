import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function DirecTwelthDataTable() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital || "N/A",
    },
    {
      name: "Country Flag",
      selector: (row) => <img src={row.flags.png} alt="flag" width={20} height={12} />,
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn btn-primary" onClick={() => alert(row.alpha2Code)}>
          Edit
        </button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(results);
  }, [search, countries]);

  return (
    <>
      <div className="d-flex justify-content-center"></div>

      <DataTable
        title="Country List"
        columns={columns}
        data={filteredCountries}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={<button className="btn btn-sm btn-primary">Export</button>}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search"
            className="form-control w-25"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="center"
      />
    </>
  );
}

export default DirecTwelthDataTable;
