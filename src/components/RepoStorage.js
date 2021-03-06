import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {SelectColumnFilter} from '../components/Filters';

import RepoTable from './RepoTable';

//**---- Here I am storing the data received from the input field on the SearchPage and designing a table to display the data from the API ----**//

const RepoStorage = ({ repos }) => {
     const data = repos.items;
     const columns = useMemo(
          () => [
               {
                    Header: "ID",
                    accessor: "id",
                    Cell: (repos) => {
                         return (
                              <Link to={`/repo/${repos.cell.value}`}>{String(repos.cell.value)}</Link>
                         )
                    },
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },
               {
                    Header: "Name",
                    accessor: "name",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },
               {
                    Header: "Description",
                    accessor: "description",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },
               {
                    Header: "Language",
                    accessor: "language",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },
               {
                    Header: "Stargazers",
                    accessor: "stargazers_count",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               }
          ],
          []
     )

     return (
          <>
               <RepoTable columns={columns} data={data} />
          </>
     );
};

export default RepoStorage;