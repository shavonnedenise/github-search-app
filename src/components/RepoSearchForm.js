import React from 'react';

const RepoSearchForm = ({
     onSubmitHandler,
     searchTerm,
     onInputChange,
     error,
}) => {
     return (
          <form onSubmit={onSubmitHandler}>
               <label>
                    Search for repositories
               </label>
               <input
                    type="search"
                    placeholder="microservice, restful design, etc.,"
                    value={searchTerm}
                    onChange={onInputChange}
                    required
               />
               <button type="submit">Search</button>
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