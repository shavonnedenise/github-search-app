import React from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ErrorFOF = () => {
     return (
          <>
               <Grid className="error-page-container">
                    <Button>
                         <Link to={`/`}>Go back to search repositories</Link>
                    </Button>
                    <Paper elevation={3} square className="details-page-card">
                         <Typography align="center">
                              <h1 className="error-card-text">
                                   Error 404
                              </h1>
                              <h4 className="error-card-text">
                                   Uh oh friend - you've reached a page that doesn't exist.
                              </h4>
                              <h4 className="error-card-text">
                                   How about we head back to the <Link to={`/`}>search page</Link> and search for some kitty cats!
                              </h4>
                              <p>
                                   Meow &hearts;
                              </p>
                         </Typography>
                    </Paper>
               </Grid>
          </>
     );
};

export default ErrorFOF;