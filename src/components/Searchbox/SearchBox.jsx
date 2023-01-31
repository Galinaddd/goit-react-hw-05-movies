import { Formik, Form, Field } from 'formik';

export const SearchBox = ({ onSubmit }) => {
  const handleSubmit = values => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="search"></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
