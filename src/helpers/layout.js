import styled from 'styled-components';

export const DESKTOP_WIDTH = 1160;
export const SMALL_LAPTOPS_WIDTH = 970;
export const TABLETS_WIDTH = 750;
export const SMALL_WIDTH = 768;

export const HEADER_PADDING_TOP = 95;
export const PANEL_LEFT_BREAK_POINT = 1300;
export const PANEL_LEFT_NORMAL_WIDTH = 165;
export const PANEL_LEFT_MOBILE_WIDTH = 65;

export const CARD_WIDTH_IN_PERCENTAGE = '85%';

export const Row = styled.div`
  display: flex;
  max-width: ${DESKTOP_WIDTH}px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;
