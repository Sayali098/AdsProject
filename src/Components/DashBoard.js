import { useState } from 'react';

import React from 'react';
import '../style/Dashboard.css';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChartImg from '../images/ChartImage.png';


 const DashBoard = () => {
  const [isTable1Active, setTable1Active] = useState(true);

  const toggleTable = () => {
    setTable1Active(!isTable1Active);
  };


const initialData = [
  { Campaigns: 'Cosmetics', Clicks: 712, Cost: 4272, Conversions: 8, Revenue: 16568 },
  { Campaigns: 'Serums', Clicks: 3961, Cost: 27331, Conversions: 115, Revenue: 362526 },
  { Campaigns: 'Facewash', Clicks: 9423, Cost: 76831, Conversions: 123, Revenue: 266800 },
  { Campaigns: 'Shampoos', Clicks: 439, Cost: 2151, Conversions: 5, Revenue: 11029 },
  { Campaigns: 'Conditioners', Clicks: 1680, Cost: 3864, Conversions: 49, Revenue: 175245 },
  { Campaigns: 'Facewash2', Clicks: 4978, Cost: 29370, Conversions: 189, Revenue: 623106 },
];

const [data, setData] = useState(initialData);
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

const handleSort = (key) => {
  let direction = 'asc';
  if (sortConfig.key === key && sortConfig.direction === 'asc') {
    direction = 'desc';
  }
  setSortConfig({ key, direction });

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (direction === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  setData(sortedData);
};



  return (
    <div className='dashBoard'>

<table>
        {/* Table Header */}
        <thead>
        <tr><td className='firstCol'>Add Insights</td></tr>
          <tr className='TableHeading'>
            <th className='firstCol'  onClick={() => handleSort('Campaigns')}>Campaigns</th>
            <th   onClick={() => handleSort('Clicks')}>Clicks</th>
            <th onClick={() => handleSort('Cost')}>Cost</th>
            <th   onClick={() => handleSort('Conversions')}>Conversions</th>
            <th  onClick={() => handleSort('Revenue')}>Revenue</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className='firstCol'>{row.Campaigns}</td>
              <td>{row.Clicks}</td>
              <td>{`USD ${row.Cost}`}</td>
              <td>{row.Conversions}</td>
              <td>{`USD ${row.Revenue}`}</td>
            </tr>
          ))}
        </tbody>
      </table>



























      
      
  



    <div className='Table'>
    
        {isTable1Active ? (
          <table className='TableContent'>
            <thead>
              <tr>
                <td className='firstCol'>Add Insights</td>
              </tr>
              <tr className='TableHeading'>
                <th className='firstCol'>Groups</th>
                <th>Clicks</th>
                <th>Cost</th>
                <th>Conversions</th>
                <th>Revenue</th>
              </tr>
            </thead>

         <tbody>
           
             <tr>
                 <td className='firstCol'>Male</td>
                 <td>348</td>
                 <td>USD 12528</td>
                 <td>42</td>
                 <td>USD 62118</td>
             
             </tr>
             <tr>
               <td className='firstCol'>Female</td>
             <td>692</td>
             <td>USD 24,912</td>
             <td>35</td>
             <td>USD 5175</td>
             </tr>
             <tr>
               <td className='firstCol'>Unknown</td>
               <td>105</td>
               <td>USD 3943</td>
               <td>3</td>
               <td>USD 4489</td>
             </tr>
         <tr>
           <td className='firstCol'>Total</td>
         <td>1145</td>
         <td>USD 41,343</td>
         <td>80</td>
         <td>USD 71782</td>
         </tr>
        
         </tbody>
     </table>
        ):
          (
            <table className='TableContent'>
              <tbody>
                <tr>
                  <td className='ChartBGImg' style={{ backgroundImage: `url(${ChartImg})` }}></td>
                </tr>
              </tbody>
            </table>
          )}
  
          <div className='togglebtn'>
            <FontAwesomeIcon className='toggleButton'
              icon={isTable1Active ? faToggleOn : faToggleOff}
              size='2x'
              onClick={toggleTable}
              style={{
        
                color: isTable1Active ? 'blue' : 'black',
                borderRadius: '5px',
               
                cursor: 'pointer',
              }}
            />
          </div>
      </div>




   
  

    </div>
  );
};

