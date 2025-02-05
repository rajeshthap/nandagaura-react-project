import axios from 'axios';
import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component'
function DirecTwelthDataTable() {
  const [Countries, setCountries] = useState([]);
  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  const columns = [
    {
      name: 'Country Name',
      selector: (Row) => Row.name,
      sortable:true,
    },
    {
      name: 'Country Native Name',
      selector: (Row) => Row.nativeName
    },
    {
      name: 'Country Capital',
      selector: (Row) => Row.capital
    },
    {
      name: 'Country Flag',
      selector: (Row) => <img src={Row.flags} alt="flag" width={50} height={50} />
    },
    {
      name:'Action',
      selector: (Row) => <button className='btn btn-primary' onClick={() => alert(Row.alpha2code)} >Edit</button>,
    },

  ]

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <div className='d-flex justify-content-center'>
      </div>

      <DataTable 
      title="Country List" 
      columns={columns} 
      data={Countries} 
      pagination 
      fixedHeader
      fixedHeaderScrollHeight="400px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={<button className='btn btn-sm btn-primary'>Export</button>}
      subHeader
      subHeaderComponent={
        <input type='text' placeholder='search' className='form-control w-25' />
      }
      subHeaderAlign='center'
      />
    </>
  )
}

export default DirecTwelthDataTable