import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Navigation from './Navigation';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return <Navigation />;
};

export default App;
