import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const RepoSearchForm = ({
     onSubmitHandler,
     searchTerm,
     onInputChange,
     error,
}) => {

     return (
          <form onSubmit={onSubmitHandler}>
               <TextField
                    id="outlined-textarea"
                    label="Search me for repos"
                    placeholder="Kitty cats, Java, JS, etc!"
                    variant="outlined"
                    size="small"
                    margin="dense"
                    value={searchTerm}
                    onChange={onInputChange}
                    required
               />
               <Button 
                    type="submit" 
                    variant="contained"
                    color="primary"
                    size="large"
               >
                    Search
               </Button>
               {error && (
                    <div style={{ color: `red` }}>
                         <p>Uh oh! An error occurred while trying to fetch from the API!</p>
                         <p>Please try searching for something else!</p>
                    </div>
               )}
          </form>
     );
};

export default RepoSearchForm;