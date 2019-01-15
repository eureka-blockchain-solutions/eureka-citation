import styled from "styled-components";
import { __FIFTH, __THIRD } from "../helpers/colors";

export const Separator = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "2.5px")};
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
  background-image: linear-gradient(120deg, ${__THIRD} 0%, ${__FIFTH} 100%);
  border-radius: 15px;
  align-self: center;
`;
