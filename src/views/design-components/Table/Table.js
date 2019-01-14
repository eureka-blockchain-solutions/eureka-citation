import React from 'react';
import styled from 'styled-components';
import {TableHeader} from './TableHeader.js';
import {TableBody} from './TableBody.js';

const TableWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const TableContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  padding-top: 48px;
  background-color: #fff;
`;

export const MyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Table = props => {
  return (
    <TableWrapper tableWidth={props.tableWidth}>
      <TableContainer>
        <TableHeader
          header={props.header}
          columnWidth={props.columnWidth}
          textCenter={props.textCenter}
        />
        <TableBody
          padding={props.padding}
          data={props.data}
          columnWidth={props.columnWidth}
        />
      </TableContainer>
    </TableWrapper>
  );
};
