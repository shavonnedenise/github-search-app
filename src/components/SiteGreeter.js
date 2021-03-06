import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SiteGreeter = () => {
     return (
          <Grid container justify="center" s={12}>
               <Typography align="center">
                    <h1 className="site-greeter">
                         The GitHub Repository Search App
                    </h1>
               </Typography>
          </Grid>
     );
};

export default SiteGreeter;