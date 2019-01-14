import React from 'react';
import styled from 'styled-components';
import './grid.css';

const Cube = styled.div`
  background-color: ${props => (props.white ? 'white' : 'rgb(66, 113, 173)')};
`;
const GridSpinner = props => {
  return (
    <div className="sk-cube-grid">
      <Cube className="sk-cube sk-cube1" {...props} />
      <Cube className="sk-cube sk-cube2" {...props} />
      <Cube className="sk-cube sk-cube3" {...props} />
      <Cube className="sk-cube sk-cube4" {...props} />
      <Cube className="sk-cube sk-cube5" {...props} />
      <Cube className="sk-cube sk-cube6" {...props} />
      <Cube className="sk-cube sk-cube7" {...props} />
      <Cube className="sk-cube sk-cube8" {...props} />
      <Cube className="sk-cube sk-cube9" {...props} />
    </div>
  );
};

export default GridSpinner;
