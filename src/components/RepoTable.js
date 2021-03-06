import React from "react"
import { useTable, useSortBy, useFilters } from "react-table"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
          <Table {...getTableProps()}>
               <colgroup>
                    <col style={{width:'20%'}}/>
                    <col style={{width:'20%'}}/>
                    <col style={{width:'20%'}}/>
                    <col style={{width:'20%'}}/>
                    <col style={{width:'20%'}}/>
               </colgroup>
               <TableHead>
                    {headerGroups.map(headerGroup => (
                         <TableRow {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map(column => (
                                   <TableCell {...column.getHeaderProps()} align="center">
                                        <div {...column.getSortByToggleProps()}>
                                             {column.render("Header")}
                                             {generateSortingIndicator(column)}
                                        </div>
                                        <Filter column={column} />
                                   </TableCell>
                              ))}
                         </TableRow>
                    ))}
               </TableHead>

               <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
                         prepareRow(row)
                         return (
                              <TableRow {...row.getRowProps()}>
                                   {row.cells.map(cell => {
                                        return <TableCell {...cell.getCellProps()}>
                                             {cell.render("Cell")}
                                        </TableCell>
                                   })}
                              </TableRow>
                         )
                    })}
               </TableBody>
          </Table>
     )
}

export default RepoTable