import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  width: 380px;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 30px 0;
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 0 7px #666;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;
export const Tag = styled.p`
  color: #8e8e8e;
  font-size: 24px;
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #d3d5e3;
  width: 100%;
`;
export const Label = styled.span`
  font-size: 18px;
  color: #8e8e8e;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
