import React from 'react';
import Typography from '@material-ui/core/Typography';

//**---- This component is creating the actual details for the details page ----**//

const RepoDetail = ({ repo }) => {
     return (
          <section>
               <div>
                    <div>
                         <Typography variant="h3">
                              <div className="detail-card-text">
                                   <strong>Name:</strong> {repo.name}
                              </div>
                         </Typography>
                         <Typography variant="h5">
                              <div className="detail-card-text">
                                   <strong>Owner:</strong> {repo.owner.login}
                              </div>
                         </Typography>
                         <Typography variant="h5">
                              <div className="detail-card-text">
                                   <strong>Description:</strong> {repo.description}
                              </div>
                         </Typography>
                         <Typography variant="h5">
                              <div className="detail-card-text">
                                   <strong>Language:</strong> {repo.language}
                              </div>
                         </Typography>
                         <Typography variant="h5">
                              <div className="detail-card-text">
                                   <strong>Stargazers:</strong> {repo.stargazers_count}
                              </div>
                         </Typography>
                         <Typography variant="h5">
                              <div className="detail-card-text">
                                   <strong>Forks:</strong> {repo.forks}
                              </div>
                         </Typography>
                    </div>
               </div>
          </section>
     );
};

export default RepoDetail;