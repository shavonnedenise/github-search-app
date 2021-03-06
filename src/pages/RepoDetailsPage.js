import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
               <Grid className="details-page-container">
               <Button>
               <Link to={`/`}>Go back to search repositories</Link>
               </Button>
               <Paper elevation={3} square className="details-page-card">
               {loading && (
                    <div style={{ color: `green` }}>
                         <p>Please Hold! Loading details for repo ID: </p><strong>{repoId}</strong>
                    </div>
               )}
               {error && (
                    <div style={{ color: `red` }}>
                         <p>Uh oh! An error occurred, while fetching from the API.</p>
                    </div>
               )}
               {repo && <RepoDetail repo={repo} />}
               </Paper>
               </Grid>
          </>
     );
};

export default RepoDetailsPage;