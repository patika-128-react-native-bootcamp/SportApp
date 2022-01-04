import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import sizes from '../../styles/sizes';
import font from '../../styles/font';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    padding: spacing.small,
    margin: spacing.small,
    borderWidth: 1,
    borderRadius: radius.normal,
    justifyContent: 'space-between',
  },
  left_container: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: font.font,
    fontSize: sizes.title,
  },
});