export default DashBoard;





{/* // import React from 'react'

// const DashBoard = () => {
//   return ( }
//     <div>DashBoard</div>
//   )
// }

// export default DashBoard;


// TableComponent.js

// import React from 'react';

// const TableComponent = () => {
//   const tableData = [
//     { column1: 'Data 1A', column2: 'Data 1B' },
//     { column1: 'Data 2A', column2: 'Data 2B' },
//     // Add more data objects as needed
//   ];

//   return (
//     <div>
//       <h2>Your Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             {/* Add more columns as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.column1}</td>
//               <td>{item.column2}</td>
//               {/* Add more cells as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;



// TableComponent.js

// import React, { useState } from 'react';

// const TableComponent = () => {
//   const [tableData, setTableData] = useState([
//     { column1: 'Data 3A', column2: 'Data 3B' },
//     { column1: 'Data 1A', column2: 'Data 1B' },
//     { column1: 'Data 2A', column2: 'Data 2B' },
//   ]);

//   const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
//   const [sortedColumn, setSortedColumn] = useState('column1');

//   const handleSort = (columnName) => {
//     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//     setSortOrder(newSortOrder);
//     setSortedColumn(columnName);

//     const sortedData = [...tableData].sort((a, b) => {
//       const aValue = a[columnName];
//       const bValue = b[columnName];

//       if (newSortOrder === 'asc') {
//         return aValue.localeCompare(bValue);
//       } else {
//         return bValue.localeCompare(aValue);
//       }
//     });

//     setTableData(sortedData);
//   };

//   return (
//     <div>
//       <h2>Your Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('column1')}>
//               Column 1 {sortedColumn === 'column1' && sortOrder === 'asc' && '↑'}
//               {sortedColumn === 'column1' && sortOrder === 'desc' && '↓'}
//             </th>
//             <th onClick={() => handleSort('column2')}>
//               Column 2 {sortedColumn === 'column2' && sortOrder === 'asc' && '↑'}
//               {sortedColumn === 'column2' && sortOrder === 'desc' && '↓'}
//             </th>
//             {/* Add more columns as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.column1}</td>
//               <td>{item.column2}</td>
//               {/* Add more cells as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;


// TableComponent.js


// TableComponent.js

// import React, { useState } from 'react';

// const TableComponent = () => {
  // const [tableData, setTableData] = useState([
  //   { name: 'Product A', cost: 50.99, reviews: 25 },
  //   { name: 'Product B', cost: 79.99, reviews: 12 },
  //   { name: 'Product C', cost: 34.95, reviews: 30 },
  // ]);

  // const [sortOrder, setSortOrder] = useState('asc');
  // const [sortedColumn, setSortedColumn] = useState('name');

  // const handleSort = (columnName) => {
  //   const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  //   setSortOrder(newSortOrder);
  //   setSortedColumn(columnName);

  //   const sortedData = [...tableData].sort((a, b) => {
  //     const aValue = a[columnName];
  //     const bValue = b[columnName];

  //     if (columnName === 'name') {
  //       return newSortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  //     } else {
  //       return newSortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  //     }
  //   });

  //   setTableData(sortedData);
  // };

  // return (
  //   <div>
  //     <h2>Your Table</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th onClick={() => handleSort('name')}>
  //             Product Name {sortedColumn === 'name' && sortOrder === 'asc' && '↑'}
  //             {sortedColumn === 'name' && sortOrder === 'desc' && '↓'}
  //           </th>
  //           <th onClick={() => handleSort('cost')}>
  //             Cost {sortedColumn === 'cost' && sortOrder === 'asc' && '↑'}
  //             {sortedColumn === 'cost' && sortOrder === 'desc' && '↓'}
  //           </th>
  //           <th onClick={() => handleSort('reviews')}>
  //             Reviews {sortedColumn === 'reviews' && sortOrder === 'asc' && '↑'}
  //             {sortedColumn === 'reviews' && sortOrder === 'desc' && '↓'}
  //           </th>
  //           {/* Add more columns as needed */}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {tableData.map((item, index) => (
  //           <tr key={index}>
  //             <td>{item.name}</td>
  //             <td>{item.cost}</td>
  //             <td>{item.reviews}</td>
  //             {/* Add more cells as needed */}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
    // </div>
  // );
// };

// export default TableComponent;



