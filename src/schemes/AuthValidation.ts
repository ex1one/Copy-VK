import * as Yup from 'yup';

const AuthValidation = Yup.object().shape({
  name: Yup.string().required('This input is required'),
  email: Yup.string().required('This input is required').email('Email is not valid'),
  password: Yup.string().required('This input is required').min(4),
});

export default AuthValidation;
