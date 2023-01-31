import { Formik, Form, Field } from 'formik';

export const SearchBox = ({ onClick }) => {
  console.log('before submit');
  const handleSubmit = (values, { resetForm }) => {
    console.log('in submit');
    console.log(values);
    onClick(values);
    resetForm();
  };

  //   const handleSubmit = evt => {
  //     console.log(evt.target.value);
  //     onClick(evt);
  //   };

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
