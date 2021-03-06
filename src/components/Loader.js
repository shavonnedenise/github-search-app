import React from 'react';
import Typography from '@material-ui/core/Typography';

const Loader = ({ loading, searchTerm }) => {
     return (
          <>  
               <Typography align="center">
               {loading && (
                    <div className="loading-text">
                         Howdy! Please wait while we fetch those repos with "<strong>{searchTerm}</strong>"
                    </div>
               )}
               </Typography>
          </>
     );
};

export default Loader;