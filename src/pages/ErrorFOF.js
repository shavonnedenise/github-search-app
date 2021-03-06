import React from 'react';
import {Link} from 'react-router-dom';

const ErrorFOF = () => {
     return (
          <section>
               <div>404 Page</div>
               <Link to="/">Return Home</Link>
          </section>
     );
};

export default ErrorFOF;