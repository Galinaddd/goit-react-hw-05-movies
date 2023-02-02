import { Formik, Form, Field } from 'formik';
import { Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

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

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};
