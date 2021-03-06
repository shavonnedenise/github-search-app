import React from 'react';

const Loader = ({ loading, searchTerm }) => {
     return (
          <>
               {loading && (
                    <div style={{ color: `green` }} className="text-center">
                         Hiya! Please wait while we fetch those repos for "<strong>{searchTerm}</strong>"
                    </div>
               )}
          </>
     );
};

export default Loader;