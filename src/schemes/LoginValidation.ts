import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
  email: Yup.string().required('This input is required').email('Email is not valid'),
  password: Yup.string().required('This input is required').min(4),
});

export default LoginValidation;
