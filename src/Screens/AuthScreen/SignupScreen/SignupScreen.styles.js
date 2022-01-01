import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logo: {
    width: sizes.logo_small,
    height: sizes.logo_small,
    alignSelf: 'center',
  },
});
