import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//**---- This component is creating the search form ----**//

const RepoSearchForm = ({
     onSubmitHandler,
     searchTerm,
     onInputChange,
     error,
}) => {

     return (
          <form onSubmit={onSubmitHandler}>
               <Grid container justify="center">
                    <Grid className="d-flex" item>
                         <div className="input-text-field">
                              <TextField 
                                   id="outlined-textarea"
                                   label="Search me for repos"
                                   placeholder="kitty cats, Java, JS, etc!"
                                   variant="outlined"
                                   value={searchTerm}
                                   onChange={onInputChange}
                                   required 
                              />
                         </div>
 
                         <Button type="submit" aria-label="delete">
                              Search
                         </Button>
                         {error && (
                              <div style={{ color: `red` }}>
                                   <p>Uh oh! An error occurred while trying to fetch from the API!</p>
                                   <p>Please try searching for something else!</p>
                              </div>
                         )}
                    </Grid>
               </Grid>
          </form>
     );
};

export default RepoSearchForm;