import React from 'react';
import Typography from '@material-ui/core/Typography';

//**---- Creating a loading text for when the API is fetching data ----**//

const Loader = ({ loading, searchTerm }) => {
     return (
          <>  
               <Typography align="center">
                    {loading && (
                         <div className="loading-text">
                              Howdy partner! Please wait while we fetch those repos with "<strong>{searchTerm}</strong>"
                         </div>
                    )}
               </Typography>
          </>
     );
};

export default Loader;