/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({ children, fluid }) => (
  <div className={`container${fluid ? ' is-fluid' : ''}`}>{children}</div>
);

export default Container;
