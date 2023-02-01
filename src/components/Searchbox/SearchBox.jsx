import { Formik, Form, Field } from 'formik';

export const SearchBox = ({ onClick }) => {
  const handleSubmit = (values, { resetForm }) => {
    onClick(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="search" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
