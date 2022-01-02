import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Navigation from './Navigation';
import AuthProvider from './Context/Auth';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
