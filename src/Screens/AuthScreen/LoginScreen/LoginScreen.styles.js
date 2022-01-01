import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';
import font from '../../../styles/font';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logo: {
    width: sizes.logo,
    height: sizes.logo,
    alignSelf: 'center',
  },
  error: {
    color: colors.error,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: font.font,
  },
});
