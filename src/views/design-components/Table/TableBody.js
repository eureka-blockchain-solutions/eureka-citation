import React from 'react';
import styled from 'styled-components';
import {__GRAY_200, __THIRD} from '../../../helpers/colors.js';
import {MyTable} from './Table.js';
import {TableRow} from './TableRow.js';

const MyTableBody = styled.div`
  touch-action: auto;
  position: relative;
`;

const TableBodyCell = styled.td`
  &:first-child {
    padding-left: 30px;
  }
  font-size: 13px;
  color: ${__THIRD};
  line-height: 1.4;
  padding: ${props => (props.padding ? props.padding : '18px 0')};
  width: ${props => props.width}%;
  border-bottom: 1px solid ${__GRAY_200};
`;

export const TableBody = props => {
  return (
    <MyTableBody>
      <MyTable>
        <tbody>
          {props.data.map((obj, i) => {
            return (
              <TableRow key={i}>
                {Object.keys(obj).map((field, i) => {
                  return (
                    <TableBodyCell
                      padding={props.padding}
                      width={props.columnWidth[i]}
                      key={i}
                    >
                      {obj[field]}
                    </TableBodyCell>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </MyTable>
    </MyTableBody>
  );
};
