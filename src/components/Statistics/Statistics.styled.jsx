import styled from 'styled-components';
import { getRandomHexColor } from './Statistics.jsx';

export const StatisticsContainer = styled.div`
  background-color: #fff;
  width: 380px;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  padding: 30px 0;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  color: #fff;
  font-size: 18px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 18px;
`;
