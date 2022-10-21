import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  width: 380px;
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const FriendItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${span => (span.status ? 'green' : 'red')};
`;
export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 24px;
`;
