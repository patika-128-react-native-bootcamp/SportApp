import * as Yup from 'yup';

const SignupSchema = () => {
  return Yup.object().shape({
    fullname: Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Please Enter A Valid Fullname')
      .max(40)
      .required('Please Enter Your Fullname'),
    age: Yup.number().required('Please Enter Your Age'),
    weight: Yup.number().required('Please Enter Your Current Weight'),
    email: Yup.string().email('Invalid email').required('E-mail Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Password Required'),
    repassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords Must Match')
      .required('Password Confirmation Required'),
  });
};

export default SignupSchema;
