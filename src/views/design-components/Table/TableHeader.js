import React from 'react';
import styled from 'styled-components';
import {__FIFTH} from '../../../helpers/colors.js';
import {MyTable} from './Table.js';
import {TableRow} from './TableRow.js';

const MyTableHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const TableHeaderCell = styled.th`
  &:first-child {
    padding-left: 30px;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
  font-size: 15px;
  padding: 14px 0;
  color: #fff;
  line-height: 1.4;
  background-color: ${__FIFTH};
  width: ${props => props.width}%;
  text-align: ${props =>
    props.textCenter === props.title ? 'center' : 'left'};
`;

export const TableHeader = props => {
  return (
    <MyTableHeader>
      <MyTable>
        <thead>
          <TableRow>
            {props.header.map((title, i) => {
              return (
                <TableHeaderCell
                  textCenter={props.textCenter}
                  title={title}
                  width={props.columnWidth[i]}
                  key={i}
                >
                  {title}
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </thead>
      </MyTable>
    </MyTableHeader>
  );
};
