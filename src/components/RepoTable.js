import React from "react"
import { useTable, useSortBy, useFilters } from "react-table"

import {Filter, DefaultColumnFilter} from './Filters';

const RepoTable = ({ columns, data }) => {
     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
     } = useTable({
          columns,
          data,
          defaultColumn: {Filter: DefaultColumnFilter}
     },
          useFilters,
          useSortBy
     )

     const generateSortingIndicator = column => {
          return column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""
     }

     return (
          <table {...getTableProps()}>
               <thead>
                    {headerGroups.map(headerGroup => (
                         <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map(column => (
                                   <td {...column.getHeaderProps()} align="center">
                                        <div {...column.getSortByToggleProps()}>
                                             {column.render("Header")}
                                             {generateSortingIndicator(column)}
                                        </div>
                                        <Filter column={column} />
                                   </td>
                              ))}
                         </tr>
                    ))}
               </thead>

               <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                         prepareRow(row)
                         return (
                              <tr {...row.getRowProps()}>
                                   {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                             {cell.render("Cell")}
                                        </td>
                                   })}
                              </tr>
                         )
                    })}
               </tbody>
          </table>
     )
}

export default RepoTable