import {
  FormButton,
  Label,
  ErrorText,
} from 'components/ContactsForm/ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { add, getItemsValue } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().length(7).required(),
});

export const ContactForm = () => {

   const states = useSelector(getItemsValue);
  const dispatch = useDispatch();
  

  const handleSubmit = ({name, number}, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    states.find(state => state.name === newContact.name) ? 
      alert(`${name} is already in contacts. `)
      : dispatch(add(newContact));
    resetForm();
  };

 
    return (
      <Formik
        initialValues={{name: '', number: ''}}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
          <Form>
            <Label>
              Name:
              <Field
                type="text"
                name="name"                
              />
              <ErrorMessage
                name="name"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </Label>
            <Label>
              Number:
              <Field
                type="tel"
                name="number"
              />
              <ErrorMessage
                name="number"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </Label>

            <FormButton type="submit">Add contact</FormButton>
          </Form>
      </Formik>
    );
  }