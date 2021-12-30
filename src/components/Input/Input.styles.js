import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import sizes from '../../styles/sizes';
import spacing from '../../styles/spacing';
import font from '../../styles/font';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.secondary,
    borderRadius: radius.smooth,
    fontSize: sizes.title,
    height: sizes.button_box,
    paddingHorizontal: spacing.small,
    margin: spacing.small,
    fontFamily: font.font,
  },
});
