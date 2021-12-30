import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import sizes from '../../styles/sizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';
import font from '../../styles/font';

const baseStyles = StyleSheet.create({
  button_container: {
    borderWidth: 2,
    borderRadius: radius.smooth,
    margin: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.button_box,
  },
  label: {
    fontFamily: font.font,
    fontSize: sizes.title,
  },
});

export default {
  primary_button: StyleSheet.create({
    button_container: {
      ...baseStyles.button_container,
      backgroundColor: colors.secondary,
      borderColor: colors.black,
    },
    label: {
      ...baseStyles.label,
      color: colors.black,
    },
  }),
  secondary_button: StyleSheet.create({
    button_container: {
      ...baseStyles.button_container,
      backgroundColor: colors.primary,
      borderColor: colors.secondary,
    },
    label: {
      ...baseStyles.label,
      color: colors.secondary,
    },
  }),
};
