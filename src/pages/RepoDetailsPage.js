import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

import RepoDetail from '../components/RepoDetail';

const RepoDetailsPage = ({ match }) => {
     const {
          params: { repoId },
     } = match;
     const [repo, setRepo] = useState(null);
     const [error, setError] = useState(false);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          const API_BASE_URL = `https://api.github.com/repositories`;
          const fetchRepo = async () => {
               setLoading(true);
               setError(false);
               try {
                    const result = await axios.get(`${API_BASE_URL}/${repoId}`);
                    setRepo(result.data);
               } catch (error) {
                    setError(true);
               }
                    setLoading(false);
          };
          // Call the API
          fetchRepo();
     }, [repoId]);

     return (
          <>
               <Paper elevation={3} square>
               <Link to={`/`}>Go back to search repositories</Link>
               {loading && (
                    <div style={{ color: `green` }}>
                         loading repo detail for repo ID: <strong>{repoId}</strong>
                    </div>
               )}
               {error && (
                    <div style={{ color: `red` }}>
                         some error occurred, while fetching api
                    </div>
               )}
               {repo && <RepoDetail repo={repo} />}
               </Paper>
          </>
     );
};

export default RepoDetailsPage;