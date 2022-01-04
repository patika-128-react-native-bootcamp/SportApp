import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map_container: {
    height: 615,
  },
  map_viewport: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  bottom_container: {
    backgroundColor: colors.primary,
    height: 100,
  },
});