import styled from 'styled-components';

export const ContactItemLi = styled.li`
  display: flex;
  align-items: center;
  font-size: medium;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 15px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(255 255 255);
  border-width: 2px;
  border-color: rgb(222 222 222);
  border-radius: 5px;
  padding: 2px 25px;

  :hover {
    background-color: gray;
  }
`;

