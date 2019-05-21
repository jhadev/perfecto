import React from 'react';

const Column = props => (
  <div className="column" {...props}>
    {props.children}
  </div>
);

export default Column;
