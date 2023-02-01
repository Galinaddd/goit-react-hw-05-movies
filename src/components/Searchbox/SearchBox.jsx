import { Formik, Form, Field } from 'formik';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = ({ onClick }) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const handleSubmit = (values, { resetForm }) => {
    onClick(values);
    resetForm();
    console.log('values', values.name);
    setSearchParams({ search: values.name });
    console.log('searchParams', searchParams);
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
