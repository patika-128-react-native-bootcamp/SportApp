export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid E-mail';
    case 'auth/email-already-exists':
      return 'This E-mail Already Exists';
    case 'auth/user-not-found':
      return 'User Not Found';
    case 'auth/weak-password':
      return 'Weak Password';
    case 'auth/wrong-password':
      return 'Password is Invalid';
    default:
      return errorCode;
  }
}
