import React from 'react';

import Authentication from '../Components/Authentication/Authentication';
//
const LogInPage = (props) => {
  return (
    <>
      <Authentication forPage={props.forPage} />
    </>
  );
};

export default LogInPage;
