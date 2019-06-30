import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => (
  <>
    <h2>404!</h2>
    <div>
Erk - this page doesn&apos;t exist.
      <Link to="/">Go home?</Link>
    </div>
  </>
);

export default { PageNotFound };
