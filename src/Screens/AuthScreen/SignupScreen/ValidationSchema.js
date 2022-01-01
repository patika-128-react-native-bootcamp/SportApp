import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please Enter A Valid Fullname')
    .max(40)
    .required(),
  age: Yup.number().required('Please Enter Your Age'),
  email: Yup.string().email('Invalid email').required('E-mail Required'),
  weight: Yup.number().required('Please Enter Your Current Weight'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Password Required'),
  repassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords Must Match',
  ),
});

export default LoginSchema;
