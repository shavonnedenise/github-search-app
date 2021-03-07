import React from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//**---- A basic 404 Error page with a little bit of Shavonne energy :3 ----**//

const ErrorFOF = () => {
     return (
          <>
               <Grid className="error-page-container">
                    <Button>
                         <Link to={`/`}>Go back to search repositories</Link>
                    </Button>
                    <Paper elevation={3} square className="details-page-card">
                         <Typography variant="h2" align="center">
                              <div className="error-card-text">
                                   Error 404
                              </div>
                         </Typography>
                         <Typography variant="h5" align="center">
                              <div className="error-card-text">
                                   Uh oh friend - you've reached a page that doesn't exist.
                              </div>
                         </Typography>
                         <Typography variant="h5" align="center">
                              <div className="error-card-text">
                                   How about we head back to the <Link to={`/`}>search page</Link> and search for some kitty cats!
                              </div>
                         </Typography>
                         <Typography variant="overline" align="center">
                              <div>
                                   Meow &hearts;
                              </div>
                         </Typography>
                    </Paper>
               </Grid>
          </>
     );
};

export default ErrorFOF;