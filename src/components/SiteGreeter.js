import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//**---- A basic header for the application ----**//

const SiteGreeter = () => {
     return (
          <Grid container justify="center" s={12}>
               <Typography align="center" variant="h2">
                    <div className="site-greeter">
                         The GitHub Repository Search App
                    </div>
               </Typography>
          </Grid>
     );
};

export default SiteGreeter;