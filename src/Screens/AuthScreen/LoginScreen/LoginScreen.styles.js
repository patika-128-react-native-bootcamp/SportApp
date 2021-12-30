import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';
import spacing from '../../../styles/spacing';

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
  input_container: {
    marginBottom: spacing.large,
  },
  button_container: {
    marginTop: spacing.large,
  },
});
