import styled from '@emotion/styled';

export const TableMain = styled.table`
  font-family: var(--font-main);
  @media screen and (min-width: 768px) {
    display: block;
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const TableHeader = styled.thead`
  position: sticky;
  display: block;
  height: 58px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 30px;
`;

export const TableHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 100%;

  align-items: center;
`;

export const TableHeadCell = styled.th`
  text-transform: capitalize;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  cursor: pointer;
  /* identical to box height */

  color: #000000;

  /* &:first-of-type {
    text-align: start;
  }

  &:nth-of-type(2) {
    width: 60px;
    text-align: start;
  }
  &:nth-of-type(3) {
    width: 40px;
    text-align: start;
  }
  &:nth-of-type(4) {
    width: 100px;
    text-align: start;
  }
  &:nth-of-type(5) {
    width: 100px;
    text-align: start;
  }
  &:nth-of-type(6) {
    width: 70px;
    text-align: start;
  }
  &:nth-of-type(7) {
    width: 100px;
    text-align: start;
  }
  &:last-of-type {
    width: 100px;
    text-align: center;
  } */
`;

export const TableBody = styled.tbody`
  display: block;
  overflow-y: auto;
  max-height: 60vh;
  padding: 5px 20px 15px 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-balance);

    border-radius: 10px;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0 24px 0;
  transition: transform 150ms var(--cubic-bezier);
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const TableCell = styled.td`
  text-align: center;
  line-height: normal;
  &:first-of-type {
    width: 80px;
    text-align: start;
  }
  &:nth-of-type(2) {
    width: 40px;
    text-align: center;
    /* margin-right: 20px; */
  }
  &:nth-of-type(3) {
    width: 90px;
    text-align: center;
  }
  &:nth-of-type(4) {
    width: 100px;
    text-align: center;
  }
  &:nth-of-type(5) {
    width: 100px;
    text-align: center;
  }
  &:nth-of-type(6) {
    width: 60px;
    text-align: center;
  }
  &:last-of-type {
    /* width: 100px; */
    text-align: end;
  }
`;

export const TableCellColor = styled.span`
  margin-right: 30px;
  font-weight: 700;
  color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#FF6596')};
`;

export const ButtonDelete = styled.button`
  height: 15px;
  background: transparent;
  border: none;
  position: relative;
  transition: all 250ms linear;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.7);
  }
`;

export const Trash = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.4);
  }
`;
