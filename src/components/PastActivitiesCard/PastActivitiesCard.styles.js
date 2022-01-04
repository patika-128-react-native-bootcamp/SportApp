import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';
import font from '../../styles/font';
import sizes from '../../styles/sizes';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: radius.normal,
    padding: spacing.small,
    margin: spacing.small,
  },
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: font.font,
    fontSize: sizes.title,
  },
});
