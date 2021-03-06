import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {SelectColumnFilter} from '../components/Filters';

import RepoTable from './RepoTable';

const RepoStorage = ({ repos }) => {
     const data = repos.items;
     const columns = useMemo(
          () => [
               {
                    Header: "Repository ID",
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
                    Header: "Repository Name",
                    accessor: "name",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },
               {
                    Header: "Repository Description",
                    accessor: "description",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
                    },
               {
                    Header: "Repository Language",
                    accessor: "language",
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               }
          ],
          []
     )

     return (
          <>
               <RepoTable columns={columns} data={data} />
               <p>hello from RepoStorage</p>
          </>
     );
};

export default RepoStorage;