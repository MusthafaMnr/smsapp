import React, { useState, useContext } from 'react'
import { useEffect } from 'react';





import { useTable, usePagination } from 'react-table'
 
function Table() {
    const data = React.useMemo(
      () => [
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },
        {
          col1: '#',
          col2: 'Wdfgdfgdfgorld',
          col3: 'Wdfgdgdgdfgd',
          col4: 'ldfgdfgdfgdfd',
          col5: 'ddfgdfgdfgdf',
          col6: 'Wgfddfggdfgdfgo',          
        },      
      ],
      []
    )
  
    const columns = React.useMemo(
      () => [
        {
          Header: '#',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: '	Name',
          accessor: 'col2',
        },
        {
          Header: '	Place',
          accessor: 'col3',
        },
        {
          Header: '	Donation to',
          accessor: 'col4',
        },{
          Header: '	Amount',
          accessor: 'col5',
        },{
          Header: '	Mobile Number',
          accessor: 'col6',
        },
      ],
      []
    )
  
    const {
      getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    } = useTable(
      { columns, data },
      usePagination
      )
  
    return (
      <div>
        
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        {usePagination}
      </table>

<div className="pagination">
<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
  {'<<'}
</button>{' '}
<button onClick={() => previousPage()} disabled={!canPreviousPage}>
  {'<'}
</button>{' '}
<button onClick={() => nextPage()} disabled={!canNextPage}>
  {'>'}
</button>{' '}
<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
  {'>>'}
</button>{' '}
<span>
  Page{' '}
  <strong>
    {pageIndex + 1} of {pageOptions.length}
  </strong>{' '}
</span>
<span>
  | Go to page:{' '}
  <input
    type="number"
    defaultValue={pageIndex + 1}
    onChange={e => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0
      gotoPage(page)
    }}
    style={{ width: '100px' }}
  />
</span>{' '}
<select
  value={pageSize}
  onChange={e => {
    setPageSize(Number(e.target.value))
  }}
>
  {[10, 20, 30, 40, 50].map(pageSize => (
    <option key={pageSize} value={pageSize}>
      Show {pageSize}
    </option>
  ))}
</select>
</div>

</div>

    )
  }
export default Table



