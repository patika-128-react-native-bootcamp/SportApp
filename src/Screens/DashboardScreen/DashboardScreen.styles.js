import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
  info_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.small,
  },
  button_container: {
    marginBottom: spacing.small,
  },
});
