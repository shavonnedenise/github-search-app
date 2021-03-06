import React from 'react';

const RepoDetail = ({ repo }) => {
     return (
          <section>
               <div>
                    <div>
                         <h3>
                              <strong>Title:</strong> {repo.name}
                         </h3>
                         <p>
                              <strong>Owner Login Name:</strong> {repo.owner.login}
                         </p>
                         <p>
                              <strong>Repo Description:</strong> {repo.description}
                         </p>
                         <p>
                              <strong>Stargazers Count:</strong> {repo.stargazers_count}
                         </p>
                         <p>
                              <strong>Language:</strong> {repo.language}
                         </p>
                    </div>
               </div>
          </section>
     );
};

export default RepoDetail;