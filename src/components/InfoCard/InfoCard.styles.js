import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import sizes from '../../styles/sizes';
import spacing from '../../styles/spacing';
import font from '../../styles/font';

const baseStyles = StyleSheet.create({
  info_container: {
    borderWidth: 1,
    borderRadius: radius.normal,
    margin: spacing.tiny,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
  },
  title: {
    fontFamily: font.font,
    textAlign: 'center',
  },
  info: {
    fontFamily: font.font,
    textAlign: 'center',
  },
});

export default {
  small_box: StyleSheet.create({
    info_container: {
      ...baseStyles.info_container,
      height: sizes.info_box / 2,
      width: sizes.info_box,
    },
    title: {
      ...baseStyles.title,
      fontSize: sizes.text,
    },
    info: {
      ...baseStyles.info,
      fontSize: sizes.text,
    },
  }),

  big_box: StyleSheet.create({
    info_container: {
      ...baseStyles.info_container,
      height: sizes.info_box,
      width: sizes.info_box * 1.5,
      padding: spacing.medium,
    },
    title: {
      ...baseStyles.title,
      fontSize: sizes.title,
    },
    info: {
      ...baseStyles.info,
      fontSize: sizes.title,
    },
  }),
};
