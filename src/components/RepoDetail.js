import React from 'react';
import Typography from '@material-ui/core/Typography';

const RepoDetail = ({ repo }) => {
     return (
          <section>
               <div>
                    <div>
                         <Typography>
                              <h1 className="detail-card-text">
                                   <strong>Title:</strong> {repo.name}
                              </h1>
                              <h5 className="detail-card-text">
                                   <strong>Owner:</strong> {repo.owner.login}
                              </h5>
                              <h5 className="detail-card-text">
                                   <strong>Description:</strong> {repo.description}
                              </h5>
                              <h5 className="detail-card-text">
                                   <strong>Language:</strong> {repo.language}
                              </h5>
                              <h5 className="detail-card-text">
                                   <strong>Stargazers:</strong> {repo.stargazers_count}
                              </h5>
                              <h5 className="detail-card-text">
                                   <strong>Forks:</strong> {repo.forks}
                              </h5>
                         </Typography>
                    </div>
               </div>
          </section>
     );
};

export default RepoDetail;