import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: #fff;
  width: 600px;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  border-collapse: collapse;
  color: #8e8e8e;
`;

export const Thead = styled.thead`
  color: #fff;
  background-color: rgb(8, 185, 205);
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
`;
export const Tr = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;
export const Th = styled.th`
  padding: 10px;
  border: 1px solid #d3d5e3;
`;
export const Tbody = styled.tbody`
  color: #8e8e8e;
`;
export const Td = styled.th`
  padding: 10px;
  border: 1px solid #d3d5e3;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
`;
