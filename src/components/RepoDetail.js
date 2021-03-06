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
                         </Typography>
                         <Typography>
                         <h5 className="detail-card-text">
                              <strong>Owner Login Name:</strong> {repo.owner.login}
                         </h5>
                         <h5 className="detail-card-text">
                              <strong>Repo Description:</strong> {repo.description}
                         </h5>
                         <h5 className="detail-card-text">
                              <strong>Stargazers Count:</strong> {repo.stargazers_count}
                         </h5>
                         <h5 className="detail-card-text">
                              <strong>Language:</strong> {repo.language}
                         </h5>
                         </Typography>
                    </div>
               </div>
          </section>
     );
};

export default RepoDetail;