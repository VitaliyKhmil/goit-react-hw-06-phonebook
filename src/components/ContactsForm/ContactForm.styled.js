import styled from 'styled-components';

// import { Form, Field } from 'formik';

export const FormButton = styled.button`
  width: 300px;
  height: 35px;
  font-size: medium;
  font-weight: bold;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: red;
`;
